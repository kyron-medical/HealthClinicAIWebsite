# app.py
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import smtplib
from email.mime.text import MIMEText
from langchain_ollama import ChatOllama
import logging
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
# ... rest of your code

logging.basicConfig(level=logging.DEBUG)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Initialize LangChain Model
llm = ChatOllama(model="llama3.2:1b", temperature=0.7)

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx', 'txt'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def read_file(filepath):
    with open(filepath, 'r') as file:
        return file.read()

def generate_appeal(denial_content, patient_notes_content):
    prompt = f"""
    The following is a health insurance claim denial and corresponding patient visit notes. Please generate a formal letter from the perspective of the provider appealing the claim denial using the visit notes, including patient information and medical history.

    --- Health Insurance Claim Denial ---
    {denial_content}

    --- Patient Visit Notes ---
    {patient_notes_content}

    Write a brief professional letter appealing the denial:
    """
    
    response = llm.invoke(prompt)
    return response.content




@app.route('/api/generate-appeal', methods=['POST'])
def generate_appeal_route():
    if 'files' not in request.files:
        return jsonify({'error': 'No files part in the request'}), 400

    files = request.files.getlist('files')


    print(files)

    saved_files = {}
    for file in files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            saved_files[filename] = file_path
        else:
            return jsonify({'error': 'Invalid file type'}), 400

    try:
        logging.debug("Starting appeal generation.")
        # Read the necessary files
        denial_content = read_file(saved_files.get('denial.txt'))
        patient_notes_content = read_file(saved_files.get('patientnotes.txt'))

        print(denial_content)
        print(patient_notes_content)

        # Generate the appeal letter
        appeal_letter = generate_appeal(denial_content, patient_notes_content)
        logging.debug("Appeal generated successfully.")
        
        print(appeal_letter)
        # Save the appeal letter
        appeal_path = os.path.join(app.config['UPLOAD_FOLDER'], 'appeal_letter.txt')
        with open(appeal_path, 'w') as file:
            file.write(appeal_letter)

    

        # Optionally send the email
        # send_email(subject, appeal_letter, 'lisajingd@gmail.com', [email], 'your_app_password')

        # Return the appeal letter as a JSON response
        return jsonify({'appeal_letter': appeal_letter}), 200


    except Exception as e:
        return jsonify({'error': str(e)}), 500





# sending the email 
def send_email(subject, body, sender, recipients):

    app_password = os.getenv('GMAIL_APP_PASSWORD')
    if not app_password:
        logging.error("GMAIL_APP_PASSWORD not found in environment variables.")
        raise ValueError("Email credentials are not configured properly.")

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = ', '.join(recipients)

    # Connect to the Gmail SMTP server
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
        smtp_server.login(sender, app_password)
        smtp_server.sendmail(sender, recipients, msg.as_string())
    print("Message sent!")



    # # Save the appeal letter to a .txt file, this is optional 
    # def save_appeal_letter(appeal_letter):
    #     with open('appeal_letter.txt', 'w') as file:
    #         file.write(appeal_letter)
    #     print("Appeal Letter generated and saved!")
    # save_appeal_letter(appeal_letter)

    # schedule sending the email 
    # schedule_time = "09:54"
    # schedule.every().day.at(schedule_time).do(send_email, subject, appeal_letter, sender, recipients, password)
    # print(f"Scheduled email to be sent at {schedule_time}.")

    # while True:
    #     schedule.run_pending()


@app.route('/api/email-send', methods=['POST'])
def send_email_route():
    sender_email = request.form.get('sender_email')
    recipient_email = request.form.get('recipient_email')
    subject = request.form.get('subject')
    appeal_letter = request.form.get('appeal_letter')

    send_email(subject, appeal_letter, sender_email, recipient_email)
    return jsonify({'message': 'Email sent!'}), 200

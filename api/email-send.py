
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
import requests

load_dotenv()

app = Flask(__name__)
CORS(app)
# ... rest of your code

logging.basicConfig(level=logging.DEBUG)

def verify_token(token):
    # Implement token verification logic with Clerk
    response = requests.get(
        'https://api.clerk.dev/v1/verifications',
        headers={'Authorization': f'Bearer {token}'}
    )
    return response.status_code == 200


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


def handler(request, context):
    from werkzeug.wrappers import Request, Response

    req = Request(request)
    resp = app.full_dispatch_request()

    return Response(resp.get_data(), status=resp.status_code, headers=resp.headers)
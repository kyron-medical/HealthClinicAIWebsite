import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const senderEmail = formData.get("sender_email") as string;
    const recipientEmail = formData.get("recipient_email") as string;
    const subject = formData.get("subject") as string;
    const appealLetter = formData.get("appeal_letter") as string;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: appealLetter,
    });

    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

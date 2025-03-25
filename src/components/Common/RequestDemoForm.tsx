"use client";

import emailjs from "emailjs-com";
import React from "react";

function RequestDemoForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your actual EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual EmailJS template ID
        e.target,
        "YOUR_USER_ID", // Replace with your actual EmailJS user ID
      )
      .then((result) => {
        alert(
          "Your request has been successfully sent. We will contact you soon!",
        );
      })
      .catch((error) => {
        alert(
          "There was an error sending your request. Please try again later.",
        );
        console.error("Error sending email:", error);
      });
  }

  return (
    <form
      onSubmit={sendEmail}
      className="my-4 p-4 border rounded-md shadow-lg"
      data-oid="muqfsm8"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="block w-full mb-2 p-2 border rounded"
        data-oid="kl.n9x."
      />

      <input
        type="email"
        name="reply_to"
        placeholder="Your Email"
        required
        className="block w-full mb-2 p-2 border rounded"
        data-oid="if_zavk"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="block w-full mb-2 p-2 border rounded"
        data-oid="ydpgssw"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        data-oid="h9bg50j"
      >
        Request Demo
      </button>
    </form>
  );
}

export default RequestDemoForm;

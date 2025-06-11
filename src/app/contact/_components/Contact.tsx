"use client";

import React, { useState } from "react";

// Define a type for the API response
interface EmailResponse {
  url: string;
}

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Use a regular function that calls the async function internally
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    void sendEmail(); // 'void' operator to explicitly ignore the promise
  };

  // Separate async function to handle the API call
  const sendEmail = async (): Promise<void> => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, subject, message }),
      });

      if (response.ok) {
        const data = (await response.json()) as EmailResponse;
        if (data && typeof data.url === "string") {
          window.location.href = data.url; // Now safely typed
          console.log("Email sent successfully");
        }
      } else {
        console.error("Failed to send email", response.statusText);
      }
    } catch (error: unknown) {
      console.error("Error: Failed to fetch", error);
      return;
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      data-oid="081ltrn"
    >
      <div className="container" data-oid="hm3tw10">
        <div className="-mx-4 flex flex-wrap" data-oid="3zb8rp2">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12" data-oid="eapu1d5">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
              data-oid="1pgcgot"
            >
              <h2
                className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
                data-oid="smdum6c"
              >
                Request a Demo
              </h2>
              <p
                className="mb-12 text-base font-medium text-body-color"
                data-oid="ljt02-v"
              >
                Our support team will get back to you ASAP via email.
              </p>
              <form data-oid=".zl6r5t">
                <div className="-mx-4 flex flex-wrap" data-oid="gxuwp4b">
                  <div className="w-full px-4 md:w-1/2" data-oid="6ijp1kj">
                    <div className="mb-8" data-oid="lkf4272">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="d4sukx-"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-oid="2ephft4"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2" data-oid="gk8u5u8">
                    <div className="mb-8" data-oid="ec1sp4x">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="5fdwt.l"
                      >
                        Subject
                      </label>
                      <input
                        type="subject"
                        placeholder="Enter your Subject"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        data-oid="df8:025"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4" data-oid="swsmj:k">
                    <div className="mb-8" data-oid="_coli1g">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="cpj87wf"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        data-oid=":1jmntu"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4" data-oid="mke7.3b">
                    <button
                      type="button"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={handleSubmit}
                      data-oid="ytbxbv2"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

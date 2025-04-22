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
    } catch (error : unknown) {
      console.error("Error: Failed to fetch", error);
      return;
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      data-oid=":nuzm.m"
    >
      <div className="container" data-oid="eaowd-k">
        <div className="-mx-4 flex flex-wrap" data-oid="je55-p2">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12" data-oid="ox_zj.g">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
              data-oid="jrluhue"
            >
              <h2
                className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
                data-oid="2a54.:e"
              >
                Request a Demo
              </h2>
              <p
                className="mb-12 text-base font-medium text-body-color"
                data-oid="gmx5rau"
              >
                Our support team will get back to you ASAP via email.
              </p>
              <form data-oid="g4flk4j">
                <div className="-mx-4 flex flex-wrap" data-oid="cq:1wj.">
                  <div className="w-full px-4 md:w-1/2" data-oid="n--zy23">
                    <div className="mb-8" data-oid="m:x12_t">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="wonk5ic"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-oid="681278i"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2" data-oid="2ln2yw.">
                    <div className="mb-8" data-oid="g8h8riy">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="bd1l.uz"
                      >
                        Subject
                      </label>
                      <input
                        type="subject"
                        placeholder="Enter your Subject"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        data-oid=":ufxiy1"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4" data-oid="v--o-wi">
                    <div className="mb-8" data-oid="c3jnt_u">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="f6.iny9"
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
                        data-oid="u_-tv-9"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4" data-oid="xf97tm-">
                    <button
                      type="button"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={handleSubmit}
                      data-oid="01mcb2_"
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

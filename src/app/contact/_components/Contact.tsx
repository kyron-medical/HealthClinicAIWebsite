"use client";

import NewsLatterBox from "./NewsLatterBox";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, subject, message }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.url; // Redirect to Gmail
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email", response.statusText);
      }
    } catch (error) {
      console.error("Error: Failed to fetch", error);
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      data-oid="_t5zuti"
    >
      <div className="container" data-oid="mkis.ss">
        <div className="-mx-4 flex flex-wrap" data-oid="awfum_w">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12" data-oid="yoqb486">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
              data-oid="5b_hb-n"
            >
              <h2
                className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
                data-oid="an:k231"
              >
                Request a Demo
              </h2>
              <p
                className="mb-12 text-base font-medium text-body-color"
                data-oid=".67b1e4"
              >
                Our support team will get back to you ASAP via email.
              </p>
              <form data-oid="9e1kqn8">
                <div className="-mx-4 flex flex-wrap" data-oid="2eas.w-">
                  <div className="w-full px-4 md:w-1/2" data-oid="rjvtpda">
                    <div className="mb-8" data-oid="3j74xji">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="z_f3i4c"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-oid="eiosj:s"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2" data-oid="65dx_q4">
                    <div className="mb-8" data-oid="t6-a3ht">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="e.f1nwe"
                      >
                        Subject
                      </label>
                      <input
                        type="subject"
                        placeholder="Enter your Subject"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        data-oid="6mv.-wn"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4" data-oid="2bv6tl6">
                    <div className="mb-8" data-oid="5q7who2">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        data-oid="5x:k9pz"
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
                        data-oid="5dmnc0o"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4" data-oid="s-dki1i">
                    <button
                      type="button"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={handleSubmit}
                      data-oid="13kdl8r"
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

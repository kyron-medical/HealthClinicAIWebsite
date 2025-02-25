import React from "react";

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="my-8">
      <h2 className="text-3xl font-bold mb-4">Meet the Co-Founders</h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-around">
          <div className="m-4">
            <img
              src="/images/lucas.jpg"
              alt="Lucas Lieberman"
              className="w-32 h-32 rounded-full"
            />

            <h3>Lucas Lieberman</h3>
            <p>Email: lucas_lieberman@brown.edu</p>
          </div>
          <div className="m-4">
            <img
              src="/images/jay.jpg"
              alt="Jay Gopal"
              className="w-32 h-32 rounded-full"
            />

            <h3>Jay Gopal</h3>
            <p>Email: jay_gopal@brown.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

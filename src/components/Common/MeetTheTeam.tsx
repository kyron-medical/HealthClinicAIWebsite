import React from "react";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="my-8" data-oid="996.be2">
      <h2 className="text-3xl font-bold mb-4" data-oid="uplxptg">
        Meet the Co-Founders
      </h2>
      <div className="flex flex-col items-center" data-oid="hjkp7eb">
        <div className="flex flex-row justify-around" data-oid="6od4ecr">
          <div className="m-4" data-oid="mofnhx4">
            <Image
              src="/images/lucas.jpg"
              alt="Lucas Lieberman"
              className="w-32 h-32 rounded-full"
              data-oid="8sngukb"
            />

            <h3 data-oid="fohq.t8">Lucas Lieberman</h3>
            <p data-oid="f.tkobc">Email: lucas_lieberman@brown.edu</p>
          </div>
          <div className="m-4" data-oid="l254wsa">
            <Image
              src="/images/jay.jpg"
              alt="Jay Gopal"
              className="w-32 h-32 rounded-full"
              data-oid="0tmllxp"
            />

            <h3 data-oid="q3kcyq9">Jay Gopal</h3>
            <p data-oid="3f__nen">Email: jay_gopal@brown.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="my-8" data-oid="x3apvtv">
      <h2 className="text-3xl font-bold mb-4" data-oid="2ct9qgy">
        Meet the Co-Founders
      </h2>
      <div className="flex flex-col items-center" data-oid="vq2ws-b">
        <div className="flex flex-row justify-around" data-oid="0bkd7:7">
          <div className="m-4" data-oid="8qpqjy8">
            <Image
              src="/images/lucas.jpg"
              alt="Lucas Lieberman"
              className="w-32 h-32 rounded-full"
              data-oid="7-l29lf"
            />

            <h3 data-oid="g_dctuc">Lucas Lieberman</h3>
            <p data-oid="h5uah88">Email: lucas_lieberman@brown.edu</p>
          </div>
          <div className="m-4" data-oid="-t64t7l">
            <Image
              src="/images/jay.jpg"
              alt="Jay Gopal"
              className="w-32 h-32 rounded-full"
              data-oid="gc7mm9c"
            />

            <h3 data-oid="4o6.z1f">Jay Gopal</h3>
            <p data-oid="8.o8wn-">Email: jay_gopal@brown.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

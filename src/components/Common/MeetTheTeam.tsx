import React from "react";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="my-8" data-oid="z9_dndn">
      <h2 className="text-3xl font-bold mb-4" data-oid="ghf0h_3">
        Meet the Co-Founders
      </h2>
      <div className="flex flex-col items-center" data-oid="j-8adxw">
        <div className="flex flex-row justify-around" data-oid="-lqz365">
          <div className="m-4" data-oid="a.42:o.">
            <Image
              src="/images/lucas.jpg"
              alt="Lucas Lieberman"
              className="w-32 h-32 rounded-full"
              data-oid="p80idll"
            />

            <h3 data-oid="u6kiy2n">Lucas Lieberman</h3>
            <p data-oid="a:779:x">Email: lucas_lieberman@brown.edu</p>
          </div>
          <div className="m-4" data-oid="-23kwkr">
            <Image
              src="/images/jay.jpg"
              alt="Jay Gopal"
              className="w-32 h-32 rounded-full"
              data-oid="n:mt2v9"
            />

            <h3 data-oid="x8s92co">Jay Gopal</h3>
            <p data-oid="y3v5hsc">Email: jay_gopal@brown.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="my-8" data-oid="-flstbm">
      <h2 className="text-3xl font-bold mb-4" data-oid="bhm.3a:">
        Meet the Co-Founders
      </h2>
      <div className="flex flex-col items-center" data-oid="mn3nb41">
        <div className="flex flex-row justify-around" data-oid="tx4i05r">
          <div className="m-4" data-oid="dq:oxx8">
            <Image
              src="/images/lucas.jpg"
              alt="Lucas Lieberman"
              className="w-32 h-32 rounded-full"
              data-oid="f_315fd"
            />

            <h3 data-oid=":9iofc:">Lucas Lieberman</h3>
            <p data-oid="ivdv88g">Email: lucas_lieberman@brown.edu</p>
          </div>
          <div className="m-4" data-oid="4kkwhxm">
            <Image
              src="/images/jay.jpg"
              alt="Jay Gopal"
              className="w-32 h-32 rounded-full"
              data-oid="1pp78kl"
            />

            <h3 data-oid="8w::3ki">Jay Gopal</h3>
            <p data-oid="b-m2_yd">Email: jay_gopal@brown.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="relative z-10 py-16 md:py-20 lg:py-28"
      data-oid="rt84jq8"
    >
      <div className="container" data-oid="ey2:_j4">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
          data-oid="32nolw_"
        />

        <div className="-mx-4 flex flex-wrap" data-oid="gn9:vbh">
          <div className="w-full px-4" data-oid="_8l788p">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
              data-oid="lfbarcg"
            >
              <div
                className="relative aspect-[77/40] items-center justify-center"
                data-oid="9mk0f3b"
              >
                <Image
                  src="/images/video/video.jpg"
                  alt="video image"
                  fill
                  data-oid="ddvizrz"
                />

                <div
                  className="absolute right-0 top-0 flex h-full w-full items-center justify-center"
                  data-oid="sb:0upa"
                >
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                    data-oid="sry_in."
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                      data-oid="jxhamo_"
                    >
                      <path
                        d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z"
                        data-oid="pw00yyp"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
        data-oid="kkqjmm8"
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"
        data-oid="ix0v0ur"
      ></div>
    </section>
  );
};

export default Video;

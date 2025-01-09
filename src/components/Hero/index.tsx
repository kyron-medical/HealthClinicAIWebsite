import { Analytics } from "@vercel/analytics/react";
import RequestDemoButton from "../Common/RequestDemoButton";

const Hero = () => {
  return (
    <>
      <Analytics />
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-[-2] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/cofounders-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Overlay for text readability */}
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1
                  id=""
                  className="mb-5 rounded text-3xl font-bold leading-tight text-white text-shadow-outline-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                  Spend more time with your patients. We&#39;ll handle
                  everything else.
                </h1>
                <p className="mb-12 rounded text-base !leading-relaxed text-white text-shadow-outline-black sm:text-lg md:text-xl">
                  Kyron is an online tool you can use to automate medical
                  billing, patient appointment scheduling, insurance
                  verification, managing patient follow-ups, and more.
                </p>
                <div className="flex justify-center">
                  <RequestDemoButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Demo Section with Only GUI Video */}
      {/*
      <section
        id="demo-section"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-16 dark:bg-gray-dark md:pb-[120px] md:pt-[120px]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">Behind the Scenes</h2>
          <div className="flex justify-center items-center">
            {/* GUI Demo Video 
            <video
              autoPlay
              loop
              controls
              className="max-w-full w-[800px] h-[450px] rounded-lg shadow-lg object-cover"
              poster="/images/video-poster.png" /* Placeholder image before the video loads 
            >
              <source src="/videos/gui-demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default Hero;

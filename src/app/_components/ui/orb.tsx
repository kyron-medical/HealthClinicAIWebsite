import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useInView } from "react-intersection-observer";

const Orb = ({ color }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const orbSrc = {
    pink: "https://lottie.host/543493c1-96a0-40bc-b052-40869ea7932b/xgY0fP4RXr.lottie",
    green:
      "https://lottie.host/95858cc5-ddaf-45ff-98b5-984c3e28c89e/4lJRkL0W1n.lottie",
    pearl:
      "https://lottie.host/0c03f5fd-e348-4cd6-9f20-6bf57fc7dd80/b89501powc.lottie",
    orange:
      "https://lottie.host/b639843a-b338-400e-bbb3-022293593ec3/g7mJDTauqH.lottie",
    gold: "https://lottie.host/5c5c0afe-f428-400b-85db-15c05820be89/smH8qBJsPE.lottie",
    copper:
      "https://lottie.host/48de4269-4881-4fc5-aaed-84a0994a93d9/mdr1YRsV9K.lottie",

    // Add more colors as needed
  };

  return (
    <div
      ref={ref}
      style={{ display: "flex", justifyContent: "center" }}
      data-oid="td8.h5k"
    >
      {
        inView ? (
          <div
            style={{
              width: "300px", // Adjust to desired size
              height: "300px",
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            data-oid="8n3fucd"
          >
            <DotLottieReact
              src={orbSrc[color]}
              loop
              autoplay
              speed={2}
              style={{ width: "100%", height: "100%" }}
              data-oid="n64mi3n"
            />
          </div>
        ) : (
          <div data-oid="0vrp0z2">Loading...</div>
        )

        // Placeholder while the animation is not in view
      }
    </div>
  );
};

export default Orb;

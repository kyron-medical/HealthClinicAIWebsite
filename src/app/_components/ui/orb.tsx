import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useInView } from "react-intersection-observer";

// Define color types based on available orb colors
type OrbColor = "pink" | "green" | "pearl" | "orange" | "gold" | "copper";

// Define props interface with proper typing
interface OrbProps {
  color: OrbColor;
  width?: number;
  height?: number;
}

const Orb = ({ color, width, height }: OrbProps) => {
  const orbSrc: Record<OrbColor, string> = {
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
      style={{ display: "flex", justifyContent: "center" }}
      data-oid="9nhr326"
    >
      <div
        style={{
          width: width ?? "300px", // Adjust to desired size
          height: height ?? "300px",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        data-oid="boat5xd"
      >
        <DotLottieReact
          src={orbSrc[color]}
          loop
          autoplay
          speed={2}
          style={{ width: "100%", height: "100%" }}
          data-oid="ekh06j4"
        />
      </div>
    </div>
  );
};

export default Orb;

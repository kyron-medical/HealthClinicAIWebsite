import Typewriter from "typewriter-effect";

const Typing = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "denial management.",
          "finding lost revenue.",
          "appeals.",
          "calling insurance.",
          "everything else.",
        ],

        autoStart: true,
        loop: true,
        delay: 20,
        deleteSpeed: 10,
      }}
    />
  );
};

export default Typing;

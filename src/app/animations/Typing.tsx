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
      data-oid="kkedjyr"
    />
  );
};

export default Typing;

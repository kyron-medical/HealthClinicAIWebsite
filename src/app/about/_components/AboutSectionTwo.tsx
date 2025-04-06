"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Jay Gopal", title: "CEO", image: "/images/team/jay-gopal.jpg" },
  {
    name: "Henry Harary",
    title: "Director of Sales",
    image: "/images/team/henry-harary.jpg",
  },
  {
    name: "Alejandro Jackson",
    title: "Technical Consultant",
    image: "/images/team/alejandro-jackson.jpg",
  },
  {
    name: "Jeffrey Mu",
    title: "Product Developer",
    image: "/images/team/jeffrey-mu.jpg",
  },
  {
    name: "Daniel Choi",
    title: "Product Developer",
    image: "/images/team/daniel-choi.jpg",
  },
  {
    name: "Maguire Anuszewski",
    title: "Medical Consultant",
    image: "/images/team/maguire-anuszewski.jpg",
  },
  {
    name: "Juliana Escuti",
    title: "Marketing",
    image: "/images/team/juliana-escuti.jpg",
  },
  {
    name: "Lita Crichton",
    title: "Sales",
    image: "/images/team/lita-crichton.jpg",
  },
  {
    name: "Anika Sinha",
    title: "Sales & HIPAA Compliance",
    image: "/images/team/anika-sinha.jpg",
  },
  {
    name: "Tobias Lederberg",
    title: "General Counsel",
    image: "/images/team/tobias-lederberg.jpg",
  },
  {
    name: "Siddhant Karmali",
    title: "Sales & Marketing",
    image: "/images/team/siddhant-karmali.jpg",
  },
  {
    name: "Thanmay Kumar",
    title: "Sales & Marketing",
    image: "/images/team/thanmay-kumar.jpg",
  }
];

const AboutSectionTwo = () => {
  return (
    <section className=" py-8 md:py-20 lg:py-28">
      {" "}
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-body-color">
            We are a group of passionate individuals dedicated to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="relative mx-auto mb-4 aspect-square h-32 w-32"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-base text-body-color">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

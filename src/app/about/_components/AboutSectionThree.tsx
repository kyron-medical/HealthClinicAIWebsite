"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const advisors = [
  {
    name: "Ainsley MacLean, MD",
    title:
      "Founding Partner, Ainsley Advisory Group. Former Chief AI Officer, Kaiser Permanente. Brown Class of 2001, MD 2005",
    image: "/images/advisors/ainsley-maclean.jpg",
  },
  {
    name: "Andy Beck, MD, PhD",
    title: "Co-Founder & CEO, PathAI. \n" + "Brown Class of 2002, MD 2006",
    image: "/images/advisors/andy-beck.jpg",
  },
  {
    name: "Jacob Joseph, MD",
    title:
      "Cardiologist, Translational Data Science Expert, \n" +
      "Professor of Medicine, The Warren Alpert Medical School",
    image: "/images/advisors/jacob-joseph.jpg",
  },
  {
    name: "Abigail Kohler",
    title:
      "Co-Founder & CEO, ResusciTech. \n " +
      "Adjunct Lecturer, Brown University",
    image: "/images/advisors/abby-kohler.jpg",
  },
  {
    name: "Corey Keller, MD, PhD",
    title:
      "Principal Investigator, Stanford Precision Neurotherapeutics Lab. \n" +
      "Assistant Professor, Stanford University School of Medicine",
    image: "/images/advisors/corey-keller.jpg",
  },
  {
    name: "Chad Billmyer",
    title:
      "Founded Panjo (acquired by Tapatalk), Founded Foresite Solutions (acquired by Nelnet). Brown Class of 2001",
    image: "/images/advisors/chad-billmyer.jpg",
  },

  {
    name: "Yuhao Huang, MD",
    title:
      "Post-Doctoral Researcher, Stanford School of Medicine. \n" +
      "Multiple Papers in Nature Journals",
    image: "/images/advisors/yuhao-huang.jpg",
  },
  {
    name: "Robbie Felton",
    title:
      "Co-Founder & CEO, IntusCare. Forbes 30 Under 30. Brown Class of 2021 \n",
    image: "/images/advisors/robbie-felton.jpg",
  },
  {
    name: "David Ronick",
    title:
      "Co-Founded Minded, Stash, WinWin \n" +
      "Mentor at TechStars, Harvard Business School, Brown University",
    image: "/images/advisors/david-ronick.jpg",
  },
  {
    name: "Charlie Maddock",
    title: "Co-Founder & CEO, INO ARMOR \n" + "Brown Class of 2004",
    image: "/images/advisors/charlie-maddock.jpg",
  },
  {
    name: "Julie Pilitsis, MD, PhD, MBA",
    title:
      "Chair of Neurosurgery, University of Arizona College of Medicine \n" +
      "Physician Executive",
    image: "/images/advisors/julie-pilitsis.jpg",
  },
  {
    name: "Nicholas Grumbach, MD",
    title: "Assistant Professor of Medicine and Pediatrics, Brown University",
    image: "/images/advisors/nicholas-grumbach.jpg",
  },
];

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" data-oid="qi-ktuk">
      <div className="container" data-oid="wx6v-wc">
        <div className="mb-12 text-center" data-oid="5j:9fnt">
          <h2 className="text-2xl font-bold" data-oid="n_sl4u:">
            Meet Our Advisors
          </h2>
          <p className="text-lg text-body-color" data-oid="cwtv6gf">
            A group of compassionate individuals dedicated to mentorship.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="r4r.c51"
        >
          {advisors.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-oid="07pt:16"
            >
              <div
                className="relative mx-auto mb-4 aspect-square h-32 w-32"
                data-oid="ie5_c_k"
              >
                <motion.div
                  className="relative mx-auto mb-4 aspect-square h-32 w-32"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  data-oid="t71-fg_"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    data-oid="mi6o6-0"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold" data-oid="a02-_d.">
                {member.name}
              </h3>
              <p
                className="flex w-8/12 self-center text-base text-body-color"
                data-oid="1y0:0uj"
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;

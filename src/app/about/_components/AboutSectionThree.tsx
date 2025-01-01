import Image from "next/image";

const advisors = [
  {
    name: "Ainsley MacLean, MD",
    title: "Brown Class of 2001, MD 2005 Healthcare Technology Executive",
    image: "/images/advisors/ainsley-maclean.jpg",
  },
  {
    name: "Jacob Joseph, MD",
    title:
      "Chief of Cardiology, VA Providence Healthcare System. \n" +
      "Professor of Medicine, The Warren Alpert Medical School",
    image: "/images/advisors/jacob-joseph.jpg",
  },
  {
    name: "Abigail Kohler",
    title: "Co-Founder & CEO, ResusciTech \n " + 
    "Adjunct Lecturer, Brown University",
    image: "/images/advisors/abby-kohler.jpg",
  },
  {
    name: "Corey Keller, MD, PhD",
    title: "Principal Investigator, Stanford Precision Neurotherapeutics Lab. \n" +
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
    name: "Neil J. Wimmer, MD",
    title: "Cardiologist, ChristianaCare Health System. \n" + 
    "Brown Class of 2001",
    image: "/images/advisors/neil-wimmer.jpg",
  },
  {
    name: "Robbie Felton",
    title: "Co-Founder & CEO, IntusCare. Forbes 30 Under 30. Brown Class of 2021 \n",
    image: "/images/advisors/robbie-felton.jpg",
  },
  {
    name: "David Ronick",
    title:
      "Co-Founded Minded, Stash, WinWin \n" + 
      "Mentor at TechStars, Harvard Business School, Brown University",
    image: "/images/advisors/david-ronick.jpg",
  },
];

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold">Meet Our Advisors</h2>
          <p className="text-lg text-body-color">
            A group of compassionate individuals dedicated to mentorship.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((member, index) => (
            <div key={index} className="flex flex-col text-center items-center">
              <div className="relative mx-auto mb-4 aspect-square h-32 w-32">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-base text-body-color w-8/12 flex self-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;

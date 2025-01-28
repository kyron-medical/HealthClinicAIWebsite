import Image from "next/image";

const teamMembers = [
  { name: "Jay Gopal", title: "CEO", image: "/images/team/jay-gopal.jpg" },
  {
    name: "Lucas Lieberman",
    title: "COO",
    image: "/images/team/lucas-lieberman.jpg",
  },
  {
    name: "Jo Jojo",
    title: "Technical Consultant",
    image: "/images/team/jo-jojo.jpg",
  },
  {
    name: "Lisa Duan",
    title: "Technical Consultant",
    image: "/images/team/lisa-duan.jpg",
  },
  {
    name: "Yen Chu",
    title: "Technical Consultant",
    image: "/images/team/yen-chu.jpg",
  },
  {
    name: "Maguire Anuszewski",
    title: "Medical Consultant",
    image: "/images/team/maguire-anuszewski.jpg",
  },
  {
    name: "Henry Harary",
    title: "Sales",
    image: "/images/team/henry-harary.jpg",
  },
  {
    name: "Samuel Latzman",
    title: "Sales",
    image: "/images/team/sam-latzman.jpg",
  },
  {
    name: "Alejandro Jackson",
    title: "Technical Consultant",
    image: "/images/team/alejandro-jackson.jpg",
  },
  {
    name: "Jeffrey Mu",
    title: "Developer",
    image: "/images/team/jeffrey-mu.jpg",
  },
  {
    name: "Raymond Hu",
    title: "Intern",
    image: "/images/team/raymond-hu.jpg",
  }
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
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
              <div className="relative mx-auto mb-4 aspect-square h-32 w-32">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
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

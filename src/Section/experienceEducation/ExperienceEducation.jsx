import { FaBook } from "react-icons/fa6";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { MdDeveloperMode } from "react-icons/md";
const ExperienceEducation = () => {
  return (
    <section id="backend" className="bg-[#060606] text-white">
      <Title first={"My"} last={"Backend"}></Title>
      <Container>
        <h1 className="text-center pb-14 text-2xl font-semibold">
          My Educational Background
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li>
            <div className="timeline-middle">
              <FaBook className="text-[#C9F31D] text-2xl m-3 mt-0"></FaBook>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px] "
            >
              <time className="font-mono italic text-[#B1B1A2]">2017</time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                Bachelor degree
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                Wonkwang University
              </div>
              <p className="text-[#B1B1A2]">
                I completed my Bachelor's degree in English Language and
                Literature from Wonkwang University in South Korea
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaBook className="text-[#C9F31D] text-2xl m-3"></FaBook>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="timeline-end mb-10 space-y-2.5 max-w-[450px]"
            >
              <time className="font-mono italic text-[#B1B1A2]">2012</time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                Diplome
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                Cyprus College
              </div>
              <p className="text-[#B1B1A2]">
                I completed my Higher Diploma in Hotel Management in 2012 from
                Cyprus College in Cyprus.
              </p>
            </div>
            <hr />
          </li>
        </ul>
        <h1 className="text-center p-14 text-2xl font-semibold">
          My Experience
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:pb-16 md:pb-12 pb-6">
          <li>
            <div className="timeline-middle">
              <MdDeveloperMode className="text-[#C9F31D] text-3xl m-3 mt-0"></MdDeveloperMode>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px]"
            >
              <time className="font-mono italic text-[#B1B1A2]">
                2021-Present
              </time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                Web Development
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                2 years + self learning Experience
              </div>
              <p className="text-[#B1B1A2]">
                I completed my full Stack Web Development Course from
                Programming Hero.
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ExperienceEducation;

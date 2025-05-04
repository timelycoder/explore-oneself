import { useState } from "react";
import project1 from "../../assets/projects1.jpg";
// import project2 from "../../assets/lobrary-project.png";
import project2 from "../../assets/projects2.jpg";

import Title from "../../components/Title";
import Container from "../../components/Container";
import { FaEye, FaGithub } from "react-icons/fa6";
const MyProjects = () => {
  const [isHovered, setHovered] = useState(false);
  const boxStyle = {
    background: "#000",
    backgroundPosition: isHovered ? "bottom" : "top",
    transition: "ease-in-out 5s",
    margin: "auto",
  };
  const box1style = {
    background: `url(${project1})`,
    backgroundSize: "cover",
  };
  const box2style = {
    background: `url(${project2})`,
    backgroundSize: "cover",
  };

  return (
    <section id="projects" className="bg-[#111111] ">
      <Title first={"My"} last={"Projects"}></Title>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto lg:py-20 md:py-14 py-6">
          <div data-aos-duration="700" data-aos="zoom-in">
            <div
              style={{
                ...boxStyle,
                ...box1style,
                hover: { backgroundPosition: "top" },
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]"
            ></div>
            <div className="flex justify-around md:px-12 my-12">
              <a target="_blank" href="https://faysel-stationary.vercel.app/">
                <button className="btn bg-[#C9F31D] border-0">
                  <FaEye></FaEye>Live Link
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/syedfaysel/express-assignment-4/tree/main/client"
              >
                <button className="btn  bg-[#070707] border-1 text-white border-[#C9F31D]">
                  <FaGithub></FaGithub>Client Code
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/syedfaysel/express-assignment-4/tree/main/server"
              >
                <button className="btn hidden md:flex bg-[#C9F31D] border-0">
                  <FaGithub></FaGithub>Server Code
                </button>
              </a>
            </div>
          </div>
          <div data-aos-duration="700" data-aos="zoom-in">
            <div
              style={{ ...boxStyle, ...box2style }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]"
            ></div>
            <div className="flex justify-around md:px-12 my-12">
              <a target="_blank" href="https://adol-bodon-frontend.vercel.app/">
                <button className="btn bg-[#C9F31D] border-0">
                  <FaEye></FaEye>Live Link
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Mahmudul107/adolBodol-frontend"
              >
                <button className="btn bg-[#070707] border-1 text-white border-[#C9F31D]">
                  <FaGithub></FaGithub>Client Code
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Mahmudul107/adolBodol-backend"
              >
                <button className="btn hidden md:flex  bg-[#C9F31D] border-0">
                  <FaGithub></FaGithub>Server Code
                </button>
              </a>
            </div>
          </div>
          {/* <div data-aos-duration="700" data-aos="zoom-in">
            <div
              style={{ ...boxStyle, ...box3style }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]"
            ></div>
            <div className="flex justify-around md:px-12 my-12">
              <a target="_blank" href=" https://faysel-stationary.vercel.app/">
                <button className="btn bg-[#C9F31D] border-0">
                  <FaEye></FaEye>Live Link
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/syedfaysel/express-assignment-4/tree/main/client"
              >
                <button className="btn  bg-[#070707] border-1 text-white border-[#C9F31D]">
                  <FaGithub></FaGithub>Client Code
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/syedfaysel/express-assignment-4/tree/main/server"
              >
                <button className="btn hidden md:flex  bg-[#C9F31D] border-0">
                  <FaGithub></FaGithub>Server Code
                </button>
              </a>
            </div>
          </div> */}
          {/* <div data-aos-duration="700" data-aos="zoom-in">
            <div
              style={{ ...boxStyle, ...box4style }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]"
            ></div>
            <div className="flex justify-around md:px-12 my-12">
              <a target="_blank" href="https://event-agency-project.web.app/">
                <button className="btn bg-[#C9F31D] border-0">
                  <FaEye></FaEye>Live Link
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/nasif07/event-agency-project?tab=readme-ov-file"
              >
                <button className="btn  bg-[#070707] border-1 text-white border-[#C9F31D]">
                  <FaGithub></FaGithub>Client Code
                </button>
              </a>
              <a target="_blank" href="">
                <button className="btn hidden md:flex bg-[#C9F31D] border-0">
                  <FaGithub></FaGithub>Server Code
                </button>
              </a>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default MyProjects;

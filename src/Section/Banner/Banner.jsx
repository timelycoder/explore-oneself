import bg from "../../assets/banner.jpg";
import resume from "../../assets/Sumsuzzaman_CV.pdf";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";
import { IconButton } from "@material-tailwind/react";
import PrimaryButton from "../../components/PrimaryButton";
import ReactTyped from "react-typed";
const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <>
      <section
        id="home"
        className="md:h-[100vh] bg-cover h-[70vh] font-Space_Grotesk"
        style={myStyle}
      >
        <div
          className="md:h-[100vh] h-[100vh]"
          style={{ backgroundColor: "rgba(0,0,0,0.80)" }}
        >
          <div className=" text-white max-w-[1600px] mx-auto px-4 md:px-10 flex items-center h-full ">
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              className="md:space-y-5 space-y-1.5"
            >
              <h4 className="md:text-4xl text-xl font-bold">Hello I'm</h4>
              <h1 className="text-3xl md:text-7xl font-bold text-[#C9F31D]">
                Md Sumsuzzaman Sumon
              </h1>
              <div className=" text-2xl md:text-6xl font-bold text-white pb-4">
                <ReactTyped
                  loop
                  typeSpeed={80}
                  backSpeed={90}
                  strings={[
                    "Front-End Developer",
                    "React Developer",
                    "Node and Express learner",
                  ]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </div>
              <p className="md:text-xl">
                Experienced React Developer: Crafting Innovative and Scalable{" "}
                <br /> Web Solutions with MongoDB, Express.js, React, and
                Node.js
              </p>
              <div className="py-5">
                <a target="new" href={resume} download>
                  <PrimaryButton>Download Resume</PrimaryButton>
                </a>
              </div>
              <div className="flex gap-4">
                <a href="mailto:sms.sumon@gmail.com">
                  <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-google text-lg" />
                    <FaGoogle className="text-lg"></FaGoogle>
                  </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/md-sumon-freelancer/">
                  <IconButton className="rounded bg-[#1469C7] hover:shadow-[#1469C7]/20 focus:shadow-[#1469C7]/20 active:shadow-[#1469C7]/10">
                    <i className="fab fa-google text-lg" />
                    <FaLinkedin className="text-lg"></FaLinkedin>
                  </IconButton>
                </a>

                <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <a href="https://github.com/timelycoder">
                    <FaGithub className="text-lg"></FaGithub>
                  </a>
                </IconButton>
                <a href="https://www.facebook.com/moham.mada.samasujjamana.sumana">
                  <IconButton className="rounded bg-[#106AFF] hover:shadow-[#1469C7]/20 focus:shadow-[#1469C7]/20 active:shadow-[#1469C7]/10">
                    <i className="fab fa-google text-lg" />
                    <FaFacebook className="text-lg"></FaFacebook>
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

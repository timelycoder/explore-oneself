import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Info */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-[#C9F31D]">
            Md Sumsuzzaman Sumon
          </h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved by Sumon's
            Portfolio
          </p>
        </div>

        {/* Right side - Social icons */}
        <div className="flex gap-4">
          <a href="mailto:sms.sumon@gmail.com" aria-label="Email">
            <FaGoogle className="text-2xl hover:text-[#EA4335] transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sumon-freelancer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-[#0A66C2] transition duration-300" />
          </a>
          <a
            href="https://github.com/timelycoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-gray-300 transition duration-300" />
          </a>
          <a
            href="https://www.facebook.com/moham.mada.samasujjamana.sumana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl hover:text-[#1877F2] transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  // FaTwitter,
  FaPython,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Bala Ramesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a skilled Full Stack Developer proficient in Python with Flask, React
          with Redux, MySQL, JavaScript, Firebase, HTML, CSS, and Bootstrap, Figma,ANSOFT HFSS I
          am capable of independently designing, developing, and deploying
          complex projects. My passion for tech-driven problem-solving drives me
          to create innovative solutions that enhance functionality and user
          experience. With a strong foundation in both front-end and back-end
          development, I am well-equipped to contribute to dynamic and evolving
          tech environments.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/BalaRamesh2411" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/lovelycrazydevil" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            {/* <a href="https://www.instagram.com/lovely_crazy_devil/" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
            <a href="https://www.instagram.com/lovely_crazy_devil/" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/bala-ramesh-c-41a8971b2/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

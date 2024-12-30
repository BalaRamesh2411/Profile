import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">C.BALA RAMESH</h3>
        <p className="text-lg font-normal text-gray-400">
          FULL Stack Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          My name is Bala Ramesh.C, and I hold a Bachelor's degree in
          Electronics and Communication Engineering from DMI Engineering
          College. I have completed a 6-month Full Stack Web Development course,
          gaining expertise in Python with Flask, React with Redux, MySQL,
          JavaScript, Firebase, HTML, CSS, Bootstrap, and Figma. Passionate
          about tech-driven problem-solving and innovation, I am capable of
          independently implementing projects. My resume provides further
          details about my skills, projects, and experiences.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9994826554</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">balaramesh2411@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/lovelycrazydevil" target="blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://github.com/BalaRamesh2411" target="blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/bala-ramesh-c-41a8971b2/"
            target="blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

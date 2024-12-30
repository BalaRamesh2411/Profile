import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe,} from "react-icons/fa";
import { SiPython ,SiMysql,SiReact} from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Web development involves creating, designing, and maintaining websites and web applications. 
          It encompasses both front-end (user interface) development using technologies like HTML, CSS, and JavaScript, 
          and back-end (server-side) development using languages like Python, Node.js, and frameworks such as Flask, React, or Angular.."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Backend Development"
          des="Backend development focuses on server-side logic, databases, and APIs to handle data processing and communication for applications.."
          icon={<SiPython />}
        />
        <Card
          title="App Development"
          des="App development involves creating software applications for various platforms like mobile, web, or desktop,
           designed to perform specific tasks or provide services.."
          icon={<FaMobile />}
        />
        <Card
          title="Frontend Development"
          des="Frontend development involves building the user interface and user experience of applications using technologies like HTML, CSS, and JavaScript to ensure interactive and visually appealing designs.."
          icon={<SiReact />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        /> */}
        <Card
          title="DataBase management"
          des="A database is an organized collection of data that is stored, managed, and accessed electronically, typically used in applications to efficiently store and retrieve information.."
          icon={<SiMysql />}
        />
        <Card
          title="Hosting Websites"
          des="Hosting refers to the service of providing storage, computational power, and network resources to make websites, applications, or other digital content accessible on the internet.."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;

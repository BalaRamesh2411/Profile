import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Visit My Portfolio And Projects" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AI CONTENT-ENGINE WITH REACT AND PYTHON FLASK"
          des=" Developed an AI-driven platform to automate email content
              generation, enhancing efficiency for users by allowing storage of
              templates and direct email sending. This project demonstrated
              practical application of software and development skills in solving
              real-world productivity challenges. technologys:Languages: Python, JavaScript
              Frameworks: React with Redux, Flask
              Tools: SQLAlchemy, JSON Web Token (JWT), Firebase,
              Emailjs
              Database: Mysql
              Others: Github"
          src={projectOne}
        />
        <ProjectsCard
          title="A wearable flexible graphene patch antenna design for wireless human motion monitoring. (ANTENNA DESIGN)"
          des=" A novel Laser-Induced Graphene (LIG) printed microstrip patch
            antenna operating at the 5.8-GHz unlicensed band is presented. The
            proposed design, based on simulations, exhibits unidirectional
            radiation characteristics with a measured gain of 1.86 dBi at the
            resonant frequency. This innovative approach leverages the unique
            properties of LIG to create a flexible, efficient, and sensitive antenna
            suitable for real-time human motion monitoring.
              ."
          src={projectTwo}
        />
        <ProjectsCard
          title="Sustainable Diabetic Retinopathy Diagnosis System Using IOT"
          des=" The system utilizes sustainable computing to provide remote access
                for quick implementation, measuring glucose levels through Dexcom
                G4 Platinum sensors on diabetic patients. IoT platforms offer a
                sustainable solution for Diabetic Retinopathy, aiming to prevent vision
                loss. The platform securely collects and analyzes vast data from IoT
                devices, predicting valuable clinical insights. The proposed technique
                achieves 99.58% accuracy, 72.51% sensitivity, and 99.83% specificity,
                outperforming other methods in experimental settings.
                "
          src={projectTwo}
        />
        <ProjectsCard
          title="RESUME BUILDER WITH JAVASCRIPT AND FIREBASE"
          des=" Developed a web-based resume builder application that
            enables users to enter their details and select from various templates
            to create customized resumes. This tool simplifies the resume
            creation process, allowing users to generate professional-looking
            resumes effortlessly. JavaScript for frontend interactivity, Bootstrap for
            responsive design implementation and Firebase for real-time database
            management."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" 
              A Chatting App is a communication platform that enables real-time text, voice, or video messaging between users. 
              It features user authentication, message encryption, and chatroom creation, ensuring secure and seamless interaction.
              Common functionalities include file sharing, group chats, notifications, and customizable user profiles."
          src={projectTwo}
        />
        <ProjectsCard
          title="BMI_APP"
          des="A BMI Calculator App is a simple tool that helps users calculate their Body Mass Index (BMI) based on their height and weight. It provides quick insights into their health category, such as underweight, normal weight, overweight, or obese.
           The app ensures a user-friendly interface with accurate results and personalized recommendations."
          src={projectThree}
        />
        <ProjectsCard
          title="Access-management"
          des=" Access Management refers to the process of controlling and monitoring access to systems, applications, data, and resources within an organization. 
          It ensures that only authorized individuals or systems can access specific resources based on their roles and permissions. 
          Key components include authentication, authorization, and auditing to enhance security and compliance."
          src={projectOne}
        />
        <ProjectsCard
          title="Digital-Clock"
          des=" A Digital Clock is a real-time timekeeping application that displays the current time in a digital format (HH:MM:SS). It updates dynamically and can include features like 12-hour/24-hour format toggling, date display, and customizable themes. 
          Digital clocks are commonly used in web, mobile, or desktop applications for convenience and accessibility."
          src={projectTwo}
        />
        <ProjectsCard
          title="EmiCalculator"
          des=" An EMI Calculator is a financial tool that helps users calculate the Equated Monthly Installments (EMI) for loans. By inputting the loan amount, interest rate, and tenure, users can instantly determine their monthly repayment amount. The app provides a clear breakdown of principal and interest, aiding in better financial planning and decision-making."
          src={projectTwo}
        />
        <ProjectsCard
          title="currency-converter"
          des=" A Currency Converter is an application that allows users to convert one currency to another based on current exchange rates. It provides real-time updates and supports multiple currencies, enabling users to make accurate financial decisions for travel, business, or trading. The app often includes features like historical data, favorite currency pairs, and offline mode for convenience."
          src={projectTwo}
        />
        <ProjectsCard
          title="WeatherApp"
          des=" A Weather App is an application that provides users with real-time weather updates for their selected locations. It displays information such as temperature, humidity, wind speed, and weather conditions (e.g., sunny, rainy). Advanced features may include forecasts, radar maps, and alerts for severe weather, offering convenience and preparedness for users."
          src={projectTwo}
        />

        <ProjectsCard
          title="CURD App"
          des=" A Curd App is a mobile or web application designed to help users manage their curd (yogurt) production process, track fermentation times, temperature settings, and ensure optimal conditions for making curd. It may provide features like reminders, recipe suggestions, and tips to improve the quality and consistency of homemade curd."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;

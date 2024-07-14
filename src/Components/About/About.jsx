import React from "react";
import Introduction from "./Introduction/Intro";
import Education from "./Education/Education";
import Achievements from "./Achivements/Achivements";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <Introduction />
        <br />
        <br />
        <Education />
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in C,Cpp etc. Experienced with Tools such as VS Code,Git
          and Github. Strong grasp of Mern Stack.Good knowledge of Data
          Structures and Algorithms.Excellent problem-solving skills Effective
          communicator and collaborator
        </span>
        <br />
        <br />
        <Achievements />
        <br />
        <br />
      </div>
      <hr />
    </div>
  );
}

export default About;

import React from "react";
import pic from "/pankaj.avif";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
function Home() {
  const iconClasses =
    "text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer";
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-19 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] "
              alt=""
            />
          </div>
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-base text-justify">
              Hello, I am Pankaj Kumar. I am a competitive programmer with over
              two years of experience, during which I have honed my
              problem-solving skills and achieved significant proficiency in the
              field. My journey in competitive programming has provided a solid
              foundation in logical thinking and algorithmic techniques.
            </p>
            <p className="text-sm md:text-base leading-relaxed  ">
              I have transitioned into web development, where I am passionate
              about learning new technologies and contributing to the developer
              community. Currently, I am focused on MERN stack development, and
              I am enthusiastic about building innovative and efficient web
              applications.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Connect me</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <TiSocialTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pankaj-kumar-85305123a/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCbP_MjApc_50fJFLeut7K_g"
                      target="_blank"
                    >
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Snyder21" target="_blank">
                      <IoLogoGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className={iconClasses} />
                  <SiExpress className={iconClasses} />
                  <FaReact className={iconClasses} />
                  <FaNodeJs className={iconClasses} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;

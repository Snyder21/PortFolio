import React from "react";
import html from "/html.png";
import css from "/css.jpg";
import cpp from "/cpp.png";
import javascript from "/javascript.png";
import react from "/reactjs.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: cpp,
      name: "Cpp",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },

    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: react,
      name: "React",
    },
  ];
  return (
    <div>
      <div
        name="Experience"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Experiance </h1>
          <p className="  ">
            I've more than a years of experiance in below technologies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img src={logo} className="w-[150px] rounded-full" alt="" />
                <div>
                  <div className="">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Experience;

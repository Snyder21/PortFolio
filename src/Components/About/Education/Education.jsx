import React from "react";

function Education() {
  return (
    <div>
      <h1 className="text-blue-600 font-semibold text-xl">
        Education & Training
      </h1>

      <div className="mb-4">
        <h7 className="text-lg font-semibold">College Education</h7>
        <p className="mb-1">
          <span className="font-semibold">
            Bachelor of Technology in Computer Science and Engineering
          </span>
          <br />
          IET Lucknow,UP India
          <br />
          2021-2025
        </p>
        <p>
          <span className="font-semibold">Key Courses:</span> Data Structures,
          Algorithms, Web Development, Database Management,Oops etc.
        </p>
      </div>

      <div>
        <h7 className="text-lg font-semibold">School Education</h7>
        <p className="mb-1">
          <span className="font-semibold">High School & Intermediate</span>
          <br />
          SBMIC Inter College Khaga,Fatehpur Up India
          <br />
          2017-2019
        </p>
      </div>
    </div>
  );
}
export default Education;

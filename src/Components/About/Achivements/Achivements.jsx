import React from "react";
import { FaStar } from "react-icons/fa";

function Achievements() {
  return (
    <div>
      <h2 className="text-blue-600 font-semibold text-xl">
        Achievements & Awards
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Specialist @ Codeforces [1469 rating] and 4{" "}
          <FaStar size={12} className="inline" /> @ Codechef [1813 rating]
        </li>
        <li>Knight @ LeetCode (1900+ rating)</li>
        <li>
          Ranked 754th among 30,000+ participants in Codeforces Round 933 Div3
        </li>
        <li>
          Ranked 1235th among 30,000+ participants in Codeforces Round 928 Div 4
        </li>
        <li>Ranked 53rd among 5,000+ participants in Codechef Nov Long 22</li>
        <li>Ranked 2684th in Round H of Google Kickstart 2022</li>
        <li>
          Solved 2000+ questions based on Data Structures and Algorithms on
          various coding platforms
        </li>
        <li>Secured 98 percentile in JEE-Mains 21</li>
      </ul>
    </div>
  );
}

export default Achievements;

import React from "react";
import { MdVerified } from "react-icons/md";

const Skill = () => {
  return (
    <section id="skill" className="flex w-screen  items-center m-auto justify-center flex-col gap-14 py-40">
      {/* title */}
      <div className="flex justify-center items-center gap-1 flex-col">
        <h1 className="font-bold text-xl">My Skills</h1>
        <span className="text-xs">My Technical skills Level</span>
      </div>
      {/* main containt */}

      <div className="flex flex-row portrait:flex-col justify-evenly portrait:w-[75vw] gap-5 sm:gap-14">
        <section className="flex items-center gap-2 flex-col w-[300px] h-[220px] border border-black rounded-lg bg-gray-100">
          <h1 className="font-bold text-lg mt-3">Frontend Skills</h1>
          <div className="flex justify-between text-sm gap-11">

            <div className="flex items-start justify-evenly gap-5 flex-col">

              <div className="flex flex-col items-center">
                <div className=" flex flex-row  items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">HTML</h1>
                </div>
                <span className="text-xs font-thin">Advance</span>
              </div>

              <div className="flex flex-col items-start">
                <div className=" flex flex-row  items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">CSS</h1>
                </div>
                <span className="text-xs font-thin">Intermediate</span>
              </div>

              <div className="flex flex-col items-start">
                <div className=" flex flex-row  items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">JavaScript</h1>
                </div>
                <span className="text-xs font-thin">Intermediate</span>
              </div>
            </div>

            <div className="flex items-start justify-evenly gap-5 flex-col">
              <div className="flex flex-col items-center">
                <div className=" flex flex-row items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">Tailwind CSS</h1>
                </div>
                <span className="text-xs font-thin">Intermediate</span>
              </div>

              <div className="flex flex-col items-center">
                <div className=" flex flex-row items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">ReactJs</h1>
                </div>
                <span className="text-xs font-thin">Intermediate</span>
              </div>

              <div className="flex flex-col items-center">
                <div className=" flex flex-row items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">NextJs</h1>
                </div>
                <span className="text-xs font-thin">Advance</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center gap-2 flex-col w-[300px] h-[220px] border border-black rounded-lg bg-gray-100">
          <h1 className="font-bold text-lg mt-3">Backend Skills</h1>
          <div className="flex justify-between text-sm gap-11">
            <div className="flex items-start justify-evenly gap-5 flex-col">
              <div className="flex flex-col  items-center justify-center">
                <div className=" flex flex-row  items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">NodeJs</h1>
                </div>
                <span className="text-xs font-thin ml-[50%]">Intermediate</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className=" flex flex-row items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">ExpressJS</h1>
                </div>
                <span className="text-xs font-thin">Intermediate</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className=" flex flex-row  items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">MongoDB</h1>
                </div>
                <span className="text-xs font-thin ml-[20%]">Intermediate</span>
              </div>

            </div>

            <div className="flex items-start justify-evenly gap-5 flex-col">
              
            <div className="flex flex-col items-center justify-center">
                <div className=" flex flex-row  items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">MySQL</h1>
                </div>
                <span className="text-xs font-thin ml-[50%]">Intermediate</span>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className=" flex flex-col items-center">
                  <div className="flex flex-row items-center gap-2">
                    <MdVerified />
                    <h1 className="font-bold">Firebase</h1>
                  </div>
                  <span className="text-xs font-thin">Basic</span>
                </div>
              </div>

              <div className="flex flex-col items-center  justify-center">
                <div className=" flex flex-row items-center gap-2">
                  <MdVerified />
                  <h1 className="font-bold">AWS</h1>
                </div>
                <span className="text-xs font-thin">Basic</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skill;

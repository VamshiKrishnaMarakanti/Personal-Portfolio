import React from "react";
import { experience } from "./data/data";

function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
     
           
                
        
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
          Experience
        </h2>
 <div className="relative pl-7"> 
                <div className=" absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7c3aed] to-transparent " />
                <div className="relative mb-8">
                    <div className="absolute -left-7 top-4 w-3 h-3 rounded-full border-2 border-[#7c3aed] " /> 
                 
        <div className="min-h-65 bg-secondary/10 mt-10 p-6 rounded-lg">
        
        <div className="border-2  bg-primary"></div>
          <div className="">
            {experience.map((exp, key) => {
              return (
                
                <div className="text-left min-h-65 mt-10 p-6 rounded-xl  border  border-l-[3px] border-l-primary/50  hover:border-l-primary transition-all duration-300 ">
                    
                    <div className="flex justify-between items-center text-primary ">
                  <h1 className="font-bold text-3xl">{exp.role}</h1>
                  <p className="bg-primary/17 rounded-4xl px-3 text-primary">{exp.date}</p>
                  </div>
                  <p className="text-xs">
                    {exp.company} <span>{exp.location}</span>
                  </p>
<span >
    {exp.isOnsite?<span className="mt-3 text-sm bg-primary/57 px-3 rounded-4xl">✈ Onsite – Client Deputation</span>:null}
    </span>

<div className="py-3">
                  <div>PROJECT</div>
                  <p>{exp.project}</p>
</div>
<ul className="list-inside list-disc pb-2">
                  {exp.bullets.map((bullet, key) => {
                    return <li  className="" key={key}>{bullet}</li>;
                  })}
                  </ul>
                  <p className="text-primary">
                    Tech{" "}
                    <span className="text-foreground ">
                      {exp.Tech.map((tech, key) => {
                        return (
                          <span className="mx-1 bg-primary/17 rounded-4xl px-2 text-primary" key={key}>
                            {" "}
                            {tech}
                          </span>
                        );
                      })}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
           </div> 
                </div>
      </div>

    </section>
  );
}

export default Experience;

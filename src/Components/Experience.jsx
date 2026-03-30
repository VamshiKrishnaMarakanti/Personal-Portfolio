import React from "react";
import { experience } from "./data/data";

function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
          Experience
        </h2>

        <div className="min-h-65 bg-secondary/10 mt-10 p-6 rounded-lg">
        <div className="">{experience.map((exp,key)=>{
            return(
                <div className="text-left min-h-65 bg-primary/20 mt-10 p-6 rounded-lg">
                <h1 className="text-primary font-bold">{exp.role}</h1>
                <p>{exp.date}</p>
                <p>{exp.company}{" "}<span>{exp.location}</span></p>

                <div>PROJECT</div>
                <p>{exp.project}</p>
                {exp.bullets.map((bullet,key)=> {
                    return(
                        <li key={key}>{bullet}</li>
                    )
                })}
            <p>Tech <span>{exp.Tech.map((tech,key)=>{
                return(
                    <span className="" key={key}>{" "}{tech}</span>
                )
            })}</span></p>
                </div>
            )
        })}</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

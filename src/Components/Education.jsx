import React, { useState } from 'react';
import { cn } from '../lib/utils';

function Education() {
  const category = [
    {
      name: "Bachelors",
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Avn Institute of Engineering and Technology ",
      year: "2016-2020",
      GPA: "6.7/10"
    },
    {
      name: "Intermediate",
      degree: "MPC",
      institution: "Narayana Junior College",
      Percent: "82%",
      year: "2014-2016"
    },
    {
      name: "SSC",
      degree: "SSC",
      institution: "St. Josephs High School",
      year: "2014",
      GPA: "8.7/10"
    }
  ];
  // Default to first card
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education" className="py-24 px-4 relative">
<div className='container mx-auto max-w-5xl'>

<h2 className='text-3xl md:text-4xl font-bold md-12 text-center'>Education</h2>
<div className='flex flex-wrap justify-center gap-14 mb-12 mt-10 max-w-5xl'>
  {category.map((cat, key) => (
    <button
      key={key}

      className={cn(
        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
        activeIndex === key
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/70 text-foreground hover:bg-secondary"
      )}
      onClick={() => {setActiveIndex(key); console.log(key);}}
    >
      {cat.name}
    </button>
  ))}



</div>
  <div className="relative min-h-65 flex flex-col items-center mt-8">
    {category.map((cat, idx) => {
      // Only the active card is fully visible, all others are fully transparent and not interactive
      let cardClass = "opacity-0 pointer-events-none z-0 scale-95";
      if (idx === activeIndex) cardClass = "opacity-100 z-20 scale-100 pointer-events-auto";
      return (
        <div
          key={cat.name}
          className={cn(
            "absolute w-full transition-all duration-500 rounded-lg shadow-lg bg-primary/10 grid grid-cols-12 p-6",
            cardClass,
            idx > activeIndex ? "translate-y-8" : idx < activeIndex ? "-translate-y-8" : ""
          )}
          style={{ top: 0, left: 0 }}
        >
          <div className="col-span-9 pt-4 pb-4">
            <h3 className="text-2xl font-semibold">{cat.degree}</h3>
            <p className="text-muted-foreground ">{cat.institution}</p>
          </div>
          <div className="col-span-3 text-right pt-4 pb-4 pr-4">
            <p className="text-muted-foreground">{cat.year}</p>
            <p className="text-muted-foreground">
              {cat.GPA ? `GPA: ${cat.GPA}` : cat.Percent ? `Percent: ${cat.Percent}` : null}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </section>
  )
}

export default Education

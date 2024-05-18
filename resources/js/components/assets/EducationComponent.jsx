import React from "react";

function EducationComponent() {
    return (
        <>
            <h1 className='mt-3 text-[40px] font-bold text-white'>
                Education:
            </h1>

            <div className="card w-full bg-white p-3">
                <p className="text-[30px]">
                    Bachelor of Technology in  
                    <span className="text-[20px]"> (Computer Science Engineering)</span>
                </p>

                <p className="text-[20px] font-bold italic">
                    Veer Bahadur Singh Purvanchal University Jaunpur (2014 - 2018)
                </p>
                 
                <p className="mt-3 text-[20px]">
                    I graduated from Veer Bahadur Singh Purvanchal University Jaunpur with a Bachelor of Technology in Computer Science, earning a Grade (A).

                    This academic background, combined with my hands-on experiences, has equipped me with a strong technical foundation and problem-solving abilities.
                </p>
            </div>
        </>
    )
}

export default EducationComponent;

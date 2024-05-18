import React from "react";

function AboutComponent() {
    return (
        <div className="card flex items-center justify-center bg-white p-3">
            <div className="p-3 text-center">
                <h1 className="flex justify-center break-words text-[50px] font-bold">
                    <span className="flex items-end text-[50px] italic max-lg:hidden">  Vikas</span>

                    <span className="flex items-end text-[25px] italic max-lg:hidden"> &nbsp; Vishwakarma</span>
                </h1>
                
                <p className="break-words text-[20px]">
                    A passionate Full Stack Developer from India who is always exploring the ever-evolving world of technology.
                </p>

                <div className="mt-10 grid justify-center">
                    <div className="flex gap-1">
                        <span className='text-[20px]'>Mob:</span>
                        
                        <a href="tel:+917069703646" 
                            className="flex items-end text-[20px] italic hover:text-[#006d8b] hover:underline">
                            +91 7068703646
                        </a>
                    </div>
                    

                    <div className="flex gap-1">
                        <span className='text-[20px]'>Mail-Id: </span>
                        
                        <a href="mailto:vishwakarmavikas750@gmail.com" className="flex items-end text-[20px] italic hover:text-[#006d8b] hover:underline">
                            vishwakarmavikas750@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;

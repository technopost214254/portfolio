import React from "react";
import ReactDOM from 'react-dom/client';

function InfotrenchShowcaseComponent() {
    return (
        <>
            <h1 className='mt-3 text-[40px] font-extrabold text-white'>
                Infotrench Technologies LLP, Noida:

                <span className="text-[14px]">&nbsp; TRAINEE SOFTWARE ENGINEER | 13/08/2018 to 02/06/2019 </span>
            </h1>

            <div className="mt-3 text-[15px] text-white">
                <p>
                    Started with core PHP and Codeigniter framework as a Trainee Software Developer.
                </p>
            </div>
            
            <div className="mt-3 grid grid-cols-4 gap-2 max-lg:grid-cols-1">
                <div className="card relative p-3">
                    <h3 className="text-[25px] font-bold">Impilo</h3>

                    <p className="mt-3 text-[15px]">
                            This project has been designed especially for booking appointment with Doctor, 
                        Book service in hospital and booking appointment for lab test. User can book 
                        appointment with online consultation. The project include all Feature for booking facility 
                        for patient.
                    </p>

                    <p className="mt-3">
                        <span className="font-bold italic">Tech Used:</span> PHP,  Codeigniter
                    </p>
                </div>
            </div>

            <div className="mt-3 text-[15px] text-white">
                <p>
                   Note: During the working period. I have contribute some exiting project.
                </p>
            </div>
        </>
    )
}

export default InfotrenchShowcaseComponent;

if (document.getElementById('infotrenchShowcase')) {
    const Index = ReactDOM.createRoot(document.getElementById("infotrenchShowcase"));

    Index.render(
        <React.StrictMode>
            <InfotrenchShowcaseComponent />
        </React.StrictMode>
    )
}
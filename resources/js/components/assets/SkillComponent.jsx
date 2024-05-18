import React from "react";

function SkillComponent() {
    let profileURI = window.location.origin + '/portfolio/public/';

    return (
        <div className="mt-3 rounded">
            <h1 className='text-[40px] font-extrabold text-white'>
                Technology is my weapon:
            </h1>

            <div className="mt-2 grid grid-cols-4 gap-2 max-lg:grid-cols-1">
                {/* PHP */}
                <div className="relative flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/php-logo.svg'} alt="php" className="card w-full p-6"/>
                    
                    <div className="absolute -bottom-[9px] -right-[9px] h-2.5 w-2.5 rounded bg-white max-lg:hidden"></div>
                </div>

                {/* Laravel PHP */}
                <div className="relative flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/laravel.svg'} alt="php" className="card w-full p-6"/>

                    <div className="absolute -bottom-[9px] -right-[9px] h-2.5 w-2.5 rounded bg-white max-lg:hidden"></div>
                </div>
             
                {/* Codeigniter */}
                <div className="relative flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/codeigniter.svg'} alt="php" className="card w-full items-center p-6"/>

                    <div className="absolute -bottom-[9px] -right-[9px] h-2.5 w-2.5 rounded bg-white max-lg:hidden"></div>
                </div>
                
                {/* Tailwind */}
                <div className="relative flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/tailwind-logo.svg'} alt="php" className="card w-full p-6"/>
                </div>
                
                {/* Javascript */}
                <div className="flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/js-logo.svg'} alt="php" className="card w-full items-center p-6"/>
                </div>

                {/* Opencart */}
                <div className="flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/opencart-logo.svg'} alt="php" className="card w-full p-6"/>
                </div>

                {/* Reactjs */}
                <div className="flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/react-js.svg'} alt="php" className="card w-full p-6"/>
                </div>

                {/* Vue Js */}
                <div className="flex h-[200px] w-full justify-center">
                    <img src={`${profileURI}` + 'storage/images/skill/vue-js-Logo.svg'} alt="php" className="card w-full p-6"/>
                </div>
            </div>

            <div className="mt-3 text-[30px] font-extrabold text-white">
                Other Skills: 
            </div>

            <ul className='ml-5 text-[15px] font-bold italic text-white'>
                <li>- Project Management</li>
                <li>- Customer Support on Plugins</li>
                <li>- Client Feature Requirement Discussion</li>
            </ul>
        </div>
    )
}

export default SkillComponent;

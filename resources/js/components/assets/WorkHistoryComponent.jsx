import React from 'react';
import Button from './TargetButtonComponent';
import etlabLogo from '../../../../public/storage/images/work/etlab-logo.png'
import webkulLogo from '../../../../public/storage/images/work/webkul-logo.png'
import infotrench from '../../../../public/storage/images/work/infotrench-logo.jpeg'

function WorkHistoryComponent () {
    return (
        <div className="rounded">
            <h1 className='text-nowrap text-[40px] font-extrabold text-white'>
               Has worked for:
            </h1>
            
            <div className="mt-2 grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                <div className="card grid grid-cols-2 items-center gap-3 p-3 max-lg:grid-cols-1 max-lg:gap-5">
                    {/* Logo */}
                    <div className="flex w-full justify-center">
                        <img 
                            src={webkulLogo} 
                            alt="webkul Logo"
                            className='w-[80%]'
                        />
                    </div>
                    
                    {/* Description */}
                    <div className="flex flex-wrap gap-3">
                        <h1 className='ml-3 text-[15px] font-bold'>
                            SOFTWARE ENGINEER | 02/11/2020 to Present
                        </h1>
                        
                        <a 
                            href='https://webkul.com' 
                            target='_blank' 
                            className='ml-3 text-[15px] italic text-blue-700 hover:underline'>
                                Webkul Software Pvt. Ltd. Noida, Uttar Pradesh, 20130
                        </a>

                        {/* Showcase Button */}
                        <Button title="Showcase" link="./webkul"></Button>
                    </div>
                </div>

                <div className='card grid grid-cols-2 items-center gap-3 p-3 max-lg:grid-cols-1 max-lg:gap-5'>
                    {/* Logo */}
                    <div className="flex w-full justify-center">
                        <img 
                            src={etlabLogo} 
                            alt="etlab"
                            className='w-[80%]'
                        />
                    </div>

                    {/* Description */}
                    <div className='flex flex-wrap gap-3'>
                        <h1 className='ml-3 text-[15px] font-bold'>
                            SOFTWARE ENGINEER | 11/06/2019 to 02/11/2020
                        </h1>
                        
                        <a 
                            href='https://etlab.co' 
                            target='_blank' 
                            className='ml-3 text-[15px] italic text-blue-700 hover:underline'>
                                EXCELIENT THINGS LAB PRIVATE LIMITED: H-403, PARSVNATH PRESTIGE, SECTOR 93A, NOIDA 201304
                        </a>

                        {/* Showcase Button */}
                        <Button title="Showcase" link="./etlab"></Button>
                    </div>
                </div>

                <div className='card grid grid-cols-2 items-center gap-3 p-3 max-lg:grid-cols-1 max-lg:gap-5'>
                    {/* Logo */ }
                    <div className="flex w-full justify-center">
                        <img 
                            src={infotrench} 
                            alt="etlab"
                            className='w-[80%]'
                        />
                    </div>

                    {/* Description */}
                    <div className='flex flex-wrap gap-3'>
                        <h1 className='ml-3 text-[15px] font-bold'>
                            TRAINEE SOFTWARE ENGINEER | 13/08/2018 to 02/06/2019
                        </h1>
                        
                        <a 
                            href='https://www.infotrench.com' 
                            target='_blank' 
                            className='ml-3 text-[15px] italic text-blue-700 hover:underline'>
                                Infotrench Technologies LLP, Noida, Uttar Pradesh
                        </a>

                        {/* Showcase Button */}
                        <Button title="Showcase" link="./infotrench"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkHistoryComponent;
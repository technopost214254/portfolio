import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/app.css';
import Button from './assets/TargetButtonComponent';

function HeaderComponent () {
    let profileURI = window.location.origin + '/portfolio/public/';

    return (
        <div className="rounded bg-white p-3">
            <div className="flex flex-wrap justify-between max-lg:hidden">
                {/* Logo */}
                <a href="./" className="">
                    <img src={`${profileURI}` + 'storage/images/logo.png'} alt="image" className='h-20' />
                </a>

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-10">
                    <a href='./'>
                        <button className='rounded-3xl bg-[#C7C1BD] p-3 font-bold'>Home</button>
                    </a>

                    <a href='./showcase'>
                        <button className='rounded-3xl bg-[#C7C1BD] p-3 font-bold'>Showcase</button>
                    </a>

                    <div>
                        <Button title="Blog" link="#"></Button>
                    </div>
                </div>
                
                {/* Resume Button */}
                <div className="flex flex-wrap items-center">
                    <a  href={`${profileURI}` + 'storage/images/vikas_resume.pdf'} 
                        target='_blank' 
                        className='flex rounded-3xl bg-black p-3 text-white'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            className="mr-2 h-4 w-4">
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="1.5" 
                                d="M8.75 21.25h-3a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l5.914 5.914a1 1 0 0 1 .293.707V20.25a1 1 0 0 1-1 1h-3m-2.5-18v5a1 1 0 0 0 1 1h5M12 13.75V20m0 0 2.5-2.5M12 20l-2.5-2.5">
                            </path>
                        </svg>
                        <span>Resume</span>
                    </a>
                </div>
            </div>
            
            <span className="hidden flex-wrap gap-1 max-lg:flex">
                <div>
                    <button className='rounded-3xl bg-[#C7C1BD] p-3 font-bold'>Home</button>
                </div>

                <div>
                    <button className='rounded-3xl bg-[#C7C1BD] p-3 font-bold'>Showcase</button>
                </div>

                <div>
                    <a href='' className='flex rounded-3xl bg-[#C7C1BD] p-3 font-bold'>
                        <span>Blog</span>

                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            className="m-1 h-4 w-4"
                            >
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="1.5" 
                                d="M9.25 3.75h-3.9c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437c-.109.214-.109.494-.109 1.054v13.3c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h13.3c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054v-3.9m-6.5-11h6.5m0 0v6.5m0-6.5L11 13">

                            </path>
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="1.5" 
                                d="M9.25 3.75h-3.9c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437c-.109.214-.109.494-.109 1.054v13.3c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h13.3c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054v-3.9m-6.5-11h6.5m0 0v6.5m0-6.5L11 13">
                            </path>
                        </svg>
                    </a>
                </div>

                <div className="flex flex-wrap items-center">
                    <a  href={`${profileURI}` + 'storage/images/vikas_resume.pdf'} 
                        target='_blank' 
                        className='flex rounded-3xl bg-black p-3 text-white'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            className="mr-2 h-4 w-4">
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="1.5" 
                                d="M8.75 21.25h-3a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l5.914 5.914a1 1 0 0 1 .293.707V20.25a1 1 0 0 1-1 1h-3m-2.5-18v5a1 1 0 0 0 1 1h5M12 13.75V20m0 0 2.5-2.5M12 20l-2.5-2.5">
                            </path>
                        </svg>
                        <span>Resume</span>
                    </a>
                </div>
            </span>
        </div>
    );
}

export default HeaderComponent;

if (document.getElementById('header')) {
    const Index = ReactDOM.createRoot(document.getElementById("header"));

    Index.render(
        <React.StrictMode>
            <HeaderComponent />
        </React.StrictMode>
    )
}
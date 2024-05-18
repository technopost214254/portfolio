import React from 'react';

function TargetButtonComponent(props) {

    return (
        <div className="">
            <a href={props.link} className='flex rounded-3xl bg-black p-3 text-white'>
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
                <span>{props.title}</span>
            </a>
        </div>
    );
}

export default TargetButtonComponent;
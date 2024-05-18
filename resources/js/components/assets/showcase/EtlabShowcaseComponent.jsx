import React from "react";
import ReactDOM from 'react-dom/client';

function EtlabShowcaseComponent() {
    return (
        <>
            <h1 className='mt-3 text-[40px] font-extrabold text-white'>
                Excelient Things Lab:

                <span className="text-[14px]">&nbsp; SOFTWARE ENGINEER | 11/06/2019 to 02/11/2020 </span>
            </h1>

            <div className="mt-3 text-[15px] text-white">
                <p>
                    Started with core PHP and Codeigniter 3 framework as a Software Developer. 
                </p>
            </div>
            
            <div className="mt-3 grid grid-cols-4 gap-2 max-lg:grid-cols-1">
                <div className="card p-3">
                    <h3 className="text-[25px] font-bold">Presentma`am</h3>

                    <p className="mt-3 text-[15px]">
                        This is child safe platform. In which have many Fetchers. Are given below.
                    </p>

                    <ul className="mt-3 pl-3 text-[13px]">
                        <li>• IoT Enabled Real-time Attendance</li>
                        <li>• IoT Enabled Real-time Attendance</li>
                        <li>• IoT Enabled Real-time Bus Attendance</li>
                        <li>• Real-time Geo-tagged Text Attendance Alerts</li>
                        <li>• Video Monitoring & GPS Tracking</li>
                    </ul>

                    <p className="mt-3">
                        <span className="font-bold italic">Tech Used:</span>  Codeigniter, MYSQL, JQUERY, HTML, CSS
                    </p>
                </div>

                <div className="card p-3">
                    <h3 className="text-[25px] font-bold">FleetSENSE</h3>

                    <p className="mt-3 text-[15px]">
                        A One-stop solution for mobile workforce management platform to improve the field operations, increase productivity, increase transparency with teams and scale up the business.
                    </p>

                    <ul className="mt-3 pl-3 text-[13px]">
                        <li>• Attendance Management</li>
                        <li>• Live Location Tracking</li>
                        <li>• Time Sheet Management</li>
                        <li>• Dashboard and Insights</li>
                        <li>• Auto Working Hours Calculator</li>
                        <li>• Daily Kilometer</li>
                        <li>• Reports</li>
                    </ul>
                    
                    <p className="mt-3">
                        <span className="font-bold italic">Tech Used:</span>  Codeigniter, MYSQL, JQUERY, HTML, CSS.
                    </p>
                </div>

                <div className="card p-3">
                    <h3 className="text-[25px] font-bold">HTSense</h3>

                    <p className="mt-3 text-[15px]">
                        Innovative Business companies are relying on wireless temperature sensors to ensure cold-chain integrity. A wireless temperature monitoring system can monitor temperature compliance in 24/7 as per required business standards and immediately notify to the multiple level of users when violation occurs as per defined business standards.
                    </p>

                    <ul className="mt-3 pl-3 text-[13px]">
                        <li>• Poultry farms</li>
                        <li>• Pharm & Health</li>
                        <li>• Food safety compliances</li>
                        <li>• Agriculture</li>
                        <li>• Warehouse & Storage</li>
                    </ul>
                    
                    <p className="mt-3">
                        <span className="font-bold italic">Tech Used:</span>  Codeigniter, MYSQL, JQUERY, HTML, CSS.
                    </p>
                </div>
                
                <div className="card p-3">
                    <h3 className="text-[25px] font-bold">RouteSENSE</h3>

                    <p className="mt-3 text-[15px]">
                        RouteSENSE API can integrate A-to-B route planning, turn-by-turn navigation, route optimization,  isochrones calculations, and more in the business applications. 
                    </p>

                    <ul className="mt-3 pl-3 text-[13px]">
                        <li>• Geocoding - Geocoding describes the process of transforming an textual address representation to a coordinate (Latitude, Longitude)</li>
                        <li>• Reverse Geocoding - Geocoding describes the process of transforming a coordinate (Latitude, Longitude) to an textual address representation</li>
                    </ul>
                    
                    <p className="mt-3">
                        <span className="font-bold italic">Tech Used:</span>  Codeigniter, MYSQL, JQUERY, HTML, CSS.
                    </p>
                </div>
            </div>
        </>
    )
}

export default EtlabShowcaseComponent;

if (document.getElementById('etlabShowcase')) {
    const Index = ReactDOM.createRoot(document.getElementById("etlabShowcase"));

    Index.render(
        <React.StrictMode>
            <EtlabShowcaseComponent />
        </React.StrictMode>
    )
}
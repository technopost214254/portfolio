import React from "react";
import ReactDOM from 'react-dom/client';

function AllShowcaseComponent() {

    return (
        <>
            <h1 className='mt-3 text-[40px] font-extrabold text-white'>
                All Showcase

                <span className="text-[14px]">&nbsp; SOFTWARE ENGINEER (5+ YRS EXPERIENCE)</span>
            </h1>
            
            <div className="mt-3 text-[15px] text-white">
                <p>
                    Software Developer skilled with technical leadership. Experienced in the full project life cycle from design to implementation to integration and live projects of the clients.
                </p>
            </div>
            
            {/* Webkul */}
            <div className="" id="#webkul">
                <h1 className='mt-3 text-[40px] font-extrabold text-white'>
                    Webkul Software Pvt. Ltd. Noida

                    <span className="text-[14px]">&nbsp; SOFTWARE ENGINEER | 02/11/2020 to Present</span>
                </h1>
                
                <div className="mt-3 grid grid-cols-4 gap-2 max-lg:grid-cols-1">
                    <div className="card relative flex items-center justify-center p-3">
                        <h3 className="text-[25px] font-bold">New Project coming soon</h3>

                        <div className="absolute -bottom-[9px] -right-[9px] h-2.5 w-2.5 rounded bg-white max-lg:hidden"></div>
                    </div>

                    <div className="card relative p-3">
                        <h3 className="text-[25px] font-bold">Solum CRM </h3>

                        <p className="mt-3 text-[15px]">
                            This project build on Krayin CRM and done multiple customization as client 
                            requirement. I have worked on multiple sections like -

                            <span className="font-bold italic">
                                &nbsp; Account, Lead, Configuration, 
                                Activity, RMA  &nbsp; 
                            </span> 
                            
                            and
                            
                            <span className="font-bold italic">
                                &nbsp; Pricing
                            </span>
                        </p>

                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span> PHP,  LARAVEL, VueJS,  Webhook.
                        </p>

                        <p className="absolute bottom-2 flex justify-items-end font-bold">Note: This is client Project</p>
                    
                        <div className="absolute -bottom-[9px] -right-[9px] h-2.5 w-2.5 rounded bg-white max-lg:hidden"></div>
                    </div>

                    <div className="card relative p-3">
                        <h3 className="text-[25px] font-bold">Marketplace </h3>

                        <p className="mt-3 text-[15px]">
                            Opencart Multi vendor module will convert your Opencart store into Marketplace (e.g eBay, Amazon, Etsy, Alibaba) with separate vendor product collection and separate vendor with feedback support and rating. Vendor can add their own shipping rate according to the shipping region and weight of the product.
                        </p>
                        
                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span> PHP, JAVASCRIPT, MYSQL, OPENCART, JQUERY, CSS, HTML.
                        </p>

                        <div className="absolute -bottom-[9px] -right-[9px] h-2.5 w-2.5 rounded bg-white max-lg:hidden"></div>
                    </div>

                    <div className="card p-3">
                        <h3 className="text-[25px] font-bold">POS & Marketplace POS</h3>

                        <p className="mt-3 text-[15px]">
                            OpenCart POS System module allows merchants to take orders in physical stores, and sync sales, inventory, and customer data with the online store. Admin can manage multiple outlets, and sales agents, print barcodes, and schedule future deliveries.
                        </p>

                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span> PHP,  JAVASCRIPT, MYSQL, BARCODE GEN/AND READ, OPENCART, JQUERY, CSS, HTML. 
                        </p>
                    </div>
                    
                    <div className="card p-3">
                        <h3 className="text-[25px] font-bold">Opencart Multi Vendor Marketplace Membership</h3>

                        <p className="mt-3 text-[15px]">OpenCart Multi Vendor Marketplace Membership makes the vendors buy the admin-created membership plan to become a vendor and manage their store and products.
                        </p>

                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span> PHP, JAVASCRIPT, JQUERY, CSS,  HTML, MYSQL, OPENCART.
                        </p>
                    </div>

                    <div className="card p-3">
                        <h3 className="text-[25px] font-bold">Opencart Marketplace RMA</h3>

                        <p className="mt-3 text-[15px]">
                            OpenCart Multi Vendor RMA module streamlines product and order returns, enabling effortless customer requests.

                            It facilitates organized returns, replacements, or refunds within the specified time, with sellers generating RMA reasons and shipping labels.
                        </p>

                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span> PHP, JAVASCRIPT, JQUERY, CSS,  HTML, MYSQL, OPENCART. 
                        </p>
                    </div>

                    <div className="card p-3">
                        <h3 className="text-[25px] font-bold">Visual Image Path Finder</h3>

                        <p className="mt-3 text-[15px]">
                            Spots are display on image. 
                        </p>

                        <ul className="mt-3">
                            <li key="1">• Each Spots have multiple different products. </li>
                            <li key="2">• Drag & Drop Option added.</li>
                        </ul>
                        
                        <a 
                            href="https://drillingparts.com/drilling-tools/power-tongs/bj-style-rod-power-tongs/bj-style-rod-tong-mark-IV.html" 
                            className="mt-3 text-[#102bd8] hover:underline"
                            target="_target"
                        >
                            Click Here
                        </a>

                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span>  PHP, JAVASCRIPT, JQUERY, CSS, HTML, MYSQL, OPENCART. 
                        </p>

                        <p className="absolute bottom-2 flex justify-items-end font-bold">Note: This is client Project</p>
                    </div>
                    
                    <div className="card p-3">
                        <h3 className="text-[25px] font-bold">Bulk Product Price Update</h3>

                        <p className="mt-3 text-[15px]">
                            I customization admin uploads a CSV file. The file has only two columns (product_id & Price). After upload and confirmation System automatically updates the price and lists out all updated products. also, add Export Options.
                        </p>

                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span> PHP, JAVASCRIP, JQUERY, CSS, HTML, MYSQL, OPENCART. 
                        </p>

                        <p className="absolute bottom-2 flex justify-items-end font-bold">Note: This is client Project</p>
                    </div>
                </div>

                <div className="mt-3 text-[15px] text-white">
                    <p>
                        I have created and update about the 30 modules including the Payment 
                        method and shipping method few of mention above. 
                    </p>

                    <p className="mt-3">
                        Some of the main extensions I have worked on for Opencart are as follows:
                    </p>

                    <ul className="mt-2 pl-10 max-lg:pl-0">
                        <li key="1">• POS (Point of Sale)</li>
                        <li key="2">• Booking Commerce Plugins (Hotel booking system and ticket reservation systems)</li>
                        <li key="3">• Feature Oriented Plugins (Size Chart, Season Sale, Split Order, Split Cart, Single Page Checkouts , One Click Order Etc)</li>
                        <li key="4">• Warehouse Management System.</li>
                        <li key="5">• And many number of customization works to make the Add-Ons clients need specific. </li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-5 h-1 w-full bg-white"></div>

            {/* Etlab */}
            <div className="" id="#etlab">
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
                            <li key="1">• IoT Enabled Real-time Attendance</li>
                            <li key="2">• IoT Enabled Real-time Attendance</li>
                            <li key="3">• IoT Enabled Real-time Bus Attendance</li>
                            <li key="4">• Real-time Geo-tagged Text Attendance Alerts</li>
                            <li key="5">• Video Monitoring & GPS Tracking</li>
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
                            <li key="1">• Attendance Management</li>
                            <li key="2">• Live Location Tracking</li>
                            <li key="3">• Time Sheet Management</li>
                            <li key="4">• Dashboard and Insights</li>
                            <li key="5">• Auto Working Hours Calculator</li>
                            <li key="6">• Daily Kilometer</li>
                            <li key="7">• Reports</li>
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
                            <li key="1">• Poultry farms</li>
                            <li key="2">• Pharm & Health</li>
                            <li key="3">• Food safety compliances</li>
                            <li key="4">• Agriculture</li>
                            <li key="5">• Warehouse & Storage</li>
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
                            <li key="1">• Geocoding - Geocoding describes the process of transforming an textual address representation to a coordinate (Latitude, Longitude)</li>
                            <li key="2">• Reverse Geocoding - Geocoding describes the process of transforming a coordinate (Latitude, Longitude) to an textual address representation</li>
                        </ul>
                        
                        <p className="mt-3">
                            <span className="font-bold italic">Tech Used:</span>  Codeigniter, MYSQL, JQUERY, HTML, CSS.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5 h-1 w-full bg-white"></div>

            {/* Infotrench */}
            <div className="" id="#infotrench">
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
            </div>
        </>
    )
}

export default AllShowcaseComponent;

if (document.getElementById('showcase')) {
    const Index = ReactDOM.createRoot(document.getElementById("showcase"));

    Index.render(
        <React.StrictMode>
            <AllShowcaseComponent />
        </React.StrictMode>
    )
}
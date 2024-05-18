import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/app.css';
import WorkHistory from './assets/WorkHistoryComponent';
import Skill from './assets/SkillComponent';
import Education from './assets/EducationComponent';
import AboutComponent from './assets/AboutComponent';
import ProfileComponent from './assets/ProfileComponent';

function BodyComponent() {
    return (
        <div className='mt-10'>
            <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-1">
                {/* Profile Phone */}
                <ProfileComponent></ProfileComponent>
                
                {/* Name & description */}
                <div className="flex flex-wrap">
                    {/* About */}
                    <AboutComponent></AboutComponent>

                    {/* Education */}
                    <Education></Education>
                </div>
            </div>
            
            {/* Work History */}
            <div className="mt-3">
                <WorkHistory></WorkHistory>
            </div>

            {/*  Skill */}
            <div className="mt-3">
                <Skill></Skill>
            </div>
        </div>
    );
}

export default BodyComponent;

if (document.getElementById('body')) {
    const Index = ReactDOM.createRoot(document.getElementById("body"));

    Index.render(
        <React.StrictMode>
            <BodyComponent />
        </React.StrictMode>
    )
}
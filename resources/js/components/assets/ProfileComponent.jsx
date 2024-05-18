import React from "react";

function ProfileComponent() {
    let profileURI = window.location.origin + '/portfolio/public/';
    
    return (
        <div className="card bg-white p-3">
            <div className="flex justify-between">
                <img 
                    src={`${profileURI}` + 'storage/images/profile-phone.png'}
                    alt="profile-image"
                    className='max-lg:min-w-30 rounded-xl'
                />
            </div>
        </div>
    )
}

export default ProfileComponent;

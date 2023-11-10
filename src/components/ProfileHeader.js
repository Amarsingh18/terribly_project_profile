import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <img
        className="profile-picture"
        src="./profile_img.png"
        alt="Profile"
      />
      <div className="user-info">
        <h2 style={{ color: 'Black'}}>Amar Singh</h2>
        <p style={{ color: 'Black',margin:'5px' }}>Gorakhpur, India</p>
        <p style={{ color: 'Black', margin:'5px' }}>Contact no: 8318393195</p>
        <h4 style={{ color: 'Black',  margin:'5px'}}>Co-founder & Ceo at Stark Industry</h4>
        <div className="user-stats">
        <img style={{width:"25px"}}src="star.png" alt="100" srcset="" />
        <p style={{ color: 'Black' }}>125k</p>
        <img style={{width:"30px"}} src="https://img.icons8.com/?size=64&id=NIRDzPaWTI00&format=png" alt="" srcset="" />
        <p style={{ color: 'Black' }}>200.24k</p>
        <img style={{width:"25px"}} src="https://img.icons8.com/?size=48&id=SkbzwdwhI2sy&format=png" alt="" srcset="" />
        <p style={{ color: 'Black' }}>500.5k</p>
        </div>
        <a href="https://www.instagram.com/iam__amarsingh/?hl=en" target="_blank" rel="noopener noreferrer">
          Visit Instagram Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;

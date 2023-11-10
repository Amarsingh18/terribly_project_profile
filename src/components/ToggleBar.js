import React from 'react';

const ToggleBar = () => {
  return (
    <div className='black'>
      <span>
        <img style={{ width: "50px", height: "50px", marginRight: "10px" }} src="https://img.freepik.com/premium-photo/open-book-palm-education-collage-concept_488220-71097.jpg?w=740" alt="" />
        <h1>Stories</h1>
        <button type="button">Courses</button>
      </span>
    </div>
  );
};

export default ToggleBar;

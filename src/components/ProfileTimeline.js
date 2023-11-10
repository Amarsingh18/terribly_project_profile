import React from 'react';
import Post from './Post';


const ProfileTimeline = () => {
  return (
    <div className="profile-timeline">
      <div>
        <h3>A Changing World Order <span><img style={{ width: "20px" }} src="star.png" alt="" /></span></h3>
        <p>The world is changing at a feverish pace. Friends, colleagues, and everyone engaged in knowledge work are beginning to sense this including.....</p>
      </div>
      <Post />
      <div>
        <h3>Indian V/S Australia <span><img style={{ width: "20px" }} src="star.png" alt="" /></span></h3>
        <p>Think about it - This cricket series was akin to therapy.</p>
        <p>Laying our childhood trauma up too, working with slowly and surely over two months.....</p>
      </div>
      <Post />
      <div>
        <h3>Write To Build <span><img style={{ width: "20px" }} src="star.png" alt="" /></span></h3>
        <p>Writing is the first step to create:</p>
        <p>- stories</p>
        <p>- products</p>
        <p>- companies</p>
      </div>
      <Post />
    </div>
  );
};

export default ProfileTimeline;

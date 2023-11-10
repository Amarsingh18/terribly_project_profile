
import React from 'react';
import './App.css';
import ToggleBar from './components/ToggleBar';
import Background from './components/Background';
import ProfileHeader from './components/ProfileHeader';
import ProfileTimeline from './components/ProfileTimeline';


function App() {
  return (
    <div>
      <ToggleBar/>
      <Background />
      <ProfileHeader />
      <ProfileTimeline />
      
    </div>
  );
}

export default App;

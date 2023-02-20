import React from 'react';
import Profile from './profile/Profile.js';
import Herbs from './Image/Herbs.jpg';

function App() {
  return (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
  <img src={Herbs} alt="Profile" width={150} height={200} style={{marginRight: '20px'}}/>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Profile
      fullName="M A N L I K E H E R B S"
      bio="HerbsOven Inc."
      profession="Music Producer"
      handleName={(name) => alert(`Name: ${name}`)}
      className="text"
    />
  </div>
</div>

  );
}

export default App;

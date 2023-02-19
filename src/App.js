import React from 'react';
import Profile from './profile/Profile.js';
import BiiGHerbs1 from './Image/BiiGHerbs1.JPG';

function App() {
  return (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
  <img src={BiiGHerbs1} alt="Profile" width={200} height={300} style={{marginRight: '20px'}}/>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Profile
      fullName="M A N L I K E H E R B S"
      bio="HerbsBots Inc."
      profession="Web Developer"
      handleName={(name) => alert(`Name: ${name}`)}
      className="text"
    />
  </div>
</div>

  );
}

export default App;

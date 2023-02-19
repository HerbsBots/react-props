import React from 'react';
import PropTypes from 'prop-types';

// function Profile({ fullName, bio, profession, children, handleName }) {
//   return (
//     <div>
//       <h1>{fullName}</h1>
//       <p>{bio}</p>
//       <p>{profession}</p>
//       {children}
//       <button onClick={() => handleName(fullName)}>Show Name</button>
//     </div>
//   );
// }

function Profile(props) {
  const {fullName, bio, profession, children, handleName } = props;
  return (
    <div> 
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p><i>{profession}</i></p>
      {children}
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
}


Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};



Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown',
  handleName: (name) => alert(`The user's name is ${name}.`),
};


export default Profile;

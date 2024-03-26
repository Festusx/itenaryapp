import React from 'react';
import zeemaVideo from './images/Zeema.mp4';

function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay loop muted >
        <source src={zeemaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
      </div>
    </div>
  );
}


function LandingComponent() {
  const divStyle = {
    color: 'black',
    padding: '0px',
    borderRadius: '10px',
    height: '90vh', // Adjust height as necessary
    width: '40%',
    border: '3px solid black',
    position: 'relative', // Required for positioning the video
    overflow: 'hidden', // Hide overflow to prevent scrollbars
    margin: '20px',
    boxShadow: '0px 0px 10px rgba(255, 105, 180, 0.9)',
    // boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
  };

  return (
    <div style={divStyle}>
      <VideoBackground />

    </div>
  );
}

export default LandingComponent;

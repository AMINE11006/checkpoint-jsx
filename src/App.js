import React from 'react';
import './style.css';
import imageInSrc from "../src/imageInSrc.jpg";

function App() {
  return (
    <div className="App">
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}> 
            <h1 className="titleRed">Your name here</h1>   
              <img src={imageInSrc} alt="moon"/> 
              <img src="/imageInPublic.jpg" alt="flower"/>  
        </div>  

      <video width="320" height="240" controls>  
        <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;

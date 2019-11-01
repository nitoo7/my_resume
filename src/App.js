import React, { useState } from 'react';
import logo from './logo.svg';
import Profile1 from '../src/assets/images/profile_4.png';
import Profile2 from '../src/assets/images/profile_2.png';
import Slider from './Slider';
import Header from './Header';
import Datacard from './Datacard';
import Data from "./data.json";
import './App.css';

function App() {
  let position = "0px";

  // setInterval(() => {
  //   if(position === "0px") {
  //     position = "-450px";
  //   } else {
  //     position = "0px";
  //   }
  //   document.getElementById("test").style["transform"] = "translateY(" + position + ")"
  //   document.getElementById("test").style["transition-duration"] = "750ms"
  // }, 5000)

  return (
    <div className="App">
      <Header />
      <div className="first">
          <div id="test" className="profileImgs">
            <div className="imgContainer"><img src={Profile1}></img></div>
          </div>
          {/* <span className="label">Developer</span> */}
          <Slider slideCount={3} slides={[
            {
              content: <div className="tile">
                Full Stack Devloper
              </div>
            },
            {
              content: <div className="tile">
                React/Redux
              </div>
            },
            {
              content: <div className="tile">
                UI@WalmartLabs
              </div>
            },
            {
              content: <div className="tile sdfsdf">
                Ui Specialist
              </div>
            },
            {
              content: <div className="tile">
                Server side(Node.js)
              </div>
            }
          ]} />
      </div>
      {
        Object.keys(Data).map(section => (
          <Datacard data={Data[section]} />
        ))
      }
    </div>
  );
}

export default App;

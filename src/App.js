import React, { useState } from 'react';
import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import Steps from './Vectors/steps.svg'
import Workout from './Vectors/workout.svg'
import Nutrition from './Vectors/nutrition.svg'
import Data from './Data/data.json'
import ContentBox from './Components/contentBox.js'


function App() {


  return (
    <div className="App">
      {/* ------------------heading--------------------- */}
      <h1 className="AppHeading">EvolvFit Frontend Challenge</h1>
      {/* Container */}
      <div className="Container">
        {/* ------------------Container Heading---------------- */}
        <div className="ContainerHeading">
          <div className="LogoContainerHeadingEmpty"></div>
          <div className="LogoContainerHeading">
            <img src={Steps} alt="Steps Logo" className="ContainerHeadingLogo" />
            <h3 className="ContainerHeadingText">Steps</h3>
          </div>
          <div className="LogoContainerHeading">
            <img src={Workout} alt="Workout Logo" className="ContainerHeadingLogo" />
            <h3 className="ContainerHeadingText">Workout</h3>
          </div>
          <div className="LogoContainerHeading">
            <img src={Nutrition} alt="Nutrition Logo" className="ContainerHeadingLogo" />
            <h3 className="ContainerHeadingText">Nutrition</h3>
          </div>
          <div className="LogoContainerHeadingEmptyLast"></div>
        </div>
        {/* ----------------Content Container-----------------*/}
        <div className="ContainerContent">
          {
            Data.map(data => {

              return <ContentBox data={data} />
            })
          }

        </div>


      </div>
    </div>
  );
}

export default App;

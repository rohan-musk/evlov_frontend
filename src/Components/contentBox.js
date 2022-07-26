import React, { useState } from 'react';
import '../App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';
import 'react-circular-progressbar/dist/styles.css';
import Profile from '../Images/profile.png'
import ScheduledDate from '../Vectors/scheduledDate.svg'
import PerformedDate from '../Vectors/performedDate.svg'
import Next from '../Vectors/next.svg'
import Notification from '../Vectors/notification.svg'
import Dropdown from '../Components/Dropdown.js'
import Data from '../Data/data.json'


const ContentBox = ({ data }) => {

    let today = new Date();
    const alarm = false
    if (data.scheduledDate == today) {
        alarm = true;
    }
    const [isShown, setIsShown] = useState(-1);
    const value = 2547;
    const [steps, setSteps] = useState(data.stepsTarget);
    const [nutrition, setNutrition] = useState(data.calorieTarget);
    const increaseSteps = () => {
        setSteps(steps + 500)
    }
    const decreaseSteps = () => {
        setSteps(steps - 500)
    }
    const increaseNutrition = () => {
        setNutrition(nutrition + 100)
    }
    const decreaseNutrition = () => {
        setNutrition(nutrition - 100)
    }
    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString();
    }
    return (
        <div className="ContentBox" key={data.id}>
            {/* --------------Profile----------- */}
            <div className="Profile">
                <div className="ProfileContainer">
                    <img src={Profile} alt="Profile Pic" height="48px" width="48px" />
                    <div className="ProfileContent">
                        <h3 className="Name">{data.name}</h3>
                        <p >{data.email}</p>
                    </div>
                </div>
            </div>
            {/* ---------------Steps---------------- */}
            <div className="Steps">
                <div style={{ width: 60, height: 60 }}>
                    <CircularProgressbarWithChildren value={value} maxValue={4000} styles={buildStyles({ pathColor: '#7FD18C' })}>
                        <h5>{data.stepsWalked}</h5>
                        <p className="Walked">walked</p>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="StepsContent">
                    <button className="Button" onClick={increaseSteps}>+</button>
                    <h3>{steps / 1000}k</h3>
                    <p>target</p>
                    <button className="Button" onClick={decreaseSteps}>-</button>

                </div>
            </div>
            {/* ------------Workout----------------- */}
            <div className="Workout">
                <div className="Dates">
                    <div className="Date">
                        <img src={PerformedDate} alt="PerformedDate Logo" className="DateLogo" />
                        <h4>{getFormattedDate(data.performedDate)}</h4>
                    </div>
                    {(alarm == false) ?
                        <div className="Date">
                            <img src={ScheduledDate} alt="ScheduledDate Logo" className="DateLogo" />
                            <h4>{getFormattedDate(data.scheduledDate)}</h4>
                        </div>
                        :
                        <div className="Date Alert">
                            <img src={ScheduledDate} alt="ScheduledDate Logo" className="DateLogo" />
                            <h4>{getFormattedDate(data.scheduledDate)}</h4>
                        </div>
                    }

                </div>
                {(data.feedback == true) ? <div className="NextLogo Alert" >!</div> : <img src={Next} alt="Next Logo" className="NextLogo" />}
            </div>
            {/* ------------Nutrition----------------- */}
            <div className="Nutrition">
                <div className="CaloriesTakenContainer">
                    <div style={{ width: 60, height: 60 }} onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(-1)}>
                        <PieChart
                            data={[
                                { title: 'Protein', value: data.proteinConsumed, color: '#F45C84' },
                                { title: 'Carbohydrate', value: data.carbConsumed, color: '#03C7FC' },
                                { title: 'Fats', value: data.fatConsumed, color: '#F5C90F' },
                            ]}
                            radius={25}
                            lineWidth={20}
                            viewBoxSize={[50, 50]}
                            center={[25, 25]}
                        />
                    </div>
                    <div className="CaloriesTaken">
                        <h5>{data.calorieIntake}</h5>
                        <p className="Walked">calories</p>
                    </div>
                </div>
                {isShown === 1 && (
                    <div>
                        <Dropdown proteinConsumed={data.proteinConsumed} proteinTarget={data.proteinTarget} carbConsumed={data.carbConsumed} carbTarget={data.carbTarget} fatConsumed={data.fatConsumed} fatTarget={data.fatTarget} />
                    </div>
                )}
                <div className="NutritionContent">
                    <button className="Button" onClick={increaseNutrition}>+</button>
                    <h3>{nutrition / 1000}k</h3>
                    <p>target</p>
                    <button className="Button" onClick={decreaseNutrition}>-</button>
                </div>
                <img src={Next} alt="Next Logo" className="NextLogo" />
            </div>
            {/* ----------------Notification----------------- */}
            <div className="Notification">
                <img src={Notification} alt="Notification Logo" className="NotificationLogo" />
            </div>
        </div>
    )
}

export default ContentBox

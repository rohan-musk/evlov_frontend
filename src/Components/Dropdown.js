import React from 'react'
import '../App.css';

const Dropdown = ({ proteinConsumed, proteinTarget, carbConsumed, carbTarget, fatConsumed, fatTarget }) => {
    return (
        <div className="Dropdown" >

            <div className="DropdownContainer">
                <div className="NutrientInformation">
                    <h3>PROTEIN</h3>
                    <h3>{proteinTarget}g</h3>
                </div>
                <div className="ProteinTotal">
                    <div className="ProteinConsumed" style={{ width: proteinConsumed }}></div><h6>{proteinConsumed}g</h6>
                </div>
            </div>
            <div className="DropdownContainer">
                <div className="NutrientInformation">
                    <h3>CARBOHYDRATE</h3>
                    <h3>{carbTarget}g</h3>
                </div>
                <div className="CarbohydrateTotal">
                    <div className="CarbohydrateConsumed" style={{ width: carbConsumed }}></div><h6>{carbConsumed}g</h6>
                </div>
            </div>
            <div className="DropdownContainer">
                <div className="NutrientInformation">
                    <h3>FATS</h3>
                    <h3>{fatTarget}g</h3>
                </div>
                <div className="FatsTotal">
                    <div className="FatsConsumed" style={{ width: fatConsumed }}></div><h6>{fatConsumed}g</h6>
                </div>
            </div>
        </div>
    )
}

export default Dropdown

import React from "react";
import banner from "../../assets/banner.png"

function Mission() {
    return (
        <>
            <div className="mission_section">
                <div className="title">
                    <h1>WE ARE ON A MISSION, JOIN US.</h1>
                </div>
                <div className="img">
                    <img src={banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Mission;
import React from "react";
import scpdata from "./SCP.json";
import image from "./images/SCP-005.jpg"
function ComponentFour() {
    const scpObject = scpdata[3];

    return (
        <div className="container">
            <div className="card-body">
                <img src={image} class="scp005" alt="scp005"/>
                <div class="Documentpaper">
                <p className="scp-title">{scpObject.subject}</p>
                <div class="Safe">
                <h5 >Class: {scpObject.Class}</h5>
                </div>
                <p className="card-text">{scpObject.Description_sum}</p>
                <p className="card-text">{scpObject.Containment_sum}</p>
                </div>
            </div>
        </div>
    );
}

export default ComponentFour;
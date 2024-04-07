import React from "react";
import scpdata from "./SCP.json";
import image from "./images/800px-SCP002.jpg"
function ComponentOne() {
    const scpObject = scpdata[0];

    return (
        <div className="container">
            <div className="card-body">
                <img src={image} class="scp003" alt="scp002"/>
                <div class="Documentpaper">
                <p className="scp-title">{scpObject.subject}</p>
                <div class="Euclid">
                <h5 >Class: {scpObject.Class}</h5>
                </div>
                <p className="card-text">{scpObject.Description_sum}</p>
                <p className="card-text">{scpObject.Containment_sum}</p>
                </div>
            </div>
        </div>
    );
}

export default ComponentOne;

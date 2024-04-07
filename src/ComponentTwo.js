import React from "react";
import scpdata from "./SCP.json";
import image from "./images/SCP-003a-new.jpg"

function ComponentTwo()
{
    const scpObject = scpdata[1];
    return(
        <div className="container">
            <div className="card-body">
                <img src={image} class="scp003" alt="scp003"/>
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

export default ComponentTwo;
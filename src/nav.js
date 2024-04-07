import {Link} from 'react-router-dom';
import React from 'react';
import mainlogo from './images/SCPIogo.webp';
import './app.css'

function Nav()
{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
        <button class="navbutton" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" hidden>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" class= "navbar2">
        <img src={mainlogo} class="mainlog" alt=''/>
        <h1 class="TitleNav">SCP Foundation</h1>
        <br></br>
        <Link to="/Home">
            <button className="nav-link active" aria-current="page" href="#">Home</button>
        </Link>
        <Link to="/ComponentOne">
            <button className="nav-link" href="#">SCP-002</button>
        </Link>
        <Link to="/ComponentTwo">
            <button className="nav-link" href="#">SCP-003</button>
        </Link>
        <Link to="/ComponentThree">
            <button className="nav-link" href="#">SCP-004</button>
        </Link>
        <Link to="/ComponentFour">
            <button className="nav-link" href="#">SCP-005</button>
        </Link>
        <Link to="/ComponentFive">
            <button className="nav-link" href="#">SCP-006</button>
        </Link>
        

        </div>
        </div>
        </div>
        </nav>
    );
}

export default Nav;
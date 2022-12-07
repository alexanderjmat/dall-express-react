import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
    return (
        <div className="Home">
            <div className="Home__Welcome">
                <h1>Welcome to the DALL·Express Gallery of Art</h1>
                <h3>The first online marketplace exclusively devoted to artwork created by DALL·E 2</h3>
            </div>
            <div className="Home__NewArt">
                <h3>Newest Art</h3>
                <h1>Coming Soon</h1>

            </div>
        </div>
    )
}


export default Home;
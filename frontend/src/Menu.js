import React, { useState, useEffect } from "react";
import "./Menu.css";
import logo from "./content/design/logo_homepage.png"
import cart from "./content/icons/cart-30.png"
import axios from "axios";



function Menu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [data, setData] = useState({
		name: "",
        age: ""
	});

    useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy

		fetch("/data").then(res =>
			res.json().then((data) => {
				// Setting a data from api
				setData({
					name: data.name,
                    age: data.age
				});
			})
		);
	}, []);


    return (
        <div className="Menu">
            <div className="Menu__Header">
                <img src={logo} alt="Logo"/>
                <h1><a href="/">·DEGA·</a></h1>
            </div>
            <div className="Menu__Navbar-1">
                <ul className="--menu">
                    <li><a href="/about">About</a></li>
                    <li><a href="/marketplace">Marketplace</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="Menu__Navbar-2">
                <ul className="--menu">
                    <li><a href="/about"><img src={cart}/></a></li>
                    <li><a className="Raleway" href="/marketplace">SIGNUP</a></li>
                    <li><a className="Raleway" href="/contact">LOGIN</a></li>
                </ul>
            </div>
        </div>
    )

}



export default Menu;

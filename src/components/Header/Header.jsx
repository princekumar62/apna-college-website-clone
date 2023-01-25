import React from "react";
import "../style/App.css";
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="this is a logo"/>
                </div>
                <div className="links">
                    <div className="first">
                        <a href={"/"}>Alpha Batch 3.0</a>
                    </div>
                    <div className="second">
                        <ul>
                            <li><a href={"/footer"}>Home</a></li>
                            <li><a href={"/"}>Notes</a></li>
                            <li><a href={"/"}>Log in</a></li>
                        </ul>
                    </div>
                    <div className="third">
                        <a href={"/"}>Sign up</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
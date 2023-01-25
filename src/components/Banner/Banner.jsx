import React from "react";
import bannerImg from "../../assets/banner.svg";

function Banner() {
    return (
        <>
            <div className="banner_section">
                <div className="items_section">
                    <h1>want to learn</h1>
                    <span>Hello People?   </span>
                    <p>We make programming simple & easy to understand.</p>
                    <a href={"/"}>Sign Up<i className="fa-solid fa-caret-right"></i></a>
                </div>
                <div className="img_section">
                    <img src={bannerImg} alt="this is a banner"/>
                </div>
            </div>
        </>
    );
};

export default Banner;
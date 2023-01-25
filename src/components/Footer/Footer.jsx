import React from "react";
import logo from "../../assets/logo.png";
import Links from "../Links/Links";
import links from "../js_file/links.js";
import Links2 from "../Links/Links2";
import icons from "../js_file/icons.js";
import Copy from "../Copy/Copy";

export default function Footer() {
    return (
        <>
            <div>
                <div className="footer_section" id="/footer">
                    <div className="first">
                        <img src={logo} alt="this is a logo" />
                        <p>We are India's Most Loved Coding Community. Join us! </p>
                    </div>

                    <div className="second">
                        <h2>Helpfull Links</h2>
                        <div className="links">
                            <Links linkName={links[0]} />
                            <Links linkName={links[1]} />
                            <Links linkName={links[2]} />
                            <Links linkName={links[3]} />
                        </div>
                    </div>

                    <div className="third">
                        <h2>Get In Touch</h2>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                            <span>hello@apnacollege.in</span>
                        </div>
                    </div>

                    <div className="forth">
                        <h2>Connect With Us</h2>
                        <div>
                            <Links2 iconsName={icons[0].iconsName} iconsLogo={icons[0].iconsLogo} />
                            <Links2 iconsName={icons[1].iconsName} iconsLogo={icons[1].iconsLogo} />
                            <Links2 iconsName={icons[2].iconsName} iconsLogo={icons[2].iconsLogo} />
                            <Links2 iconsName={icons[3].iconsName} iconsLogo={icons[3].iconsLogo} />
                            <Links2 iconsName={icons[4].iconsName} iconsLogo={icons[4].iconsLogo} />
                        </div>
                    </div>
                </div>
                <div>
                    <Copy />
                </div>
            </div>
        </>
    )
}
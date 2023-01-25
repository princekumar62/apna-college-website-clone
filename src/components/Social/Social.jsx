import React from "react";

function Social() {
    return (
        <>
            <div className="social_section">
                <div className="social_title">
                    <h1>Join us on</h1>
                    <span>#Youtube</span>
                </div>
                <div className="social_links">
                    <div className="youtube">
                        <a href={"/"}><i class="fa-brands fa-youtube"></i></a><br />
                        <span>Youtube</span>
                        <p>Apna College</p>
                    </div>
                    <div className="instagram">
                        <a href={"/"}><i className="fa-brands fa-instagram"></i></a><br />
                        <span>Instagram</span>
                        <p>Aman Dhattarwal</p>
                    </div>
                    <div className="telegram">
                        <a href={"/"}><i className="fa-brands fa-telegram"></i></a><br />
                        <span>Telegram</span>
                        <p>Apna college</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social;
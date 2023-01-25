import React from "react";
// import back from "../../assets/back.svg";

function Community() {
    return (
        <>
            <div className="community">
                <h1>INDIA'S MOST LOVED CODING COMMUNITY ❤️</h1>
                <div className="community_container">
                    <div className="first">
                        <div>
                            <span><i className="fa-solid fa-people-group"></i></span>
                            <span>3,000,000+</span>
                        </div>
                        <div>
                            <h3>happy Learners</h3>
                        </div>
                    </div>
                    <div className="second">
                        <div>
                            <span><i className="fas fa-hand-holding-heart"></i></span>
                            <span>3 crore+</span>
                        </div>
                        <div>
                            <h3>monthly views</h3>
                        </div>
                    </div>
                    <div className="third">
                        <div>
                            <span><i className="fas fa-link"></i></span>
                            <span>200,000+</span>
                        </div>
                        <div>
                            <h3>New monthly subscribers</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community;
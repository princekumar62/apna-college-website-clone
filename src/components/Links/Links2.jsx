import React from "react";


function Links2(props) {
    return (
        <>
            <div>
                <span>{props.iconsName}</span>
                <i className={props.iconsLogo}></i>
            </div>
        </>
    )
}

export default Links2;
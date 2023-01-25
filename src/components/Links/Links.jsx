import React from "react";

function Links(props) {
    return (
        <div className="one">
            <i class="fa-solid fa-greater-than"></i>
            <a href={"/"}>{props.linkName}</a>
        </div>
    )
}

export default Links;
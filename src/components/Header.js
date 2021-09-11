import React from "react";


const Header = (props) => {
    return (
        <>
            <div className="header">
                <div className="progress-container">
                    <div className={props.checked ? "progress-bar" : "progressive-bar"}>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;


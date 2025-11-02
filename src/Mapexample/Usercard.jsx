import React from "react";

const Usercard = (props) => {
    return (
        <>

            <div className="usercard-child">
                <div className="usercard-inner-child">
                    {/* 👇 image use kari */}
                    <img
                        className="usercard-image"
                        src={props.userimage}
                        alt="user"
                    />

                    <div className="usercard-name">{props.name}</div>
                    <div className="usercard-role">{props.role}</div>
                    <div className="usercard-about">{props.about}</div>
                    <div className="usercard-lorem">
                       {props.lorem}
                    </div>
                    <div className="usercard-btn">
                        <button className="usercardbutton">View Profile</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Usercard;

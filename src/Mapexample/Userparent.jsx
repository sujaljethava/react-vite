import React from 'react'
import Usercard from './Usercard'
import userImage from "../assets/userimage1.png"; 
import userImage1 from "../assets/userimage2.png"; 

const Userparent = () => {
    const userprofile = [
        {
            userimage: userImage, // ✅ remove extra { }
            name: "Sujal Jethava",
            role: "Frontend Developer",
            about: "Building UI with React",
            lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            userimage: userImage1,
            name: "Harshi Gohil",
            role: "UI & UX Designer",
            about: "Designing Interfaces",
            lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            userimage: userImage,
            name: "Tina Kava",
            role: "Backend Developer",
            about: "Managing Servers",
            lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ];
    
    console.log(userprofile);
    
    return (
        <>
            <div className="usercard-main">
                <div className="container">
                    <div className="usercard-inner-main">
                        {userprofile.map((elem, index) => (
                            <Usercard 
                                key={index}
                                userimage={elem.userimage}
                                name={elem.name}
                                role={elem.role}
                                about={elem.about}
                                lorem={elem.lorem}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Userparent;

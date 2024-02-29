import React from 'react';
import '../Styles/container.css'
import notification from "../assets/notification.svg";
const ContainerIntro = (props) => {
        return (

            <div className="container intro" id="frame1">
                <img src={notification} className={'notification'} alt={"notification-container"}/>
                {props.children}
                <img className="sparkle" id="sparkle1" src={require("../assets/sparkle.png")} alt="sparkle"></img>
                <img className="sparkle" id="sparkle2" src={require("../assets/sparkle.png")} alt="sparkle"></img>
            </div>
        )
}
export default ContainerIntro;
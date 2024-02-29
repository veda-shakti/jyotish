import React, {useContext} from 'react';
import '../../Styles/ContentBlockVebinar.css'
import ModalContext from "../FormPay/ModalContext";
import AdaptiveTag from "./AdaptiveTag";
import Buttonreg from "../../assets/Buttonreg";
const ContentBlockVebinar = (props) => {

    return (
        <div className="absolute">
        <div className="content blockvebinar" id={`content${props.contentid}`}>
            <div className="scrolldiv" id={`scroll${props.contentid}`}>
                {props.children}
            </div>
        </div>
        </div>
    );
};

export default ContentBlockVebinar;
import React from 'react';
import '../../Styles/content.css';
import '../../Styles/Frame3.css'

const ContentPhoneMainInfo = (props) => {
    return (
        <div className="content PhoneMainInfo" id={`content${props.contentid}`}>
            <div className="scrolldiv"></div>
            <div className={`frame2_block contentblock frame3_block ${props.unbg ? 'no-background' : ''}`}>
                {props.title}
                {props.description}
            </div>
        </div>
    );
};

export default ContentPhoneMainInfo;
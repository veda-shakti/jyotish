import React from 'react';
import '../../Styles/content.css';

const ContentIntroPhone = (props) => {

        return (
            <div className="absolute">
                <div className="content introphone" id={`content${props.contentid}`}>
                    <div className="scrolldiv">
                    {props.contentvalue}
                    <div className="frame2_block contentblock">
                        <img src={props.imgSrc} alt="emblem" className="frame2_block_img"></img>
                        {props.title}
                        {props.description}
                        <div className="reg">
                            {props.button}
                        </div>
                        <div className="buttons">
                            {props.tags.map(tag =>
                                <div className="buttons_child">{tag}</div>
                            )}
                        </div>
                        <div className="frame2_block_info">
                            {props.info.map((tag, index) =>
                                <div className="frame2_block_info_сhild" key={index} id={`frame2_block_info${index}`}>
                                    {tag}
                                </div>
                            )}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    };

export default ContentIntroPhone;
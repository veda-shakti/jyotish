import React from 'react';
import '../../Styles/Modal.css'
const ModalFeedBack = ({content}) => {

    return (
        <div className="modal_container">
            <div className="modal_full_feedback">
                <h5 className="modal_full_feedback_name">{content.pagetitle}</h5>
                <p className="modal_full_feedback_content">{content.content}</p>
            </div>
        </div>
    );
};

export default ModalFeedBack;
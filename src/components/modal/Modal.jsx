import React, {useContext, useEffect, useState} from 'react';
import bgimg from '../../assets/bg.webp'
import button from '../../assets/christ_button.svg'
import '../../Styles/Modal.css'
import ModalContext from "./ModalContext1";
import ContentLastBlock from "../Content/ContentLastBlock";
import ModalFeedBack from "./ModalFeedBack";



const Modal = () => {
    const {showModal, setShowModal, kursModal, setKursModal, feedbackModal, setFeedbackModal} = useContext(ModalContext);
    const [renderModal, setRenderModal] = useState(false);
    const [showClass, setShowClass] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (showModal) {
            setRenderModal(true);
            timeoutId = setTimeout(() => {
                setShowClass(true);
            }, 100);
        } else {
            setShowClass(false);
            timeoutId = setTimeout(() => {
                setRenderModal(false);
                setKursModal(false)
                setFeedbackModal(null)
            }, 300);
        }

        return () => clearTimeout(timeoutId);
    }, [showModal, setFeedbackModal, setKursModal]);


    return (


        <div>
            {renderModal && (
                <div className={`modal ${showClass ? 'show' : 'hide'}`}>
                        <div className="modal_full">
                            <img src={bgimg} className="modal_bg_effect" alt={"backgroundeffect"}/>
                            <span className="close_full" onClick={() => setShowModal(false)}><img alt="close" src={button}/></span>
                            <div className="modal_full_content">
                                {kursModal && (<ContentLastBlock
                                    contentid="99"/>
                                    )}
                                {feedbackModal && (<ModalFeedBack content={feedbackModal}/>)}
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
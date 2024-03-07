import React, {useContext, useEffect, useState} from 'react';
import button from '../../assets/christ_button.svg'
import '../../Styles/Modal.css'
import ModalContext from "./ModalContext1";
import ContentLastBlock from "../Content/ContentLastBlock";
import ModalFeedBack from "./ModalFeedBack";
import imgBg from "../../assets/bg.webp";
import imgBg2 from "../../assets/bg-phone.webp";
import imgBg1 from "../../assets/bg-tablet.webp";



const Modal = () => {
    const {showModal, setShowModal, kursModal, setKursModal, feedbackModal, setFeedbackModal} = useContext(ModalContext);
    const [renderModal, setRenderModal] = useState(false);
    const [showClass, setShowClass] = useState(false);
    const [currentBg, setCurrentBg] = useState(imgBg);

    useEffect(() => {
        // Функция для определения и установки текущего фонового изображения
        const updateBackground = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 560) {
                setCurrentBg(imgBg2); // для телефонов
            } else if (screenWidth >= 560 && screenWidth < 960) {
                setCurrentBg(imgBg1); // для планшетов
            } else {
                setCurrentBg(imgBg); // для десктопов
            }
        };

        // Вызов функции при первой загрузке компонента
        updateBackground();

        // Добавление обработчика события изменения размера окна
        window.addEventListener('resize', updateBackground);

        // Удаление обработчика события при размонтировании компонента
        return () => window.removeEventListener('resize', updateBackground);
    }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании

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
                            <img src={currentBg} className="modal_bg_effect" alt={"backgroundeffect"}/>
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
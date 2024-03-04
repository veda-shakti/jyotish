import React, {useEffect, useState} from 'react';
import bgimg from "../../assets/bg.webp";
import button from "../../assets/christ_button.svg";
import '../../Styles/ModalPay.css'

const ModalPay = ({showModal, setShowModal, renderChoise}) => {

    const [renderModal, setRenderModal] = useState(false);
    const [showClass, setShowClass] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('22500'); // Значение по умолчанию

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
            }, 300);
        }

        return () => clearTimeout(timeoutId);
    }, [showModal]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        window.open('https://pay.fondy.eu/s/5cN5EO9El', '_blank');
    }

    return (
        <>
            {renderModal && (
                <div className={`modal_pay_container ${showClass ? 'show' : 'hide'}`}>
                    <img src={bgimg} className="modal_pay_bg_effect" alt={"backgroundeffect"}/>
                    <span className="close_full_pay" onClick={() => setShowModal(false)}><img alt="close" src={button}/></span>
                    <div className="window_modal_pay">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <h2>Форма регистрации</h2>
                            <p>
                                После оплаты Вам на почту придут инструкции и ссылка для подключения к чату в Telegram.
                            </p>
                            {renderChoise && (<>
                                <span className="modal_pay_request">Какую сумму Вы хотели бы внести?</span>
                                <div className="modal_pay_buttons">
                                    <label>
                                        <input className="modal_radio"
                                               type="radio"
                                               name="amount"
                                               value="22500"
                                               checked={selectedAmount === '22500'}
                                               onChange={() => setSelectedAmount('22500')}
                                        />
                                        22 500 грн
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="30000"
                                            checked={selectedAmount === '30000'}
                                            onChange={() => setSelectedAmount('30000')}
                                        />
                                        30 000 грн
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="45000"
                                            checked={selectedAmount === '45000'}
                                            onChange={() => setSelectedAmount('45000')}
                                        />
                                        45 000 грн
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="90000"
                                            checked={selectedAmount === '90000'}
                                            onChange={() => setSelectedAmount('90000')}
                                        />
                                        90 000 грн
                                    </label>
                                </div>
                            </>)}

                            <input className="button-submit" type="submit" value="Перейти к оплате"/>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalPay;
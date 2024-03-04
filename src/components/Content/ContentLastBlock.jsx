import React, {useState} from 'react';
import '../../Styles/ContentLastBlock.css'
import '../../Styles/content.css'
import emblem  from '../../assets/emblem.png'
import Buttonreg from "../../assets/Buttonreg";
import ModalPay from "../modal/ModalPay";
const ContentLastBlock = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [renderChoise, setRenderChoise] = useState(false)

    const openpay = () => {
        setShowModal(true)
    }
    const openpayChoise = () => {
        setShowModal(true)
        setRenderChoise(true)
    }

    return (
        <div className="absolute">
            <div className="content lastblock" id={`content${props.contentid}`}>
                <ModalPay showModal={showModal} setShowModal={setShowModal} renderChoise={renderChoise}/>
                <div className="scrolldiv"></div>
                <div className="contentblock"></div>
                <div className="lastblock_content">
                    <div className="lastblock_info">
                        <img src={emblem} alt="emblem" className="lastblock_img silver"></img>
                        <h2 className="lastblock_h2">
                            I ступень
                        </h2>

                        <p className="lastblock_p">
                            «Пробное» участие в первой ступени с возможностью перехода на следующие.
                        </p>

                        <div className="lastblock_cost">
                            <p className="lastblock_p">
                                <b>Стоимость:</b>
                            </p>
                            <p className="lastblock_p">
                                11 000 грн
                            </p>
                        </div>
                        <div className="lastblock_cost">
                            <p className="lastblock_p">
                                <b>По ежемесечной подписке:</b>
                            </p>
                            <p className="lastblock_p">
                                5 500* грн/месяц
                            </p>
                        </div>
                        <div className="reg">
                            <Buttonreg
                                silver={true}
                                reg={openpay}
                                translations={{
                                    en: 'Приобрести запись',
                                    ru: 'Приобрести по подписке',
                                    uk: 'Приобрести запись',
                                }}
                            />
                        </div>
                        <p className="lastblock_ps">
                            При переходе на следующую ступень общая стоимость курса не меняется, а подписка становится 5
                            000 грн/месяц минус добавленная стоимость (1000 грн) )за I ступень — никаких переплат.
                        </p>
                    </div>

                    <div className="lastblock_info">
                        <img src={emblem} alt="emblem" className="lastblock_img"></img>
                        <h2 className="lastblock_h2">
                            Весь курс
                        </h2>

                        <p className="lastblock_p">
                            Все три ступени курса. Большое путешествие, в которое нужно отправиться осознанно.
                        </p>

                        <div className="lastblock_cost">
                            <p className="lastblock_p">
                                <b>Стоимость:</b>
                            </p>
                            <p className="lastblock_p">
                                90 000 грн
                            </p>
                        </div>
                        <div className="lastblock_cost">
                            <p className="lastblock_p">
                                <b>По ежемесечной подписке:</b>
                            </p>
                            <p className="lastblock_p">
                                5 000 грн/месяц
                            </p>
                        </div>
                        <div className="reg">
                            <Buttonreg
                                reg={openpay}
                                translations={{
                                    en: 'Приобрести запись',
                                    ru: 'Приобрести по подписке',
                                    uk: 'Приобрести запись',
                                }}
                            />
                        </div>
                        <p className="lastblock_alt" onClick={openpayChoise}>
                            или Внести другую сумму
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContentLastBlock;
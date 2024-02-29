import React, {useContext} from 'react';
import '../../Styles/ContentLastBlock.css'
import '../../Styles/content.css'
import emblem  from '../../assets/emblem.png'
import ModalContext from "../FormPay/ModalContext";
import Buttonreg from "../../assets/Buttonreg";
const ContentLastBlock = (props) => {

    const { setShowModal } = useContext(ModalContext);

    return (
        <div className="absolute">
            <div className="content lastblock" id={`content${props.contentid}`}>
                <div className="scrolldiv"></div>
                <div className="contentblock"></div>
                    {/*<img src={bg} alt="background" className="lastblock_bg"/>*/}
                <div className="lastblock_info">
                    <img src={emblem} alt="emblem" className="lastblock_img"></img>
                    <h2 className="lastblock_h2">
                        Астрологическая практика-упая
                        «SPA ДЛЯ ДУШИ»
                    </h2>

                    <p className="lastblock_p">
                        42 дня погружения в процесс раскрытия благоприятнейших для вас возможностей
                    </p>

                        <div className="lastblock_cost">
                            <p className="lastblock_p">
                                <b>Стоимость:</b>
                            </p>
                            <p className="lastblock_p">
                                12 000 грн/300 €*
                            </p>
                        </div>
                    <div className="reg">
                        <Buttonreg
                            reg={() => setShowModal(true)}
                            translations={{
                                en: 'Приобрести запись',
                                ru: 'Принять участие',
                                uk: 'Приобрести запись',
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ContentLastBlock;
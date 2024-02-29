import React, {useContext, useEffect} from 'react';
import Container from "../Container";
import ContentFeedBack from "../Content/ContentFeedBack";
import Contentinline from "../Content/Contentinline";
import ContentBlockVebinar from "../Content/ContentBlockVebinar";
import ContentLastBlock from "../Content/ContentLastBlock";
import AdaptiveTag from "../Content/AdaptiveTag";
import Buttonreg from "../../assets/Buttonreg";
import ModalContext from "../FormPay/ModalContext";

export const Frame4 = (props) => {
    const { setShowModal } = useContext(ModalContext);
    useEffect(() => {
        }, [props.animating, props.currentframe]
    )
    return (
        <Container
            containerid="4">

            <Contentinline
                contentid="10"
                animating = {props.animating}
                currentframe = {props.currentframe}
                />

            <ContentBlockVebinar contentid="11">
                <div className="contentblock">
                    <div className="vebinar_block">
                        <AdaptiveTag
                            tag="h2"
                            translations={{
                                en: 'Материалы, которые вы получите',
                                ru: 'Кому подходит курс?',
                                uk: 'Материалы, которые вы получите',
                            }}
                            className="vebinar_title_inblock"
                        />

                        <AdaptiveTag
                            tag="h4"
                            translations={{
                                en: "",
                                ru: <b>Тем, кто желает расширить свои знания в астрологии и ведической философии и:</b>,
                                uk: ""
                            }}
                            className="vebinar_block_h4"
                        />
                        <AdaptiveTag
                            tag="ul"
                            translations={{
                                en: '',
                                ru: (
                                    <>
                                        <li className="vebinar_block_li">
                                            Уже прошел другие обучения по астрологии, но пазлы не сложились,
                                            «информация» не запомнилась, консультировать так и не начали
                                        </li>

                                        <li className="vebinar_block_li">
                                            Хочет помогать людям
                                        </li>

                                        <li className="vebinar_block_li">
                                            Интересуется психологией и философией, так как эти науки являются
                                            неотъемлемой частью джйотиш
                                        </li>

                                        <li className="vebinar_block_li">
                                            Хочет иметь дополнительный инструмент для работы с людьми (психология, йога,
                                            нутрициология, целительство, родология, найм сотрудников)
                                        </li>

                                    </>
                                ),
                                uk: ''
                            }}
                            className=""
                        />
                        <AdaptiveTag
                            tag="h4"
                            translations={{
                                en: "",
                                ru: <b>Тем, кто заботится о благополучии близких:</b>,
                                uk: ""
                            }}
                            className="vebinar_block_h4"
                        />
                        <AdaptiveTag
                            tag="ul"
                            translations={{
                                en: '',
                                ru: (
                                    <>
                                        <li className="vebinar_block_li">
                                            Родителям, чтобы лучше понимать своих детей и заботиться об их будущем
                                        </li>

                                        <li className="vebinar_block_li">
                                            Всем женщинам, так как они создают атмосферу в доме. Когда женщина знает
                                            положительные и сложные периоды у мужа, детей, она понимает как и чем
                                            помочь, как поддержать благожелательную атмосферу в семье. Когда в семье
                                            хоть у одного члена семьи сложный астрологический период, параллельно у всех
                                            в это же время идут сложные трансформации, период
                                        </li>
                                    </>
                                ),
                                uk: ''
                            }}
                            className=""
                        />
                        <AdaptiveTag
                            tag="h4"
                            translations={{
                                en: "",
                                ru: <b>Тем, кто желает расширить свои знания в астрологии и ведической философии и:</b>,
                                uk: ""
                            }}
                            className="vebinar_block_h4"
                        />
                        <AdaptiveTag
                            tag="ul"
                            translations={{
                                en: '',
                                ru: (
                                    <>
                                        <li className="vebinar_block_li">
                                            Уже прошел другие обучения по астрологии, но пазлы не сложились,
                                            «информация» не запомнилась, консультировать так и не начали
                                        </li>

                                        <li className="vebinar_block_li">
                                            Хочет помогать людям
                                        </li>

                                        <li className="vebinar_block_li">
                                            Интересуется психологией и философией, так как эти науки являются
                                            неотъемлемой частью джйотиш
                                        </li>

                                        <li className="vebinar_block_li">
                                            Хочет иметь дополнительный инструмент для работы с людьми (психология, йога,
                                            нутрициология, целительство, родология, найм сотрудников)
                                        </li>

                                    </>
                                ),
                                uk: ''
                            }}
                            className=""
                        />
                        <AdaptiveTag
                            tag="h4"
                            translations={{
                                en: "",
                                ru: <b>Бизнесменам, чтобы быть под защитой от «санкций» негативной кармы, приумножать
                                    прибыль</b>,
                                uk: ""
                            }}
                            className="vebinar_block_h4"
                        />
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
            </ContentBlockVebinar>

            <ContentFeedBack
                contentid="12"
            />

        </Container>


    );
};
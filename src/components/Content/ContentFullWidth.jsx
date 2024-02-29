import React, {useContext} from 'react';
import '../../Styles/ContentFullWidth.css';
import '../../Styles/content.css'
import ModalContext from "../FormPay/ModalContext";
import img1 from '../../assets/bg-fullwidth-pic-1.webp'
import img2 from '../../assets/bg-fullwidth-pic-2.webp'
import img3 from '../../assets/bg-fullwidth-pic-3.svg'
import Buttonreg from "../../assets/Buttonreg";
const ContentFullWidth = (props) => {
    const { setShowModal } = useContext(ModalContext);
    return (
        <div className="absolute">

            <div className="content fullwidthcontent" id={`content${props.contentid}`}>
                <div className="scrolldiv fullwidthscroll" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                        <img src={img1} alt={"fullwidthbg"} id="bg-fullwidth-image-1"/>
                        <img src={img2} alt={"fullwidthbg"}  id="bg-fullwidth-image-2"/>
                        <div className="saveanimation">
                            <img src={img3} id="bg-fullwidth-image-3"/>
                        </div>
                        <div className="frame8_block">
                            <div className="frame8_block_row1">
                                <img src={props.photo} alt="Nasti Shackti" className="frame8_block_img"/>
                                <div className="frame8_block_about">
                                    <h1 className="frame8_block_h1">Анастасия Шакти</h1>
                                    <p className="frame8_block_row1_p">
                                        Специалист в ведической астрологии и васту, восточный психолог, проводник. Автор и ведущая практических онлайн ретритов, практик по улучшению гороскопа: жизни, исцеления судьбы, раскрытия мудрости, духовной силы, удачи. Целитель вечного — Души.
                                    </p>
                                </div>
                            </div>
                            <div className="frame8_block_row2">
                                <div className="frame8_block_row2_block">
                                    <h2 className="frame8_block_row2_h2">Проводник в сакральные знания и практики
                                        по:</h2>
                                    <ul className="frame8_block_row2_ul">
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">самоосвобождению от паттернов,
                                                программ,
                                                препятствующих счастью в жизни и отношениях</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">выходу на более высокий уровень
                                                жизни,
                                                комфорта, внутренней целостности и гармонии</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">разрешению сложных жизненных
                                                ситуаций</h5>
                                        </li>
                                    </ul>
                                        <h2 className="frame8_block_row2_h2">Врожденные способности:</h2>
                                        <p className="frame8_block_row2_p">
                                            — считывать информацию, судьбу на расстоянии <br/>
                                            — исцелять через голос, своё поле
                                        </p>
                                </div>
                                <div className="frame8_block_row2_block golden">
                                    <h2 className="frame8_block_row2_h2">Анастасия о своём пути</h2>
                                    <h3 className="frame8_block_row2_h3">Прошла свой путь становления с опорой на Бога и духовные знания.</h3>
                                    <p className="frame8_block_row2_p">
                                        От найма и долгов
                                        до стабильно растущего благосостояния и полного раскрытия своего предназначения <br/><br/>
                                        От 18-тилетнего становления женщины в личных отношениях от развода, гражданского брака и расставания длиною 7 лет до возобновления и восстановления отношений и заключения официального семейного союза<br/><br/>
                                        От момента, когда осталась одна с грудничком и первоклассником на несколько лет без поддержки мужа, до осознанного материнства и передачи своего опыта, как быть в ресурсных состояниях матери, несмотря на трудности и вызовы судьбы<br/><br/>
                                        От потерь, ограничений, утрат, в том числе 19-ти летних, долгих страданий младшей сестры Татьяны и ее ухода в 27-летнем возрасте. Сестра была главным стимулом в поиске ответов на мучительные вопросы с раннего детства, чтобы помочь и облегчить её страдания
                                        до нахождения ответов на все вопросы и осознания Высшего Замысла происходящего в жизни, раскрытия своих врождённых способностей целителя, помощи себе и далее другим людям
                                    </p>
                                </div>
                            </div>
                            <div className="frame8_block_row3">
                                <div className="frame8_block_row3_container">
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">14 лет</h5>
                                        <p className="frame8_block_row3_block_p">в практике восточных наук (с 2009
                                            года)</p>
                                    </div>
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">более 30</h5>
                                        <p className="frame8_block_row3_block_p">исцеляющих судьбы ретритов с 2020
                                            г.</p>
                                    </div>
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">с 2017 года</h5>
                                        <p className="frame8_block_row3_block_p">духовная инициация в ведической
                                            традиции</p>
                                    </div>
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">более 2000</h5>
                                        <p className="frame8_block_row3_block_p">консультаций</p>
                                    </div>
                                    <div className="frame8_block_row3_block_full">
                                        <h2 className="frame8_block_row3_block_full_h3">создала международную школу астрологии</h2>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentFullWidth;
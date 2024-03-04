import React, {useEffect} from 'react';
import '../../Styles/ContentPhoneBorderInfo.css'
import '../../Styles/content.css'
import '../../Styles/ContentInline.css'
import point from '../../assets/point.svg'

const Contentinline = (props) => {

    useEffect(() => {
        const mainFrame = document.getElementById(`content${props.contentid}`);
        const scroll = mainFrame.querySelector(".scrolldiv");


        function handleHorizontalScroll(e) {
            if (window.innerWidth < 320 || window.innerWidth > 960) {
                if (!props.animating && props.currentframe.id === "content10") {
                    let scrollAmount = 0;
                    const slideTimer = setInterval(function(){
                        scroll.scrollLeft += e.deltaY / 20;
                        scrollAmount += 10;
                        if(scrollAmount >= 100){
                            window.clearInterval(slideTimer);
                        }
                    }, 10);
                }
            }
        }

        // Проверка ширины окна
        if (window.innerWidth < 320 || window.innerWidth > 960) {
            document.addEventListener('wheel', handleHorizontalScroll);
        }

        return () => {
            document.removeEventListener('wheel', handleHorizontalScroll);
        };
    }, [props.contentid, props.animating, props.currentframe]);


    return (
        <div className="absolute">
            <div className="content inlinecontent" id={`content${props.contentid}`}>
                <div className="contentblock horizonral">
                    <div className="frame5_block inlineframe">
                        <h4 className="frame5_block_h4">
                            Пункты назначения курса Джйотиш:
                        </h4>
                            <div className="scrolldiv horizontal" id={`scroll${props.contentid}`}>
                            <div className="inline_listblock">

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Улучшение всех жизненных сфер уже во время курса</h5>
                                    <p className="inline_p">Изучая планеты, вы гармонизируете их в своем гороскопе, что в свою очередь откроет перед вами новые благоприятные возможности, расширит удачу и процветание</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Улучшение отношений с мужем/женой и детьми</h5>
                                    <p className="inline_p">Зная все ваши «планеты преткновения», познавая мудрость Вед через изучение джйотиш, вы сможете свести к минимуму все конфликты и недопонимания</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Улучшение эмоционального и гормонального здоровья</h5>
                                    <p className="inline_p">Изучение джйотиш улучшит вашу Луну в гороскопе и превратит ваши перепады настроения, разбитость, страхи, тревожность, излишнюю впечатлительность и сентиментальность в спокойствие, баланс, ясность, энергию, а также усилит вашу интуицию</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Духовное самосовершенствование</h5>
                                    <p className="inline_p">Познавая законы мироздания, постигая природу Бога и души, а также циклы рождений и смертей, вы продвинетесь к осмыслению и осуществлению главной миссии человеческой жизни</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Выход за рамки предопределенностей судьбы</h5>
                                    <p className="inline_p">На курсе вы получите навык не только чтения гороскопа, но и смягчения негативных предопределенностей в судьбе, усиления положительных событий в жизни</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Профессия с правом консультировать</h5>
                                    <p className="inline_p">Получив обширный багаж глубоких знаний, вы обретёте дополнительный инструмент или новую профессию уже к концу курса</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contentinline;
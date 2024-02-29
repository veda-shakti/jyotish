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
                            Пункты назначения
                            «SPA для души»:
                        </h4>
                            <div className="scrolldiv horizontal" id={`scroll${props.contentid}`}>
                            <div className="inline_listblock">

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Расширение Финансового Потока</h5>
                                    <p className="inline_p">Процветание и прирост финансов за счёт подключения к источникам благосостояния</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Улучшение Жизненных Сфер</h5>
                                    <p className="inline_p">Планируйте и реализуйте действия для карьерного прорыва и инвестиций.</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Гармонизация Чакр</h5>
                                    <p className="inline_p">Освобождение потенциала Свадхистаны (заблокирована у большинства, особенно у женщин) и Мантипуры для улучшения эмоционального состояния и финансового благополучия</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Управление Ресурсами</h5>
                                    <p className="inline_p">С конца весны не выгорать от усталости на работе для большего заработка, идти структурно, ресурсно, накапливать деньги и правильно их распределять</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Коммуникация с Влиятельными Людьми</h5>
                                    <p className="inline_p">Улучшенный Юпитер обеспечивает возможности для взаимодействия с влиятельными личностями и расширения деятельности</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Духовное Наследие</h5>
                                    <p className="inline_p">Передача потомкам знаний о Боге, духовных знаний, что способствует развитию благочестия в семье</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Улучшение судьбы</h5>
                                    <p className="inline_p">Фокусировка на истинных ценностях, благодаря чему меняется в лучшую сторону настоящее, будущее в этом и следующем воплощении</p>
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
import React, {useEffect, useState} from 'react';
import '../Styles/background.css';
import telegram from '../assets/telegram_social.svg'
import insta from '../assets/insta_social.svg'
import bgimage11 from '../assets/bg-pic-1-1.webp'
import bgimage21 from '../assets/bg-pic-2-2.webp'
import bgimage31 from '../assets/bg-pic-3-1.webp'
import bgimage42 from '../assets/bg-pic-4-1.webp'
import bgimage41 from '../assets/bg-pic-4-2.webp'
import bgimage52 from '../assets/bg-pic-5-1.webp'
import bgimage51 from '../assets/bg-pic-5-2.webp'


// import {FacebookPixel, YandexMetrica} from "./Included/Metrics";

const BackgroundBox = (props) => {

    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);
    const [bgtype, setBgtype] = useState('bg-img-1');
    const [bgImage1, setBgImage1] = useState(null);
    const [bgImage2, setBgImage2] = useState(null);
    const openInstagram = () => {
        window.open("https://www.instagram.com/anastasiyashakti", "_blank");
    };
    const openTelegram = () => {
        window.open("https://t.me/anastasiyashakti_astrolog", "_blank");
    };

    useEffect(() => {
        setClose(true);
        if (props.bgtype !== "")
        setTimeout(() => {
            setClose(false);
            setOpen(true);
            setBgtype(props.bgtype)
            if (props.bgtype === "bg-img-1") {
                setBgImage1(bgimage11);
                setBgImage2("")
            }
            if (props.bgtype === "bg-img-2") {
                setBgImage1(bgimage21);
                setBgImage2("")
            }
            if (props.bgtype === "bg-img-3") {
                setBgImage1(bgimage31);
                setBgImage2("")
            }
            if (props.bgtype === "bg-img-4") {
                setBgImage1(bgimage41);
                setBgImage2(bgimage42)
            }
            if (props.bgtype === "bg-img-5") {
                setBgImage1(bgimage51);
                setBgImage2(bgimage52)
            }
        },800)
        else {
            setTimeout(() => {
                setClose(false)
                setOpen(true)
                setBgtype(props.bgtype)
                setBgImage1('');
                setBgImage2('')
            }, 500)
        }
    }, [props.bgtype]); // Массив зависимостей для контроля, когда эффект выполняется


    return (
        <div className={`box ${props.bg}`} id={`box1`}>
            <img src={props.bgimg} id="bg-effect" alt={"backgroundeffect"}/>
            <div className={`${close ? 'closing' : open ? 'opening' : ''} left1 ${bgtype}` }>
                <img className={`${bgtype}`} src={bgImage1}
                      id="bg-image-1" alt={"beautiful"}/>
            </div>

            <div className={`${close ? 'closing' : open ? 'opening' : ''} right1 ${bgtype} `}>
                <img className={`${bgtype}`} src={bgImage2}
                     id="bg-image-2" alt={"beautiful"}/>
            </div>

            <div className={`${close ? 'closing' : open ? 'opening' : ''} right2 ${bgtype}`}>
                <img className={`${bgtype} ${close ? 'closing' : open ? 'opening' : ''}`} src={bgImage1}
                     id="bg-image-3" alt={"beautiful"}/>
            </div>

            <div className={`${close ? 'closing' : open ? 'opening' : ''} left2 ${bgtype}`}>
                <img className={`${bgtype} ${close ? 'closing' : open ? 'opening' : ''}`} src={bgImage2}
                     id="bg-image-4" alt={"beautiful"}/>
            </div>

            {props.children}
            <div className="SocialButtons">
                <img alt="instagram" className="mediabutton" src= {insta} onClick={openInstagram} />
                <img alt="telegram" className="mediabutton" src= {telegram} onClick={openTelegram} />
            </div>

            {}

            <footer id="footer">
                <div className="column">
                    <a href="./src/assets/ofert_doc_ua.pdf">Договор-оферты</a>
                </div>
                <div className="column column2">
                    <a href="https://www.instagram.com/p/CWn2xYYscg_/">@ANASTASIASHAKTI</a>
                </div>
            </footer>
        </div>
    )
};

export default BackgroundBox;
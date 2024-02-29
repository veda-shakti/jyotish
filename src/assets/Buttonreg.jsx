import React, {useContext} from 'react';
import AdaptiveTag from "../components/Content/AdaptiveTag";
import LanguageContext from "../components/LanguageContext";
import buttonimg from "./button_reg.png"
import cl from "./regButton.module.css"


const Buttonreg = ({translations, reg}) => {
    const  {language}  = useContext(LanguageContext);
    return (
        <button className={cl.reg} onClick={reg}><b className={cl.text}>{translations[language]}</b><div className={cl.circle}/><img alt="Записаться"
                                                                                    className={cl.image}
                                                                                    src={buttonimg}/>
        </button>
    );
};

export default Buttonreg;
import React, {useContext} from 'react';
import LanguageContext from "../components/LanguageContext";
import buttonimg from "./button_reg.png"
import cl from "./regButton.module.css"


const Buttonreg = ({translations, reg, silver=false}) => {
    const  {language}  = useContext(LanguageContext);
    return (
        <button className={cl.reg} onClick={reg}><b className={cl.text}>{translations[language]}</b><div className={cl.circle}/><img alt="Записаться"
                                                                                    className={`${cl.image} ${silver ? "silver" : ""}`}
                                                                                    src={buttonimg}/>
        </button>
    );
};

export default Buttonreg;
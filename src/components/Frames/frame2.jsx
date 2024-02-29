import ContentPhoneborderinfo from "../Content/ContentPhoneborderinfo";
import React, {useContext} from "react";
import ContentIntroPhone from "../Content/ContentIntroPhone";
import ContentPhoneMainInfo from "../Content/ContentPhoneMainInfo";
import emblem  from '../../assets/emblem.png'
import '../../Styles/content.css'
import Container from "../Container";
import AdaptiveTag from "../Content/AdaptiveTag";
import ModalContext from "../FormPay/ModalContext";
import Buttonreg from "../../assets/Buttonreg";
import ContentBlockVebinar from "../Content/ContentBlockVebinar";
export const Frame2 = () => {
    const { setShowModal } = useContext(ModalContext);
    return (
        <div>
            <Container containerid="2">
                <ContentIntroPhone
                    contentid="2"
                    imgSrc={emblem}
                    info={[
                        <div className="frame2_block_info_item">
                            <AdaptiveTag
                                tag="span"
                                translations={{
                                    en: 'защита',
                                    ru: 'Формат',
                                    uk: 'защита',
                                }}
                                className="frame2_block_info_title"
                            />
                            <AdaptiveTag
                                tag="span"
                                translations={{
                                    en: 'защита',
                                    ru: 'Живые онлайн-уроки',
                                    uk: 'защита',
                                }}
                                className="frame2_block_info_description"
                            />
                        </div>,
                        <div  className="frame2_block_info_item">
                            <AdaptiveTag
                                tag="span"
                                translations={{
                                    en: 'защита',
                                    ru: 'Длительность',
                                    uk: 'защита',
                                }}
                                className="frame2_block_info_title"
                            />
                            <AdaptiveTag
                                tag="span"
                                translations={{
                                    en: 'защита',
                                    ru: '18 месяцев',
                                    uk: 'защита',
                                }}
                                className="frame2_block_info_description"
                            />
                        </div>,
                        <div className="frame2_block_info_item">
                            <AdaptiveTag
                                tag="span"
                                translations={{
                                    en: 'защита',
                                    ru: 'Срок обучения',
                                    uk: 'защита',
                                }}
                                className="frame2_block_info_title"
                            />
                            <AdaptiveTag
                                tag="span"
                                translations={{
                                    en: 'защита',
                                    ru: '16.03.2024 – 28.09.2025',
                                    uk: 'защита',
                                }}
                                className="frame2_block_info_description"
                            />
                        </div>
                    ]}
                    title={<AdaptiveTag
                        tag="h1"
                        translations={{
                            en: 'Подробный Астропрогноз \n' +
                                'на 2024 год',
                            ru: <>Курс Джйотиш. <br/>
                                Законы Вселенной — выход за рамки судьбы</>,
                            uk: 'Подробный Астропрогноз \n' +
                                'на 2024 год',
                        }}
                        className="frame2_block_h1"
                    />}
                    description={<AdaptiveTag
                        tag="p"
                        translations={{
                            en: 'Получите ключи к реализации планов во всех сферах жизни',
                            ru: 'С возможностью получить профессию «Джйотиш астролог» с правом консультирования. Станьте кармологом для себя и своих близких',
                            uk: 'Получите ключи к реализации планов во всех сферах жизни',
                        }}
                        className="frame2_block_p"
                    />}
                    button={<Buttonreg
                        reg={() => setShowModal(true)}
                        translations={{
                            en: 'Приобрести запись',
                            ru: 'Принять участие',
                            uk: 'Приобрести запись',
                        }}
                    />}
                    tags={[<AdaptiveTag
                        tag="span"
                        translations={{
                            en: 'защита',
                            ru: 'йога сознания',
                            uk: 'защита',
                        }}
                        className=""
                    />, "мудрость", "улучшение судьбы"]}
                />

                <ContentPhoneMainInfo
                    contentid="3"
                    title={<AdaptiveTag
                        tag="h2"
                        translations={{
                            en: 'Подробный Астропрогноз —',
                            ru: 'Джйотиш —',
                            uk: 'Подробный Астропрогноз —',
                        }}
                        className="frame3_block_h2"
                    />}
                description={<AdaptiveTag
                        tag="p"
                        translations={{
                            en: 'Подробный Астропрогноз \n' +
                                'на 2024 год',
                            ru: <>или ведическая астрология, переводится как «свет знаний». Эта уникальная наука возникла около 3000 лет до нашей эры на основе священных текстов, составленных семью мудрецами. Знания передавались из поколения в поколение и свято хранились в манускриптах. <br/><br/>
                            Джйотиш — это не только возвышенная наука, но и очень практичная, которую легко применить в повседневной жизни для решения различных ситуаций. Джйотиш помогает нам <u>найти свой истинный путь</u>, <u>быть в гармонии с собой</u> и <u>понимать, как правильно прожить жизнь, чтобы все вокруг нас складывалось благополучно</u>. Благодаря джйотиш мы можем узнать больше о себе и приблизиться к Богу.</>,
                            uk: 'Подробный Астропрогноз' +
                                'на 2024 год',
                        }}
                        className="frame3_block_p"
                    />}/>

                <ContentPhoneMainInfo
                    contentid="4"
                    description={<AdaptiveTag
                        tag="p"
                        translations={{
                            en: 'Подробный Астропрогноз \n' +
                                'на 2024 год',
                            ru: 'Джйотиш расширяет наше сознание, меняет наше мышление и восприятие мира, тем самым открывая перед нами огромное количество новых возможностей в жизни. Она учит нас руководствоваться не только своим личным и родительским опытом, но и принимать решения на основе кармической грамотности — это основы Джйотиш.',
                            uk: 'Подробный Астропрогноз' +
                                'на 2024 год',
                        }}
                        className="frame3_block_p"
                    />}/>



                <ContentPhoneMainInfo
                    contentid="5"
                    title={<AdaptiveTag
                        tag="h2"
                        translations={{
                            en: 'Подробный Астропрогноз —',
                            ru: 'Почему джйотиш помогает людям?',
                            uk: 'Подробный Астропрогноз —',
                        }}
                        className="frame3_block_h2"
                    />}
                    description={<AdaptiveTag
                        tag="span"
                        translations={{
                            en: <span><strong>Дело начатое в правильное время — 50% успеха!</strong>
                                <ul>
                                    <li>Получите наилучшие из возможных результатов в 2024 году через соединение благоприятных дат, возможностей личного гороскопа и практик активации удачи</li>
                                    <li>Проживите год не вкладывая ресурсы в заведомо неудачные дела, начатые в неблагоприятное время</li>
                                    <li>Не будет эмоционального спада, растерянности из-за неизвестности в 2024 году</li>
                                    <li>При подведении итогов в конце года не будете жалеть о поступках или упущенных возможностях</li>
                                </ul>
                            </span>,
                            ru: <>Особенностью джйотиш является то, что она предлагает уникальные методы гармонизации и смягчения влияния негативных планет и глобальных сил жизни на нашу судьбу. Одним из таких методов являются упайи, которые помогают нам преодолеть препятствия и обрести внутреннюю гармонию.<br/><br/>Джйотиш — единственная астрология, которая объединяет в себе мудрость и практичность, помогает нам жить счастливо и гармонично.</>,
                            uk: <span><strong>Дело начатое в правильное время — 50% успеха!</strong>
                                <ul>
                                    <li>Получите наилучшие из возможных результатов в 2024 году через соединение благоприятных дат, возможностей личного гороскопа и практик активации удачи</li>
                                    <li>Проживите год не вкладывая ресурсы в заведомо неудачные дела, начатые в неблагоприятное время</li>
                                    <li>Не будет эмоционального спада, растерянности из-за неизвестности в 2024 году</li>
                                    <li>При подведении итогов в конце года не будете жалеть о поступках или упущенных возможностях</li>
                                </ul>
                            </span>
                        }}
                        className="frame3_block_p"
                    />}
                />

                <ContentBlockVebinar contentid="6">
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
                                                        Уже прошел другие обучения по астрологии, но пазлы не сложились, «информация» не запомнилась, консультировать так и не начали
                                                    </li>

                                                    <li className="vebinar_block_li">
                                                        Хочет помогать людям
                                                    </li>

                                                    <li className="vebinar_block_li">
                                                        Интересуется психологией и философией, так как эти науки являются неотъемлемой частью джйотиш
                                                    </li>

                                                    <li className="vebinar_block_li">
                                                        Хочет иметь дополнительный инструмент для работы с людьми (психология, йога, нутрициология, целительство, родология, найм сотрудников)
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
                                                        Всем женщинам, так как они создают атмосферу в доме. Когда женщина знает положительные и сложные периоды у мужа, детей, она понимает как и чем помочь, как поддержать благожелательную атмосферу в семье. Когда в семье хоть у одного члена семьи сложный астрологический период, параллельно у всех в это же время идут сложные трансформации, период
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
                                                        Уже прошел другие обучения по астрологии, но пазлы не сложились, «информация» не запомнилась, консультировать так и не начали
                                                    </li>

                                                    <li className="vebinar_block_li">
                                                        Хочет помогать людям
                                                    </li>

                                                    <li className="vebinar_block_li">
                                                        Интересуется психологией и философией, так как эти науки являются неотъемлемой частью джйотиш
                                                    </li>

                                                    <li className="vebinar_block_li">
                                                        Хочет иметь дополнительный инструмент для работы с людьми (психология, йога, нутрициология, целительство, родология, найм сотрудников)
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
                                            ru: <b>Бизнесменам, чтобы быть под защитой от «санкций» негативной кармы, приумножать прибыль</b>,
                                            uk: ""
                                        }}
                                        className="vebinar_block_h4"
                                    />
                                </div>
                            </div>
                </ContentBlockVebinar>

                <ContentPhoneborderinfo
                    contentid="7"
                    title="И если вы хотите:"
                    items={[
                        <AdaptiveTag
                            tag="span"
                            translations={{
                                en: 'Быть защищенным эмоционально зная тенденции года и знака зодиака',
                                ru: 'Понять почему в вашей жизни происходят те или иные события и когда они закончатся',
                                uk: 'Быть защищенным эмоционально зная тенденции года и знака зодиака',
                            }}
                            className=""
                        />,
                        <AdaptiveTag
                            tag="span"
                            translations={{
                                en: 'Прожить год спокойнее и стабильнее',
                                ru: 'Понять механизмы законов кармы и вселенной',
                                uk: 'Прожить год спокойнее и стабильнее',
                            }}
                            className=""
                        />,
                        <AdaptiveTag
                            tag="span"
                            translations={{
                                en: 'Осуществить свои планы, цели и намерения на год c большей вероятностью',
                                ru: 'Защитить своих детей от проблем и ошибок, которые можно было бы избежать',
                                uk: 'Осуществить свои планы, цели и намерения на год c большей вероятностью',
                            }}
                            className=""
                        />,
                        <AdaptiveTag
                            tag="span"
                            translations={{
                                en: 'Защитить дом с помощью духовных техник и практик',
                                ru: 'Лучше познать себя, определить свои цели, задачи, способности и предназначение',
                                uk: 'Защитить дом с помощью духовных техник и практик',
                            }}
                            className=""
                        />,
                        "Уйти от хаоса в голове, во вне, в жизни",
                        "Чтобы планируемое вами чаще  воплощалось в жизнь",
                        "Понять духовные, нерушимые законы успеха",
                    ]}
                />

                <ContentPhoneMainInfo
                    contentid="8"
                    title={<h4 className="frame3_block_h4">Вам необходим тот, кто проведёт вас к мудрости...</h4>}
                    unbg={true}
                />
            </Container>
        </div>
    )
}
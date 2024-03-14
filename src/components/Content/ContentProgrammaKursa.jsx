import React, {useContext} from 'react';
import '../../Styles/ContentProgrammaKursa.css'
import lotus from '../../assets/lotos-programma.svg'
import ModalContext from "../modal/ModalContext1";
import kurs from '../../assets/Программа Курс Джйотиш.pdf';


const ContentProgrammaKursa = (props) => {
    const { setShowModal, setKursModal } = useContext(ModalContext);

    const downloadKurs = () => {
        const link = document.createElement('a');
        // Устанавливаем URL файла
        link.href = kurs;
        // Указываем, что файл должен быть скачан
        link.download = 'kurs_Jyotish.pdf';
        // Имитируем клик по ссылке
        link.click();
        // Очищаем память, удаляя созданный элемент
        link.remove();
    }

    const showkurs = () => {
        setShowModal(true)
        setKursModal(true)
    }
    return (
        <div className="absolute">
            <div className="content contentProgramma" id={`content${props.contentid}`}>
                <div className="scrolldiv" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                        <h2 className="programma_title">Программа курса</h2>
                        <div className="programma_block programma_mini">
                            <h3 className="programma_block_title">18 месяцев</h3>
                            <p className="programma_block_content">обучения ведической астрологии</p>
                        </div>
                        <div className="programma_block programma_mini">
                            <h3 className="programma_block_title">144 часа</h3>
                            <p className="programma_block_content">живых теоретических лекций без воды</p>
                        </div>
                        <div className="programma_block programma_mini last-child">
                            <h3 className="programma_block_title">72 часа</h3>
                            <p className="programma_block_content">практики <u>на своих</u> натальных картах</p>
                        </div>
                        <div className="programma_block">
                            <h3 className="programma_block_title">Цель курса</h3>
                            <p className="programma_block_content">Научить вас выходить из ловушек негативной кармы и создавать себе положительную карму. По желанию, вы также сможете помогать другим людям в этом процессе. Вы узнаете, как смягчить негативные предопределённости в своей судьбе, усилить благоприятные моменты в жизни и ослабить кармические оковы </p>
                        </div>
                        <div className="programma_block">
                            <h4 className="programma_block_title_h4">В результате прохождения курса, вы:</h4>
                            <p className="programma_block_content">
                                — Познакомитесь с аналитической и математической астрологией, исследуя при этом свою
                                собственную натальную карту.<br/>
                                — Рассмотрите свою натальную карту с точки зрения кармы и духовных законов<br/>
                                — Изучите механизмы, с помощью которых планеты влияют на судьбу<br/>
                                — Узнаете, как возникают благоприятные или неблагоприятные предопределенности, а также
                                что можно сделать в таких случаях </p>
                        </div>
                        <div className="programma_block">
                            <h4 className="programma_block_title_h4">Расписание курса</h4>
                            <p className="programma_block_content"> Лекционные занятия будут проходить в субботу и воскресенье первой недели каждого учебного месяца. Два практических занятия к каждой теме будут проходить по субботам в течение 2–3 недель после лекционного занятия месяца.  </p>
                        </div>
                        <div className="programma_block">
                            <p className="programma_block_content">Все лекции записываются во время курса в потоковом состоянии. Идёт необходимая информация для тех, кто участвует в практике для быстрого выхода на новый уровень, исцеления гороскопа и души </p>
                        </div>

                        <div className="programma_block">
                            <h3 className="programma_block_title">I ступень*</h3>
                            <span className="programma_block_description">Месяц 1–2: Законы и принципы джйотиш, кармы. Космология, натальная карта, построение. Введение в планеты, знаки, дома</span>
                            <h4 className="programma_block_title_h4">В результате прохождения 1-ой ступени курса Джйотиш вы:</h4>
                            <div className="programma_block_column">
                                <div className="programma_block_col1">
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Изучите вселенские законы, изложенные в ведических текстах, это поможет вам понять жизнь, осознать её ценность и возможности</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Узнаете своё предназначение, повысите мудрость и сможете принимать правильные решения </span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Поймёте как улучшать ситуацию, в которой находитесь, правильно использовать свои таланты и возможности</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Измените вашу судьбу, когда начнёте применять знания в повседневной жизни</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Узнаете почему не всё предопределено в вашей жизни, это вдохновит вас жить осознанно и поступать правильно</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Освоите основы девяти планет и построите свою натальную карту с помощью профессиональной астрологической программы в свободном доступе</span>
                                </div>
                                <div className="programma_block_col2">
                                    <span className="programma_block_item"><img src={lotus} alt="lotus" className="programma_block_item_lotus"/>Узнаете ключевые элементы натальной карты:</span>
                                    <span className="programma_block_item">— восходящий знак и лагнеша, его управитель</span>
                                    <span className="programma_block_item">— положение лагнеши в домах гороскопа</span>
                                    <span className="programma_block_item">— стихии для понимания типа сознания и врождённых способностей</span>
                                    <span className="programma_block_item">— лунный знак и его значимость, включая влияние Луныв различных знаках зодиака как индикатора талантов и способностей из прошлых жизней, определяющего карму</span>
                                    <span className="programma_block_item">— сочетания планет с Луной</span>
                                    <span className="programma_block_item">— расположение Сатурна, указывающего на кармические задачи, страхи и комплексы, а также его значение в разных знаках зодиака. Разобравшись в этом, вы обретёте путь к победе над всеми преградами, препятствующими вашему счастью</span>
                                </div>
                            </div>

                            <div className="programma_block_info">
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Длительность</h4>
                                    <span className="programma_block_description">2 месяца</span>
                                </div>
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Количество лекций</h4>
                                    <span className="programma_block_description">4 лекции</span>
                                </div>
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Количество практик</h4>
                                    <span className="programma_block_description">4 практики</span>
                                </div>
                            </div>
                            <span className="programma_block_PS">*I ступень доступна для прохождения с целью ознакомления с курсом без обязательного прохождения II и III ступеней. Если вы хотите принять участие в I ступени курса, нажмите на кнопку ниже.</span>
                            <div className="programma_block_buttons">
                                <span onClick={downloadKurs} className="programma_block_download">Скачать подробную программу курса</span>
                                <button
                                    onClick={showkurs}
                                className="programma_block_kurs">Иду на I ступень</button>
                            </div>
                        </div>

                        <div className="programma_block">
                            <h3 className="programma_block_title">II ступень</h3>
                            <span className="programma_block_description">Месяц 3–10: Изучение планет и методов их гармонизации</span>
                            <h4 className="programma_block_title_h4">В результате прохождения 2-ой ступени курса Джйотиш вы:</h4>
                            <div className="programma_block_column">
                                <div className="programma_block_col1">
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/>Глубоко погрузитесь в законы сотворения кармы — причины мыслей, реакций (эмоций), действий и какие последствия в виде судьбы, ситуаций (положительных и отрицательных) это несёт</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/>Узнаете как и поможете себе выйти из замкнутого круга ошибок, проблем, повторяющихся ситуаций в определённой сфере, вопросе, с одним и тем же человеком</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/>Поймёте как улучшать ситуацию, в которой находитесь, правильно использовать свои таланты и возможности</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/>Изучите циклы времени, божественный порядок, циклы вселенной, силы мироздания (планеты) для понимания механизмов достижения успеха в любой сфере: личные отношения, семья, бизнес, карьера, здоровье</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/><b>Познаете элементы науки:</b></span>
                                    <span className="programma_block_item">— Йога сознания — йогический опыт связи, чувствования каждой планеты</span>
                                    <span className="programma_block_item">— Чакральная астрология — расположение планет по чакральной системе</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/><b>Глубоко изучите элементы, положения в натальной карте:</b></span>
                                    <span className="programma_block_item">— 9 планет гороскопа, их качества, какие препятствия и награды они дают, методы гармонизации</span>
                                </div>
                                <div className="programma_block_col2">
                                    <span className="programma_block_item">— Атмакарака — показатель желаний, задачи души на это воплощение</span>

                                    <span className="programma_block_item">— Расположение Атмакараки — через какую сферу исполните свое предназначение</span>
                                    <span className="programma_block_item">— Что и как сформировало вашу настоящую жизнь — посмотрите опыт прошлых воплощений</span>
                                    <span className="programma_block_item">— Причина страхов, которая закрывает удачу</span>
                                    <span className="programma_block_item">— Комбинации планет между собой</span>
                                    <span className="programma_block_item">— Планеты в домах гороскопа </span>
                                    <span className="programma_block_item">— Особый и нелегкий период Саде-Сати (длится 7,5 лет), который проходят все 2–4 раза за жизнь</span>
                                    <span className="programma_block_item">— Куджа доша — поражение Марса, при котором трудности с противоположным полом. Механизм влияния, нейтрализация, гармонизация</span>
                                    <span className="programma_block_item">— Классификация домов гороскопа — изучение пути достижения целей жизни и в жизни, материального комфорта, самопознания</span>
                                    <span className="programma_block_item">— Практики по чтению карт будут проходить на примере карт известных личностей и вашей карты</span>
                                    <span className="programma_block_item">— После изучения 1 и 2 ступени вы станете другим человеком — внутренне и во внешних благоприятных изменениях с вами</span>
                                </div>
                            </div>
                            <div className="programma_block_info">
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Длительность</h4>
                                    <span className="programma_block_description">8 месяцев</span>
                                </div>
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Количество лекций</h4>
                                    <span className="programma_block_description">16 лекции</span>
                                </div>
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Количество практик</h4>
                                    <span className="programma_block_description">16 практик</span>
                                </div>
                            </div>
                            <div className="programma_block_buttons">
                                <span onClick={downloadKurs} className="programma_block_download">Скачать подробную программу курса</span>
                                <button onClick={showkurs} className="programma_block_kurs">Иду на весь курс</button>
                            </div>
                        </div>

                        <div className="programma_block programma_block_last">
                            <h3 className="programma_block_title">III ступень</h3>
                            <span className="programma_block_description">
                                Месяц 11: 12 знаков зодиака, влияние планет на восходящие знаки<br/>
                                Месяц 12: 12 домов гороскопа — 12 сфер жизни<br/>
                                Месяц 13: Взаиморасположение планет, знаков, комбинации планет, нейтрализация планет в падении. Определение силы гороскопа, дома<br/>
                                Месяц 14: Ретроградность планет, методы гармонизации. Карта Навамша: желания души, таланты человека, характристики мужа или жены, отношений<br/>
                                Месяц 15: Прогнозирование, транзитная астрология<br/>
                                Месяц 16: Сила и слабость натальных планет, знаков. Накшатры — 27 лунных созвездий. Коридоры затмений<br/>
                                Месяц 17: 16 видов дробных карт. Ректификация<br/>
                                Месяц 18: Медицинская астрология. Дом проблем и планета преград, затруднений. Основы планирования</span>
                            <h4 className="programma_block_title_h4">В результате прохождения 2-ой ступени курса Джйотиш вы:</h4>
                            <div className="programma_block_column">
                                <div className="programma_block_col1">
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/>       Получите профессию Джйотиш-астролога и сможете проводить консультации для других за оплату, получив сертификат об успешном освоении программы</span>
                                    <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                                className="programma_block_item_lotus"/>       Изучите комплексный подход в коррекции гороскопа: как читать судьбу, как подбирать коррекции, как прогнозировать события</span>
                                </div>
                                <div className="programma_block_col2">
                                   <span className="programma_block_item"><img src={lotus} alt="lotus"
                                                                               className="programma_block_item_lotus"/>Отработаете теорию на практиках по натальным картам известных людей и картам учеников</span>
                                </div>
                            </div>
                            <div className="programma_block_info">
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Длительность</h4>
                                    <span className="programma_block_description">8 месяцев</span>
                                </div>
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Количество лекций</h4>
                                    <span className="programma_block_description">16 лекции</span>
                                </div>
                                <div className="programma_block_info_col">
                                    <h4 className="programma_block_title_h4">Количество практик</h4>
                                    <span className="programma_block_description">16 практик</span>
                                </div>
                            </div>
                            <div className="programma_block_buttons">
                                <span onClick={downloadKurs} className="programma_block_download">Скачать подробную программу курса</span>
                                <button onClick={showkurs} className="programma_block_kurs">Иду на весь курс</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentProgrammaKursa;
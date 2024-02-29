import React, { useEffect, useState } from 'react';
import '../../Styles/contentFeedBack.css';
import '../../Styles/content.css';

const ContentFeedBack = (props) => {
    const [reviews, setReviews] = useState([]);
    const [column1Reviews, setColumn1Reviews] = useState([]);
    const [column2Reviews, setColumn2Reviews] = useState([]);

    useEffect(() => {
        // const apiURL = 'https://godovoy-astroprognoz.anastasiyashakti.com/index.php?id=4';
        //
        // fetch(apiURL)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         setReviews(data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });

        setReviews([
                {
                    id: 1,
                    pagetitle: 'Анастасия',
                    content: 'Благодарю Анастасию за то, что стала моим наставником и учителем через ретриты и личное сопровождение! После работы с ней моя жизнь сильно изменилась! Я поменяла отношение ко многим вещам и людям. Стала спокойнее, перестала вовлекаться в конфликты, улучшила финансовое положение без устройства на дополнительную работу, наладила отношения с отцом, свёкрами.'
                },

                {
                    id: 2,
                    pagetitle: 'Алина',
                    content: 'С помощью духовности возможно стать материально успешной и обрести женское счастье! \n' +
                        '\n' +
                        'В 2021 году произошла судьбоносная встреча с Анастасией. У нее в блоге я увидела, как в повседневной жизни применять духовные знания, которые приносят материальные блага. До ретритов Анастасии уже 4 года практиковала мантры, изучала духовные знания, но все кардинальные изменения произошли здесь. Я открыла свое дело-предназначение с нуля и за год вышла на хороший доход. Встретила мужа. Я счастлива после очень сложного 20-ти летнего брака\n' +
                        'Прошли страхи, появилась ясность, виденье как поступать в тех или иных ситуациях. Решено множество вопросов и проблем.Отношения с родителями и старшим сыном  наладились.\n' +
                        '\n' +
                        'Духовные знания, путь к Богу, неизбежно приводят к счастью внутреннему и внешнему, всем материальным благам!'
                },
            {
                id: 3,
                pagetitle: 'Виктория',
                content: 'Обрела внутреннюю психологическую стабильность, вышла замуж, хотя до встречи с Анастасией не хотела замуж, детей из-за негативного семейного опыта как дочери.\n' +
                    'В работе произошел очень большой прорыв.13 лет я боялась уходить из найма. После ретрита Наваратри, несмотря на войну вокруг, ушла. Успешно работаю парикмахером-стилистом на себя уже больше года. Огромный поток клиентов, всегда полная запись.\n' +
                    'Стала более уравновешенная, спокойная, наполненная. Всегда в хорошем настроении, на людей и жизнь смотрю по-другому. \n' +
                    'Улучшились все жизненные сферы.\n' +
                    '\n' +
                    'До Анастасии искала ответы на вопросы, была и йога, и практики работы с родителями, и марафоны с другим мастером и методы самопомощи, но таких знаний и быстрых результатов не было нигде!'
            },
            ]
        )
    }, []);

    useEffect(() => {
        // Распределение отзывов по столбцам
        let tempColumn1 = [];
        let tempColumn2 = [];
        let col1Height = 0;
        let col2Height = 0;

        reviews.forEach(review => {
            if (col1Height <= col2Height) {
                tempColumn1.push(review);
                col1Height += review.content.length; // Примерный расчет высоты
            } else {
                tempColumn2.push(review);
                col2Height += review.content.length; // Примерный расчет высоты
            }
        });

        setColumn1Reviews(tempColumn1);
        setColumn2Reviews(tempColumn2);
    }, [reviews]);

    return (
        <div className="absolute">
            <div className="frame13 content" id={`content${props.contentid}`}>
                <div className="scrolldiv" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                        <div className="frame13_block">
                            <h2 className="frame13_h2">Что говорят об Астропрогнозе?</h2>
                            <div className="frame13_content">
                                <div className="containerforframe13">
                                    <div className="column" id="column1">
                                        {column1Reviews.map(review => (
                                            <div key={review.id} className="frame13_content_block">
                                                <h5 className="frame13_content_block_name">{review.pagetitle}</h5>
                                                <p className="frame13_content_block_p">{review.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="column" id="column2">
                                        {column2Reviews.map(review => (
                                            <div key={review.id} className="frame13_content_block">
                                                <h5 className="frame13_content_block_name">{review.pagetitle}</h5>
                                                <p className="frame13_content_block_p">{review.content}</p>
                                            </div>
                                        ))}
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

export default ContentFeedBack;

import ContainerIntro from "../ContainerIntro";
import ContentIntro from "../Content/ContentIntro";
import React from "react";
import AdaptiveTag from "../Content/AdaptiveTag";

export const Frame1 = () => {
    return (
            <ContainerIntro>
                <ContentIntro
                    contentid="1"
                    contentvalue= {<AdaptiveTag
                        tag="span"
                        translations={{
                            en: 'Make the right decisions at the right time!',
                            ru: 'Получите проверенный веками инструмент познания себя и законов жизни, а также выхода за рамки гороскопа',
                            uk: 'Приймайте правильні рішення в правильний час!',
                        }}
                        className=""
                    />}
                />
            </ContainerIntro>

    )
}
import React from 'react';
import Container from "../Container";
import ContentFeedBack from "../Content/ContentFeedBack";
import Contentinline from "../Content/Contentinline";
import ContentProgrammaKursa from "../Content/ContentProgrammaKursa";

export const Frame4 = (props) => {
    return (
        <Container
            containerid="4">

            <Contentinline
                contentid="10"
                animating = {props.animating}
                currentframe = {props.currentframe}
                />

            <ContentProgrammaKursa contentid="11"/>

            <ContentFeedBack
                contentid="12"
            />

        </Container>


    );
};
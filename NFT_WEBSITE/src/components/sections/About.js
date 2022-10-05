import React from "react";
import styled, { ThemeProvider } from "styled-components"
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Image from "../Image";




const Section = styled.section`
min-height: 80vh;
width: 100%;
/* Change Color of About Section Below */
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 70em){
    width: 85%;
}

@media(max-width: 64em){
    width: 100%;
    flex-direction: column;

    &<*:last-child{
        width: 80%;
    }
}

@media(max-width: 40em){

    &<*:last-child{
        width: 90%;
    }
}

`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media(max-width: 40em){
    min-height: 40vh;
}

`
const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;

    @media(max-width: 64em){
        width: 100%;
        text-align: center;
    }

    @media(max-width: 40em){
        font-size: ${(props) => props.theme.fontxl};
    }

    @media(max-width: 30em){
        font-size: ${(props) => props.theme.fontlg};
    }
`
const SubText = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight:400;
    

    @media(max-width: 64em){
        width: 100%;
        text-align: center;
        font-size: ${(props) => props.theme.fontmd};
    }

    @media(max-width: 40em){
        font-size: ${(props) => props.theme.fontmd};
    }

    @media(max-width: 30em){
        font-size: ${(props) => props.theme.fontsm};
    }
`

const ButtonContainer = styled.div`
    width:80%;
    margin: 1rem auto;
    display: flex;
    align-self: flex-start;

    @media(max-width: 64em){
        width: 80%;

        button{
            margin: 0 auto;
        }
    }
`


const About = () => {
    return(
        <Section id="about">
            <Container>
                <Box>
                    <Image />
                </Box>
                <Box>
                    <Title>
                        MEDYC COLLECTION  
                    </Title>
                    <SubText>
                        Much Exclusive Doge Yacht Club is an NFT collection created by Bryam Loaiza. This pixel art collection was created using a custom Python script which generates 2,488 unique NFTs featuring a Shiba Inu.
                    </SubText>
                    <ButtonContainer>
                        <ThemeProvider theme={dark}>
                            <a href="https://discord.com/" target="blank" rel="noopener noreferrer"><Button text="JOIN DISCORD"/></a>
                        </ThemeProvider>
                    </ButtonContainer> 
                </Box>
            </Container>
        </Section>
    )
}

export default About
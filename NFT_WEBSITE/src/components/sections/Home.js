import React from "react";
import styled from "styled-components"
import TypeWriterText from "../TypeWriterText";
import GIFContainer from "../GIFContainer";


const Section = styled.section`
min-height: ${props => `calc(90vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
/* Change Background color of Home Section*/
background-color: #ffe497;
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 64em){
    width: 85%;
}

@media(max-width: 48em){
    flex-direction: column-reverse;
    width: 100%;
    &>*:first-child{
        width: 100%;
        margin-top: 2rem;
    }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Home = () => {
    return(
        <Section id="home">
            <Container>
                <Box>
                    <TypeWriterText/>
                </Box>
                <Box>
                    <GIFContainer/>
                </Box>
            </Container>
        </Section>
    )
}

export default Home
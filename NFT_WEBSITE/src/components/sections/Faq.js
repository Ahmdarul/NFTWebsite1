import React from "react";
import styled from "styled-components"
import Accordion from "../Accordion";

const Section = styled.section`
min-height: 90vh;
height: auto;
width: 100vw;
/* Change Color of FAQ Section Below */
background-color: ${props => props.theme.text};
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.carouselColor};
width: fit-content;

@media(max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media(max-width: 64em){
    width: 80%;
}

@media(max-width: 48em){
    width: 90%;
    flex-direction: column;

    &>*:last-child{
        &>*:first-child{
            margin-top: 0;
        }
    }
}
`

const Box = styled.div`
width: 45%;

@media(max-width: 64em){
    width: 90%;
    align-self: center;
}
`

const Faq = () => {
    return(
        <Section id='faq' >
            <Title>Faq</Title>
            <Container>
                <Box>
                    <Accordion title="WHERE CAN I BUY THIS AWESOME COLLECTION?">
                        You can find us on OpenSea.
                    </Accordion>
                    <Accordion title="ON WHICH BLOCKCHAIN WAS THIS COLLECTION DEPLOYED?">
                        The collection was deployed on the Polygon blockchain.
                    </Accordion>
                </Box>
                <Box>
                <Accordion title="WHAT'S THE PRICE OF ONE MEDYC?">
                        One MEDYC costs 69 MATIC.
                    </Accordion>
                    <Accordion title="HOW MANY MEDYC NFTS EXIST?">
                        There are a total of 2488 Unique MEDYC NFTs.
                    </Accordion>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq
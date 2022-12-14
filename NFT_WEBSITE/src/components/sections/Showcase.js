import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import medyc1 from "../../assets/images-website/medyc1.png";
import medyc50 from "../../assets/images-website/medyc50.png";
import medyc520 from "../../assets/images-website/medyc520.png";
import medyc1353 from "../../assets/images-website/medyc1353.png";
import medyc474 from "../../assets/images-website/medyc474.png";
import medyc241 from "../../assets/images-website/medyc241.png";
import medyc2346 from "../../assets/images-website/medyc2346.png";
import medyc177 from "../../assets/images-website/medyc177.png";

import ETH from "../../assets/Polygon.svg";


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;


@media(max-width: 30 em){
    animation-duration: 15s;
}

`
const move = keyframes`
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%)}
`


const Row  = styled.div`
/*background-color: lightblue;*/
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} 20s linear infinite ${props => props.direction};

`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: #202020;

border-radius: 20px;
cursor: pointer;


@media(max-width: 48 em){
    width: 12rem;
}

@media(max-width: 30 em){
    width: 10rem;
}

img{
    width: 100%;
    height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
    font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
}

h1{
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;
    

    @media(max-width: 30 em){
        font-size: ${props => props.theme.fontsm};
    }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
    width: 1rem;
    height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

    let play = (e) => {
        passRef.current.style.animationPlayState = "running";
    }

    let pause = (e) => {
         passRef.current.style.animationPlayState = "paused";
    }

    return(
        <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e) } >
            <img src={img} alt="The Wi" />
            <Details>
                <div>
                    <span>MEDYC</span> <br />
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>Price</span>
                    <Price>
                        <img src={ETH} alt="ETH" />
                        <h1>&nbsp;{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    )
}

const Showcase = () => {

    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

    return (
        <Section id="showcase">
            <Row direction="none" ref={Row1Ref}>
                <NftItem img={medyc1} number={1} price={69} passRef={Row1Ref}/>
                <NftItem img={medyc50} number={50} price={69} passRef={Row1Ref}/>
                <NftItem img={medyc177} number={177} price={69} passRef={Row1Ref}/>
                <NftItem img={medyc474} number={474} price={69} passRef={Row1Ref}/>
            </Row>

            <Row direction="reverse" ref={Row2Ref}>
                <NftItem img={medyc241} number={241} price={69} passRef={Row2Ref}/>
                <NftItem img={medyc520} number={520} price={69} passRef={Row2Ref}/>
                <NftItem img={medyc1353} number={1353} price={69} passRef={Row2Ref}/>
                <NftItem img={medyc2346} number={2346} price={69} passRef={Row2Ref}/>
            </Row>
        </Section>
    )
}

export default Showcase
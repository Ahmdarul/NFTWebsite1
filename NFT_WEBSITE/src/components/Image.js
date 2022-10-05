import React from "react";
import styled from "styled-components"
import img1 from "../assets/images-website/about.png";



const Container = styled.div`
width: 25vw;
height: 70vh;

@media(max-width: 70em){
    height: 60vh;
}x

@media(max-width: 64em){
    height: 50vh;
    width: 30vw;
}

@media(max-width: 48em){
    height: 50vh;
    width: 40vw;
}

@media(max-width: 30em){
    height: 25vh;
    width: 60vw;
}

.img{
    display: block;
    width: 100%;
    height: auto;
   
   
}

`

const Image = () => {
    return(
       <Container>
            <img src={img1} className="img" alt="ImageAbout"  />
       </Container>
    )
}

export default Image
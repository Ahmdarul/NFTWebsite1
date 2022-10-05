import React from "react";
import styled from "styled-components"
import GIF from "../assets/example.gif"


const GifContainer = styled.div`
width: 100%;

img{
    width: 100%;
    height: auto;
}
@media(max-width: 64em){
    min-width: 40vh;
}
`


const GIFContainer = () => {
    return(
    <GifContainer>
        <img src={GIF} alt="fi"/>
    </GifContainer>
    )
}

export default GIFContainer
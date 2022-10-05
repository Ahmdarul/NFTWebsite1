import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


const LogoText = styled.h1`
font-family: 'Press Start 2P', cursive;
font-size: ${props => props.theme.fontxl};
/*color: ${props => props.theme.text};*/
color: white;
transition: all 0.2s ease;


&:hover{
    transform: scale(1.1);
}

@media(max-width: 64em){
    font-size: ${props => props.theme.fontlg};
}
`


const Logo = () => {
    return(
        <LogoText>
            <Link to="/">
                MEDYC
            </Link>
        </LogoText>
    )
}

export default Logo
import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    background: ${props => props.inverted ? "limegreen" : "white"};
    color: ${props => props.inverted ? "white" : "limegreen"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    &:hover {
        opacity: 0.9;
    }
`

export default Button
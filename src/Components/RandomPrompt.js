import React, { Component } from 'react';
import styled from 'styled-components'
import {titleCase} from '../Utils'
import media from "styled-media-query";


class RandomPrompt extends Component {
    render(){
        return(
            <StyledPropmtContainer theme={this.props.theme} id="promptContainer">
                <span id="prompt1" className="prompt">{titleCase(this.props.prompt1)}</span>
                <span  className="prompt amper">&</span>
                <span id="prompt2" className="prompt">{titleCase(this.props.prompt2)}</span>
            </StyledPropmtContainer>
        )
    }
}

const StyledPropmtContainer = styled.div`
    & span {
        color: ${props => props.theme.colors.text_prompt.toString()};
        font-family: 'Montez', cursive;
        font-size: 5em;
        ${media.lessThan("medium")`
            font-size: 3em;
        `}


        &.amper{
            font-family:  'Elsie', cursive;
            font-size: 6em;
            ${media.lessThan("medium")`
                font-size: 4em;
            `}
            color: ${props => props.theme.colors.text_prompt.darken(20).toString()};
        }
    }
`


export default RandomPrompt
import React, {Component} from 'react'
import styled from 'styled-components'


class NextButton extends Component {
    render(){
        return(
            <StyledSpan theme={this.props.theme} className={`glass ${this.props.outOfPrompts?"disabled":""}`} 
                  onClick={this.props.onClick}
                  id="button">{this.props.buttonText}
            </StyledSpan>
        );
    }
}

const StyledSpan = styled.span`
        background-color: ${props => props.theme.colors.text_prompt.toString()}; 
        background-image: linear-gradient(${props => {
            let color = props.theme.colors.text_prompt;
            return `${color.toString()}, ${color.lighten().toString(40)}`
        }});    

        &:after{
            background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
        }

        &:hover{
            background: linear-gradient(${props => {
                let color = props.theme.colors.text_prompt;
                return `${color.lighten(10).toString()}, ${color.lighten().toString(50)}`
            }});    
        }
        color: ${props => props.theme.colors.text_prompt.isLight()? 'black' : 'white'};    
`

export default NextButton
import React, {Component} from 'react'
import styled from 'styled-components'

import PromptMenu from './PromptMenu'
import ThemePicker from './ThemeCreatorMenu/ThemePicker'

class NavBar extends Component {
    render(){
        return(
            <StyledNavBar theme={this.props.theme}>
                <PromptMenu theme={this.props.theme} prompts={this.props.prompts}index={this.props.index}/>
                <ThemePicker theme={this.props.theme} handleSave={this.props.handleSave}/>
            </StyledNavBar>
        );
    }
}

const StyledNavBar = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    padding-bottom: 46px;
    background: ${props => props.theme.colors.navbar.toString()};
`;

export default NavBar
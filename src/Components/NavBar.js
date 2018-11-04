import React, {Component} from 'react'
import styled from 'styled-components'

import PromptMenu from './PromptMenu'
import ThemePicker from './ThemeCreatorMenu/ThemePicker'

class NavBar extends Component {
    render(){
        return(
            <StyledNavBar>
                <PromptMenu theme={this.props.theme}/>
                <ThemePicker theme={this.props.theme} handleSave={this.props.handleSave}/>
            </StyledNavBar>
        );
    }
}

const StyledNavBar = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    padding-bottom: 36px;
    background: black;
`;

export default NavBar
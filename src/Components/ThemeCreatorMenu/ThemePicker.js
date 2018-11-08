import React, { Component } from 'react'
import styled from 'styled-components'
import Popover from 'react-popover'
import { FaPalette } from 'react-icons/fa'

import ThemePickerForm from './ThemePickerForm'


class ThemePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      place: "below"
    }

    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover(toState) {
    const showMenu =
      typeof toState === "boolean" ? toState : !this.state.showMenu
    this.setState({
      showMenu,
    })
  }

  render() {
    const popoverProps = {
      isOpen: this.state.showMenu,
      place: this.state.place,
      onOuterAction: () => this.togglePopover(false),
      body: [
        <ThemePickerForm handleSave={this.props.handleSave} theme={this.props.theme}/>
      ]
  }
    return (
      <StyledDiv className="ThemePickerMenu">
        
        <StyledPopover {...popoverProps} theme={this.props.theme}>
          <StyledSpan className="themepicker-icon" onClick={this.togglePopover} theme={this.props.theme}> 
            <FaPalette /> 
          </StyledSpan>
        </StyledPopover>
      </StyledDiv>
    )
  }
}
  
  export default ThemePicker

const StyledDiv = styled.div`
  display: inline-block;
  position: absolute;
  top: 26px;
  right: 26px;

`

 const StyledSpan = styled.span`
  cursor: pointer;
  margin-right: 26px;

  & svg {
    height: 36px;
    width: 36px;
    fill: ${props => props.theme.colors.menu.toString()};
  }
 `

  const StyledPopover = styled(Popover)`
    & .Popover-body {
      background: ${props => props.theme.colors.menu.toString()};
      color: ${props => props.theme.colors.text_menu.toString()};
      padding : 20px;
    }

    & .Popover-tip {
      fill: ${props => props.theme.colors.menu.toString()};
    }
  `




   /*
        
        );*/
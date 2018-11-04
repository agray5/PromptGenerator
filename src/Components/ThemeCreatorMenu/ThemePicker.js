import React, { Component } from 'react'
import styled from 'styled-components'
import Popover from 'react-popover'

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
        <ThemePickerForm />
      ]
  }

    return (
      <div className="ThemePickerMenu">
        
        <StyledPopover {...popoverProps}>
          <button onClick={this.togglePopover}> Set Theme </button>
        </StyledPopover>
      </div>
    )
  }
}
  
  export default ThemePicker

  const StyledPopover = styled(Popover)`
    & .Popover-body {
      background: white;
      padding : 20px;
    }

    & .Popover-tip {
      fill: white;
    }
  `




   /*
        
        );*/
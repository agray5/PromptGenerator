import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {titleCase} from '../Utils'
import styled from 'styled-components'

class PromptMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  createList = () => {
    let list = []
    for (let i = 0; i < this.props.index; i+=2) {
      let children = []
      //Create the parent and add the children
      list.push(<StyledLi theme={this.props.theme} key={"list"+i}>{titleCase(this.props.prompts[i]) + ", " + titleCase(this.props.prompts[i+1])}</StyledLi>)
    }
    return list
}

  render () {
    return (
      <Menu styles={ styles(this.props.theme) } bodyClassName={ "my-class" }>
       <span> Used Prompts </span>
       <ul id="oldPrompts">
           {this.createList()}
        </ul>
      </Menu>
    );
  }
}

const StyledLi = styled.li`
    color: ${props => props.theme.colors.text_menu.darken(10).toString()}
`

var styles = (theme) => {
  let comp = {
    bmBurgerBars: {
      background: theme.colors.menu.toString()
    },
    bmCross: {
      background: theme.colors.text_menu.toString()
    },
    bmMenu: {
      background: theme.colors.menu.toString()
    },
    bmMorphShape: {
      fill: theme.colors.menu.toString()
    },
    bmItemList: {
      color: theme.colors.text_menu.toString()
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return comp
}


export default PromptMenu
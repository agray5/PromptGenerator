import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class PromptMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  createList = () => {
    let list = []
    console.log("list ", list, "index", this.props)
    for (let i = 0; i < this.props.index; i+=2) {
      let children = []
      //Create the parent and add the children
      list.push(<li key={"list"+i}>{this.props.prompts[i] + ", " + this.props.prompts[i+1]}</li>)
    }
    return list
}

  render () {
    console.log("styles", styles(this.props.theme))
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

var styles = (theme) => {
  console.log("theme", theme)
  let comp = {
    bmBurgerBars: {
      background: theme.colors.background_menu.toString()
    },
    bmCross: {
      background: theme.colors.text_menu.toString()
    },
    bmMenu: {
      background: theme.colors.background_menu.toString()
    },
    bmMorphShape: {
      fill: theme.colors.background_menu.toString()
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
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
    return (
      <Menu>
       <span> Used Prompts </span>
       <ul id="oldPrompts">
           {this.createList()}
        </ul>
      </Menu>
    );
  }
}

export default PromptMenu
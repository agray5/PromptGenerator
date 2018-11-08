import React, { Component } from 'react';
import '../App.css';
import RandomPrompt from'./RandomPrompt'
import PromptMenu from './PromptMenu'
import ConfirmDialog from './Dialog'
import NextButton from './NextButton'
import NavBar from './NavBar'
import styled from 'styled-components'


import shuffleSeed from 'shuffle-seed'
import prompts from '../prompts'

import Theme from '../Theme'

class App extends Component {

  constructor(props){
    super(props);

    //loadTheme
    this.theme = new Theme();
    this.theme.loadTheme()

    this.state = {
      seed: "",
      prompts: [],
      index: 0,
      outOfPrompts: false,
      dialogOpen: false,
      colors: this.theme.colors
    }

    this.nextPrompt = this.nextPrompt.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.handleThemeSave = this.handleThemeSave.bind(this);
  }

  componentDidMount(){
    //Set Seed
    if (!localStorage.getItem('seed'))
      localStorage.setItem('seed', makeSeed(5, 10));
    let localSeed = localStorage.getItem('seed')

    //Set index
    let localIndex = parseInt(localStorage.getItem('index'));
    if(localIndex)
      this.setState({index: localIndex})

    //generate prompt list
    this.setState({prompts: shuffleSeed.shuffle(prompts, localSeed)})
  }

  nextPrompt() {
    let newIndex = this.state.index + 2
    if(newIndex < prompts.length-1){
      this.setState({index: newIndex})
      localStorage.setItem('index', newIndex)
    } else{
      this.setState({outOfPrompts: true})
    }
    this.handleClose()
  }

  showDialog(){
    this.setState({dialogOpen: true})
  }

  handleClose (){
    this.setState({dialogOpen: false });
  };

  handleThemeSave(colors, showNavbar){
      console.log("APP SAVE THEME", showNavbar)
    this.theme.saveTheme(colors, showNavbar);
    this.setState({colors: this.theme.colors})

    console.log("App setting state")
  }


  render() {
    let buttonText = this.state.outOfPrompts? "No more prompts :(" : "Next Prompt";
    let index = this.state.index
    return (
      <StyledApp theme = {this.theme} className="App">
        <NavBar theme = {this.theme} handleSave={this.handleThemeSave} prompts={this.state.prompts}index={this.state.index}/>
        {/*<ConfirmDialog onOk={this.nextPrompt} onClose={this.handleClose} open={this.state.dialogOpen}/>*/}
        {/*<PromptMenu prompts={this.state.prompts} index={this.state.index} theme={new Theme()}/>*/}
        <RandomPrompt theme = {this.theme}  prompt1={this.state.prompts[index]} prompt2={this.state.prompts[index+1]}/>
        <NextButton theme = {this.theme} buttonText={buttonText} outOfPrompts={this.state.outOfPrompts} onClick={this.nextPrompt}/>
        
      </StyledApp>
    );
  }
}

export default App;

function makeSeed(min, max) {
  let rand = Math.random() * (max - min) + min;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < rand; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const StyledApp = styled.div`
    background: ${props => props.theme.colors.background.toString()};
`;


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomPrompt from'./RandomPrompt'
import PromptMenu from './oldPrompts'

import shuffleSeed from 'shuffle-seed'
import prompts from './prompts'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      seed: "",
      prompts: [],
      index: 0,
      outOfPrompts: false
    }

    this.nextPrompt = this.nextPrompt.bind(this);
  }

  componentDidMount(){
    //Set Seed
    if (!localStorage.getItem('seed'))
      localStorage.setItem('seed', makeSeed(5, 10));
    let localSeed = localStorage.getItem('seed')
    console.log("state.seed", this.state.seed)
    console.log("localSeed", localSeed)

    //Set index
    let localIndex = parseInt(localStorage.getItem('index'));
    if(localIndex)
      this.setState({index: localIndex})

    //generate prompt list
    console.log("component did mount index:", localIndex, "seed", this.state.seed)
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

    console.log("next prompt index", this.state.index)
    
  }

  render() {
    let buttonText = this.state.outOfPrompts? "No more prompts :(" : "Next Prompt";
    let index = this.state.index
    console.log("render index", this.state.index)
    return (
      <div className="App">
        <PromptMenu prompts={this.state.prompts} index={this.state.index}/>
        <RandomPrompt prompt1={this.state.prompts[index]} prompt2={this.state.prompts[index+1]}/>
        <span className={`glass ${this.state.outOfPrompts?"disabled":""}`} onClick={this.nextPrompt}
        id="button">{buttonText}</span>
        
      </div>
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
import React, { Component } from 'react'
import styled from 'styled-components'
import { CompactPicker } from 'react-color';
import  ColorPickerBase from './ColorPickerBase'

class ColorPicker extends Component {

    constructor (props) {
      super(props);
      this.state = {
        displayColorPicker: false,
        color: props.color,
      };
    }
      handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
    
      handleChange = (color) => {
        this.setState({ color: color.rgb })
      };
    
      render() {
        console.log("display color picker?", this.state.displayColorPicker)
        return (
          <ColorPickerContainer color={this.state.color}>
            {this.props.label? <label> {this.props.label} </label> : null}
            <div className="swatch" onClick={ this.handleClick }>
              <div className="color"/>
            </div>
            { this.state.displayColorPicker ? <div className="swatch-popover">
              <div  className="cover" onClick={ this.handleClose }/>
              <ColorPickerBase color={ this.state.color } onChange={ this.handleChange } />
            </div> : null }
    
          </ColorPickerContainer>
        )
      }
    }

    export default ColorPicker
  
  const ColorPickerContainer = styled.div`
    display: inline-block;
    & .color {
      float: left;
      width: 36px;
      height: 14px;
      borderRadius: 2px;
      background: ${props  => `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a });`}
    }
  
    & .swatch {
      padding: 5px;
      background: #fff;
      borderRadius: 1px;
      boxShadow: 0 0 0 1px rgba(0,0,0,.1);
      display: inline-block;
      cursor: pointer;
    }
  
    & .swatch-popover: {
      display: block;
  
    }
  
    & .cover: {
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    & label {
        float: left;
    }
  `


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
        this.props.onChange(this.props.colorName, color)
        this.setState({ color: color.rgb })
    };
    
    render() {
        const label = (this.props.label? <label> {this.props.label} </label> : null);
        return (
          <ColorPickerContainer color={this.state.color} left={this.props.isLeft}>
                <div className="swatch" onClick={ this.handleClick }>
                    <div className="color"/>
                </div>
            {label}
            { this.state.displayColorPicker ? <div className="swatch-popover">
              <div  className="cover" onClick={ this.handleClose }/>
              <ColorPickerBase color={ this.state.color } onChange={ this.handleChange } onCompleteChange={this.props.onCompleteChange}/>
            </div> : null }
    
          </ColorPickerContainer>
        )
      }
    }

    export default ColorPicker
  
  const ColorPickerContainer = styled.div`
    display: inline-block;
    margin-top: 20px;

    & .color {
      float: left;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${props  => `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a });`}
    }
  
    & .swatch {
      padding: 2px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(0,0,0,.1);
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
        
    }
  `


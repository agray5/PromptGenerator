import React from 'react'
import styled from 'styled-components'
import ColorPickerOrganizer from './ColorPickerOrganizer'


class ThemePickerForm extends React.Component{

    constructor(props){
        super(props);
        this.saveTheme = this.saveTheme.bind(this);
        this.state = {
            colors: {},
            showNavBar: this.props.theme.showNavbar
        }

        this.setColor = this.setColor.bind(this);
        this.saveTheme = this.saveTheme.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    saveTheme(event){
        event.preventDefault()
        let showNavBar = this.state.showNavBar?true:false;
        this.props.handleSave(this.state.colors, showNavBar)
    }

    setColor(key, color){
        this.setState({colors: {...this.state.colors, [key]: color}});
    }
    render(){
        return(
            <StyledForm onSubmit={this.saveTheme}>
                <ColorPickerOrganizer theme={this.props.theme} onChange={this.setColor}/>
                <br />
                <label >Show Navbar? 
                    <input type="checkbox" name="showNavBar" checked={this.state.showNavBar} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Save" />
            </StyledForm>
        )
      }
  }

  /**
   * <ColorPicker label="Primary: " color={{r: 20, g: 20, b: 100, a: 1}}/>
                <ColorPicker label="Primary: " color={{r: 20, g: 20, b: 100, a: 1}}/>
   */

  const StyledForm = styled.form`
    
  `

  export default ThemePickerForm
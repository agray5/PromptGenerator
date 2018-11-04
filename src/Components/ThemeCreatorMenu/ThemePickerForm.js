import React from 'react'
import styled from 'styled-components'
import { hex2rgb } from '../../Utils'
import ColorPicker from './ColorPicker';


const ThemePickerForm = (props) => {
    return(
    <StyledForm onSubmit={props.handleSave}>
          <ColorPicker label="Primary: " color={{r: 20, g: 20, b: 100, a: 1}}/>
          <ColorPicker label="Primary: " color={{r: 20, g: 20, b: 100, a: 1}}/>
          <input type="submit" value="Submit" />
    </StyledForm>
  )
  }

  const StyledForm = styled.form`
    
  `

  export default ThemePickerForm
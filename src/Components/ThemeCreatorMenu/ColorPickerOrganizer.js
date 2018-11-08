import React, { Component } from 'react'
import  ColorPicker from './ColorPicker'

class ColorPickerOrganizer extends Component {
      render() {
        return (
          <table>
            {fillContainer(this.props.theme, this.props.onChange)}
          </table>
        )
      }
}

export default ColorPickerOrganizer

const fillContainer = (theme, onChange) => {
    let colors = getColors(theme);
    let colorArr = Object.keys(colors);
    let container = [];
    console.log("Colors",colors);
    for (let i = 0; i < colorArr.length; i+= 2){
        let colorPicker1 = createColorPicker(...extractPara(colors, theme.colorLabels, i, colorArr[i], onChange, true))
        let colorPicker2;
        if(i+1 < colorArr.length)
            colorPicker2 = createColorPicker(...extractPara(colors, theme.colorLabels, i+1, colorArr[i+1], onChange, false))
        container.push(
            <tr className="colorPickerOrganizer" key={i}>
                <td>{colorPicker1}</td>
                <td>{colorPicker2 != undefined && colorPicker2}</td>
            </tr>
        )
    }
    return container;
}

const getColors = (theme) => {
    return theme.colors;
}

const extractPara = (colors, colorLabels, index, color, onChange, isLeft) => {
    return [colorLabels[color], 
            colors[color].toRgb(),
            onChange,
            index,
            color,
            isLeft]
}

const createColorPicker = (label, color, onChange, key, colorName, isLeft) => {

    return <ColorPicker 
                label={label} 
                color={color}
                onChangeComplete={onchange}
                onChange={onChange}
                key={key}
                colorName={colorName}
                isLeft={isLeft}
            />
}
import React from 'react';
import { CustomPicker, SliderPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common'

class ColorPickerBase extends React.Component {
  render() {
    var styles = {
        input: {
            height: 20,
            borderRadius: '5px',
            marginTop: '5px',
            border: `1px solid ${ this.props.hex }`,
            paddingLeft: 10,
      },
      label: {
        fontSize: '12px',
        color: '#999',
      },
    };

    return (
        <div>
    <SliderPicker
    style={ styles }
    label="hex"
    color={ this.props.hex }
    onChange={ this.props.onChange } />
    <EditableInput
          style={{ input: styles.input }}
          value={ this.props.hex }
          onChange={ this.props.onChange }
/>
    </div>)
  }
}



export default CustomPicker(ColorPickerBase);

import tinycolor from 'tinycolor2'

const colors = {
  background: tinycolor("#835435"),
  background_menu: tinycolor("#373a47"),
  text_prompt: tinycolor("#8bede3"),
  text_menu: tinycolor("#b8b7ad"),
  button: tinycolor("red"),
}



class Theme {

  get colors() {
    return this.getColors();
  }

  getColors(){
    return Object.keys(colors).reduce((result, color) => {
      result[color] = colors[color].clone()
      return result
  }, {})
  }
}

export default Theme

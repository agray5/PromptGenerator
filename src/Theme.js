import tinycolor from 'tinycolor2'




class Theme {
  constructor() {
    this._colors = {
      navbar: tinycolor("#835435"),
      menu: tinycolor("#373A47"),
      text_menu: tinycolor("#B8B7AD"),
      text_prompt: tinycolor("#4D193C"),
      background: tinycolor("#B8B7AD"),
    }
    this.showNavbar = true;

    this.colorLabels = {
        navbar: "Navbar",
        menu: "Menus",
        text_menu: "Menu Text",
        text_prompt: "Prompts",
        background: "Background",
    }
}
  
  /**
   *
   *
   * @param {*} colors
   * @memberof Theme
   */
  saveTheme(colors, showNavbar = this.showNavbar) {
    this.colors = colors;
    this.showNavbar = showNavbar;
    localStorage.setItem('theme', JSON.stringify(this.getRgb()));
    localStorage.setItem('showNavbar', JSON.stringify(this.showNavbar))
    console.log("SAVE THEME THEME", this.showNavbar)
  }

  loadTheme() {
    try {
      if(localStorage.getItem('theme') != null)
        this.colors = JSON.parse(localStorage.getItem('theme'));
      if(localStorage.getItem('showNavbar') != null)
        this.showNavbar = JSON.parse(localStorage.getItem('showNavbar'));
    }
    catch(error){
        console.error(error)
      return 
    }
    
  }

  set colors(newcolors){
    let colorConvert = Object.keys(newcolors).reduce((result, color) => {
        //Color is a olor from a color picker
        let colorUnwrap = newcolors[color];
        if(colorUnwrap.hasOwnProperty('hex') && colorUnwrap.hasOwnProperty('source'))
            result[color] = tinycolor(colorUnwrap.hex);
        else
            result[color] = tinycolor(colorUnwrap);
      return result
  }, {})

    this._colors = {...this._colors, ...colorConvert}
  }

  getRgb() {
    return Object.keys(this._colors).reduce((result, color) => {
      result[color] = this._colors[color].toRgb()
      return result
  }, {})
  }

  get colors() {
    return Object.keys(this._colors).reduce((result, color) => {
      let resColor = (color == "navbar" && !this.showNavbar)
                        ?"background":color
      result[color] = this._colors[resColor].clone()
      return result
  }, {})
  }
}

export default Theme

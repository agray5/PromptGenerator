import React, { Component } from 'react';


class RandomPrompt extends Component {
    render(){
        return(
            <div id="promptContainer">
                <span id="prompt1" className="prompt">{titleCase(this.props.prompt1)}</span>
                <span id="prompt2" className="prompt">{titleCase(this.props.prompt2)}</span>
            </div>
        )
    }
}


var titleCase = function (str) {
    if(str == undefined) return 
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
  

export default RandomPrompt
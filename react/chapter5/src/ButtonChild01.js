import React, { Component } from "react";

class ButtonChild01 extends Component {
  /*
		construct(props){
			super()
			this.state = {
				title: this.props.color,
		    color: this.props.color
			}
		}
	*/

  state = {
    title: this.props.color,
    color: this.props.color,
  };
  render() {
    const { title, color } = this.state;
    const ButtonStyle = {
      border: "none",
      width: 100,
      height: 30,
      background: color,
    };
    return <button style={ButtonStyle}>{title}</button>;
  }
}

ButtonChild01.defaultProps = {
  title: "이름없음 버튼",
};

export default ButtonChild01;

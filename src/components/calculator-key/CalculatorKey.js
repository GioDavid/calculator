import React from "react";
import "./CalculatorKey.css";

export default class CalculatorKey extends React.Component {

  buttonClicked = () => {
    const { label, onbuttonClicked } = this.props;
    onbuttonClicked(label);
  }

  render() {
    const { label } = this.props;

    return (
      <button className="button" onClick={this.buttonClicked}>{label}</button>
    );
  }
}

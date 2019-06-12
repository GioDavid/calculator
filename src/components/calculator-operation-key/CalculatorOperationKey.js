import React from "react";

export default class CalculatorOperationKey extends React.Component {

  buttonClicked = () => {
    const { label, onbuttonClicked } = this.props;
    onbuttonClicked(label);
  }

  render() {
    const { label, onbuttonClicked } = this.props;

    return (
      <button onClick={this.buttonClicked}>{label}</button>
    );
  }
}

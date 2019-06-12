import React from "react";
import CalculatorOperationKey from "../calculator-operation-key/CalculatorOperationKey";

export default class Calculator extends React.Component {
    onOperationClicked(sign) {
        console.log('sign clicked'+ sign);
    }

    render() {
        return (
            <div>
                <CalculatorOperationKey label="+" onbuttonClicked={this.onOperationClicked}/>
                <CalculatorOperationKey label="-" onbuttonClicked={this.onOperationClicked}/>
                <CalculatorOperationKey label="*" onbuttonClicked={this.onOperationClicked}/>
                <CalculatorOperationKey label="/" onbuttonClicked={this.onOperationClicked}/>
            </div>
        );
    }
}

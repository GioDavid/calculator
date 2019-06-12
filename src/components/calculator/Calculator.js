import React from "react";
import CalculatorKey from "../calculator-key/CalculatorKey";
import { divide, multiply, sum, substract } from "../../operations/operations"

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accumulator: 0,
            lastOperation: '+'
        };
    }

    onOperationClicked = (value) => {
        const { accumulator, lastOperation } = this.state;
        if (isNaN(value)) {
            this.setState({ lastOperation: value });
        } else {
            switch (lastOperation) {
                case "+":
                    this.setState({ accumulator: sum(accumulator, value) });
                    break;
                case "-":
                    this.setState({ accumulator: substract(accumulator, value) });
                    break;
                case "*":
                    this.setState({ accumulator: multiply(accumulator, value) });
                    break;
                case "/":
                    this.setState({ accumulator: divide(accumulator, value) });
                    break;
                default:
                    this.setState({ accumulator: sum(accumulator, value) });
            }
        }
    }

    render() {
        return (
            <div>
                <div className="operation-area">
                    <CalculatorKey label="+" onbuttonClicked={this.onOperationClicked} />
                    <CalculatorKey label="-" onbuttonClicked={this.onOperationClicked} />
                    <CalculatorKey label="*" onbuttonClicked={this.onOperationClicked} />
                    <CalculatorKey label="/" onbuttonClicked={this.onOperationClicked} />
                </div>
                <div className="numeric-area">
                    <div><CalculatorKey label="1" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="2" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="3" onbuttonClicked={this.onOperationClicked} /></div>
                    <div>
                        <CalculatorKey label="4" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="5" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="6" onbuttonClicked={this.onOperationClicked} />
                    </div>
                    <div>
                        <CalculatorKey label="7" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="8" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="9" onbuttonClicked={this.onOperationClicked} />
                    </div>
                    <div>
                        <CalculatorKey label="C" onbuttonClicked={this.onOperationClicked} />
                        <CalculatorKey label="0" onbuttonClicked={this.onOperationClicked} />
                        <label>Result:  {this.state.accumulator}</label>
                    </div>
                </div>
            </div>
        );
    }
}

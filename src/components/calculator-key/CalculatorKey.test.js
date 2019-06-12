import * as React from "react";
import { shallow } from "enzyme";
import CalculatorKey from "./CalculatorKey";


describe("<CalculatorKey />", () => {
    const mockOnbuttonClicked = jest.fn();

    it("set a label and create a snapshot from it", () => {
      const props = {
        label: "+",
        onbuttonClicked: mockOnbuttonClicked
      };
      const wrapper = shallow(<CalculatorKey {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
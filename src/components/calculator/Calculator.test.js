import * as React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";


describe("<Calculator />", () => {

    it("create a snapshot with the basic information", () => {
    
      const wrapper = shallow(<CalculatorKey {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
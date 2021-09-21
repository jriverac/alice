import React from "react";
import { mount } from "enzyme";
import Appointment from "./appointment";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("Appointment", () => {
  beforeEach(() => {
    // console.log("Test");
  });

  xit("renders the customer first name", () => {
    Enzyme.configure({ adapter: new Adapter() });

    let props = require("./resources/customer.json");
    const wrapper = mount(<Appointment {...props.customer} />);
    expect(wrapper.find(".foo").text()).toBe("Ashley Smith");
  });

  it("renders the customer first name", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const props = {
      customer: {
        firstName: "John",
        lastName: "Williams"
      }
    };
    const wrapper = mount(<Appointment {...props.customer} />);
    expect(wrapper.find(".foo").text()).toBe("John Williams");
  });
});

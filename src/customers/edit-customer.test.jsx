import React from "react";
import { mount } from "enzyme";
import EditCustomer from "./customer-edit";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("EditCustomer", () => {
  beforeEach(() => {
    // console.log("Test");
  });

  it.skip("renders the customer first name", () => {
    Enzyme.configure({ adapter: new Adapter() });

    let props = require("./resources/customer.json");

    const wrapper = mount(<EditCustomer {...props} />);
    expect(wrapper.find("#form-title").text()).toBe("Form Title");
    expect(wrapper.find("#customer-first-name").prop("value")).toBe("Ashley");
    expect(wrapper.find("#customer-last-name").props().value).toBe("Smith");
  });
});

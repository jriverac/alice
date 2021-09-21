import React from "react";
import { mount } from "enzyme";
import About from "./about";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("About", () => {
  beforeEach(() => {
    console.log("Testing");

  });

  it("renders the page title", () => {
    const blurb = "Welcome to this test.";
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = mount(<About blurb={blurb} />);
    expect(wrapper.find("#title").text()).toBe('About');
    expect(wrapper.find("#intro").text()).toBe("Welcome to this test.");
  });
});

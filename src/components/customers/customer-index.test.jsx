import React from "react";
import { mount } from "enzyme";
import CustomerIndex from "./customer-index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("CustomerIndex", () => {
  beforeEach(() => {
    // console.log("Test");
  });

  describe("the first row", () => {
    it("render first name", () => {
      const customers = require("../../resources/customers.json");
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = mount(<CustomerIndex {...customers} />);

      expect(
        wrapper
          .findWhere(node => node.key() == 1)
          .find(".firstName")
          .text()
      ).toBe("Ashley");
    });

    it("render last name", () => {
      const customers = require("../../resources/customers.json");
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = mount(<CustomerIndex {...customers} />);

      expect(
        wrapper
          .findWhere(node => node.key() === "1")
          .find(".lastName")
          .text()
      ).toBe("Smith");
    });
  });

  describe("the second row", () => {
    it("render first name", () => {
      const customers = require("../../resources/customers.json");
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = mount(<CustomerIndex {...customers} />);

      expect(
        wrapper
          .findWhere(node => node.key() === "2")
          .find(".firstName")
          .text()
      ).toBe("John");
    });

    it("render last name", () => {
      const customers = require("../../resources/customers.json");
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = mount(<CustomerIndex {...customers} />);

      expect(
        wrapper
          .findWhere(node => node.key() === "2")
          .find(".lastName")
          .text()
      ).toBe("Williams");
    });
  });
});

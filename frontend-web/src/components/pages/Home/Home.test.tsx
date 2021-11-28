import { shallow } from "enzyme";
import Homepage from "./Home";

describe("Homepage Testing", () => {
  it("should render", () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

import { shallow } from "enzyme";
import App from "./App";

describe("Router Testing", () => {
  it("should render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

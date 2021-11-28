import { shallow } from "enzyme";
import GuestPage from "./GuestPage";

describe("Guest Page Testing", () => {
  it("should render", () => {
    const wrapper = shallow(<GuestPage />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

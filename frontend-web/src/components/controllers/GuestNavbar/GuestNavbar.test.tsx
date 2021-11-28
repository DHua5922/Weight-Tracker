import { shallow } from "enzyme";
import GuestNavbar from "./GuestNavbar";

describe("Guest Navbar Testing", () => {
  it("should render", () => {
    const wrapper = shallow(<GuestNavbar />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

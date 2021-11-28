import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import {
  HOME_PAGE_HREF,
  LOGIN_PAGE_HREF,
  REGISTER_PAGE_HREF,
  THEME_COLOR,
} from "../../../global/global";
import tw, { styled } from "twin.macro";

const SNavbar = styled(Navbar)`
  background-color: ${THEME_COLOR};
`;

const SButton = tw(Button)`m-2`;

const links = [
  { href: LOGIN_PAGE_HREF, children: "Login" },
  { href: REGISTER_PAGE_HREF, children: "Sign Up" },
];

const GuestNavbar = () => {
  const navigate = useNavigate();
  return (
    <SNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={HOME_PAGE_HREF}>Weight Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {links.map(({ href, children, ...props }, index) => (
              <SButton
                variant="outline-light"
                key={index}
                onClick={() => navigate(href)}
                {...props}
              >
                {children}
              </SButton>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </SNavbar>
  );
};

export default GuestNavbar;

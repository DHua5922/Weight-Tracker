import tw, { styled } from "twin.macro";
import GuestNavbar from "../../controllers/GuestNavbar/GuestNavbar";

const ChildContainer = styled.div`
  height: 90vh;
  ${tw`flex items-center justify-center`}
`;

interface Props {
  children?: React.ReactNode;
}

const Homepage = ({ children }: Props) => {
  return (
    <>
      <GuestNavbar />
      <ChildContainer>{children}</ChildContainer>
    </>
  );
};

export default Homepage;

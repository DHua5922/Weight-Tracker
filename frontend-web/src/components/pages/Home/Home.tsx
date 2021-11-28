import { Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import tw from "twin.macro";
import { LOGIN_PAGE_HREF } from "../../../global/global";
import GuestPage from "../../views/GuestPage/GuestPage";

const MainText = tw.div`text-4xl`;
const SubText = tw.div`text-lg my-4`;
const MainButton = tw(Button)`px-6 py-3`;
const SCol = tw(Col)`flex items-center justify-center`;

const useChildren = () => {
  const navigate = useNavigate();
  return [
    <div>
      <MainText>Track Your Weight</MainText>
      <SubText>
        See your weight changes overtime and whether you need to be on a diet or
        not.
      </SubText>
      <MainButton onClick={() => navigate(LOGIN_PAGE_HREF)}>
        GET STARTED
      </MainButton>
    </div>,
    <img src="images/line-graph.png" alt="line graph" />,
  ];
};

const Homepage = () => {
  const childrens = useChildren();
  return (
    <GuestPage>
      <Row>
        {childrens.map((child: JSX.Element, index: number) => (
          <SCol key={index} sm={12} md={6}>
            {child}
          </SCol>
        ))}
      </Row>
    </GuestPage>
  );
};

export default Homepage;

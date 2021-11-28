import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HOME_PAGE_HREF,
  LOGIN_PAGE_HREF,
  REGISTER_PAGE_HREF,
} from "../../global/global";
import Homepage from "../pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PAGE_HREF} element={<Homepage />} />
        <Route path={LOGIN_PAGE_HREF} element={<Homepage />} />
        <Route path={REGISTER_PAGE_HREF} element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

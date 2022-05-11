import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./../assets/scss/App.scss";
import { Menu } from "./Menu/Menu";
import { TC39List } from "./TC39List/TC39List";

const App = () => (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/">
        <Route path="tc39">
          <Route path="" element={<TC39List />}></Route>
          <Route path=":featureName" element={<TC39List />}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./../assets/scss/App.scss";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { TC39List } from "./TC39List/TC39List";

const App = () => (
  <main>
    <BrowserRouter basename={process.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<TC39List />}>
          <Route path="tc39">
            <Route path="" element={<TC39List />}></Route>
            <Route path=":featureName" element={<TC39List />}></Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </main>
);

export default App;

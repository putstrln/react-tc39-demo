import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./../assets/scss/App.scss";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { ReactList } from "./ReactList/ReactList";
import { TC39List } from "./TC39List/TC39List";

const App = () => (
  <main>
    <BrowserRouter basename={process.env.BASE_URL}>
      <Header />
      <section className="body">
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="tc39">
              <Route path="" element={<TC39List />}></Route>
              <Route path=":featureName" element={<TC39List />}></Route>
            </Route>
            <Route path="react">
              <Route path="" element={<ReactList />}></Route>
              <Route path=":featureName" element={<ReactList />}></Route>
            </Route>
          </Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  </main>
);

export default App;

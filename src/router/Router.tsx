import {Route, Routes} from "react-router-dom";
import Home from "../components/Home.tsx";
import Cards from "../components/Cards.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/card"} element={<Cards/>}/>
    </Routes>
  );
};

export default Router;
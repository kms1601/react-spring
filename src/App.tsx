import Router from "./router/Router.tsx";
import {GlobalStyle} from "./style/global-style.ts";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header/>
      <Router/>
      <Footer/>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
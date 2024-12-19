import styled from "styled-components";
import HeaderLink from "./HeaderLink.tsx";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLink name={"Home"} to={"/"}/>
      <HeaderLink name={"Card"} to={"/card"}/>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  background: aliceblue;
  align-items: center;
  z-index: 100000;
`;

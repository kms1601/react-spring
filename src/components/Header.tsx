import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled>
      <LinkStyled to={"/"}>Home</LinkStyled>
      <LinkStyled to={"/card"}>Card</LinkStyled>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const LinkStyled = styled(Link)`
  margin: 0 5px 0 5px;
  font-size: 20px;
  font-weight: bold;
  color: #8686e4;

  &:hover {
    color: #5252e3;
  }
`;
import styled from "styled-components";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyled>
      <Link to={"https://github.com/kms1601/react-spring"}>
        <FontAwesomeIcon icon={faGithub} size={"2xl"}/>
      </Link>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: aliceblue;
  z-index: 100000;

  svg {
    path {
      color: #5f8ea1;
      transition: color 0.1s;
    }

    &:hover {
      path {
        color: #236787;
      }
    }
  }
`;
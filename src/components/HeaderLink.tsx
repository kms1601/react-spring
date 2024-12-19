import {Link} from "react-router-dom";
import {animated, useSpring} from "@react-spring/web";

const AnimatedLink = animated(Link);

const HeaderLink = ({name, to}: { name: string, to: string }) => {
  const [springs, api] = useSpring(() => ({
    from: {
      color: "#68a3df",
      fontSize: "20px",
    },
    config: {
      duration: 100,
    }
  }));

  const handleEnter = () => {
    api.start({
      from: {
        color: "#68a3df",
        fontSize: "20px",
      },
      to: {
        color: "#2e73bd",
        fontSize: "25px",
      }
    });
  }

  const handleLeave = () => {
    api.start({
      from: {
        color: "#2e73bd",
        fontSize: "25px",
      },
      to: {
        color: "#68a3df",
        fontSize: "20px",
      }
    });
  }

  return (
    <AnimatedLink
      to={to}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        width: "70px",
        textAlign: "center",
        fontWeight: "bold",
        ...springs,
      }}>
      {name}
    </AnimatedLink>
  );
};

export default HeaderLink;

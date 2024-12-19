import {animated, useSpring} from "@react-spring/web";
import {useGesture} from "react-use-gesture";
import {Dispatch, SetStateAction} from "react";

const Card = (
  {id, color, text, zIndex, setZIndex}:
    {
      id: number,
      color: string,
      text: string,
      zIndex: number[],
      setZIndex: Dispatch<SetStateAction<number[]>>,
    }) => {
  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  }))

  const bind = useGesture({
    onDrag: (drag) => {
      api.start({
        x: drag.offset[0],
        y: drag.offset[1],
        scale: drag.dragging ? 1.2 : 1.1,
        boxShadow: drag.dragging ? "10px 10px 10px #555" : "0px 0px 0px rgba(0,0,0,0)",
      });
    },
    onHover: (hover) => {
      api.start({
        scale: hover.hovering ? 1.1 : 1,
      })
    }
  });

  const mouseDown = () => {
    const newZIndex: number[] = [];
    zIndex.forEach((_, i) => {
      newZIndex.push(i === id ? Math.max(...zIndex) + 1 : zIndex[i]);
    })
    setZIndex(newZIndex);
  }

  return (
    <animated.div
      {...bind()}
      className={"card"}
      style={{
        width: "130px",
        height: "180px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        userSelect: "none",
        borderRadius: 20,
        zIndex: zIndex[id],
        background: color,
        ...spring,
      }}
      onMouseDown={mouseDown}
    >{text}</animated.div>
  );
};

export default Card;
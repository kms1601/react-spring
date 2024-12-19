import styled from "styled-components";
import Card from "./Card.tsx";
import {useState} from "react";

const Cards = () => {
  const [zIndex, setZIndex] = useState<number[]>([0, 0, 0, 0, 0]);

  return (
    <CardWrapping>
      <Card id={0} text={"1"} color={"#f85050"} zIndex={zIndex} setZIndex={setZIndex}/>
      <Card id={1} text={"2"} color={"#d7f46e"} zIndex={zIndex} setZIndex={setZIndex}/>
      <Card id={2} text={"3"} color={"#aedd93"} zIndex={zIndex} setZIndex={setZIndex}/>
      <Card id={3} text={"4"} color={"#5779f3"} zIndex={zIndex} setZIndex={setZIndex}/>
      <Card id={4} text={"5"} color={"#d857ff"} zIndex={zIndex} setZIndex={setZIndex}/>
    </CardWrapping>
  );
};

export default Cards;

const CardWrapping = styled.div`
  display: flex;
  height: calc(100vh - 160px);
  justify-content: space-evenly;
  align-items: center;
`;

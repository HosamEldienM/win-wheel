import classes from "./gamePage.module.css";
import { useNavigate } from "react-router-dom";
import imgWheel from "./../assets/content-wheel.png";
import pointer from "./../assets/spin.png";
import { Button } from "../components/button";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Game = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const [rotateClass, setRotateClass] = useState()
  const [number , setNumber]=useState(Math.ceil(Math.random())*1010)
  
  const spinHandler = () => {
    const RotateClass = {transition:"3s",transform: `rotate(${number}deg)` };
    setRotateClass(RotateClass);
    setNumber(number + Math.ceil(Math.random()) * 1010);
    setTimeout(() => {
      dispatch({ type: "FINALAUTH" });
      navigate("/final");
    },3000)
 }
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <div className="relative  w-8/12  xl:w-4/12 ">
        <img style={rotateClass} src={imgWheel} alt="wheel details" />
        <img
          className="absolute w-1/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={pointer}
          alt="pointer"
        />
      </div>
      <Button onClick={spinHandler} width="w-4/12 xl:w-2/12">spin</Button>
    </div>
  );
};

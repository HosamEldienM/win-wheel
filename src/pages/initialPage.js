import React, { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./initialPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/button";
import wheel from "./../assets/wheeel.png";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.val,
      isValid: /[a-z0-9]+@[a-z]+\.[a-z]{3}/.test(action.val),
    };
  } else if (action.type === "EMAIL_BLUR") {
    return {
      value: state.value,
      isValid: /[a-z0-9]+@[a-z]+\.[a-z]{3}/.test(state.value),
    };
  } else {
    return { value: "", isValid: false };
  }
};
const phoneReducer = (state, action) => {
  if (action.type === "PHONE_INPUT") {
    return {
      value: action.val,
      isValid: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{6}$/.test(
        action.val
      ),
    };
  } else if (action.type === "PHONE_BLUR") {
    return {
      value: state.value,
      isValid: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6}$/.test(
        state.value
      ),
    };
  } else {
    return { value: "", isValid: false };
  }
};
export const Initial = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: "",
    isValid: null,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");

  // useEffect(() => {

  // },[phoneState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const phoneChangeHandler = (event) => {
    dispatchPhone({ type: "PHONE_INPUT", val: event.target.value });
  };
  const validatePhoneHandler = () => {
    dispatchPhone({ type: "PHONE_BLUR" });
  };

  const checkHandler = (event) => {
    setIsChecked(event.target.checked);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (emailState.isValid && phoneState.isValid && isChecked) {
      dispatch({ type: "GAMEAUTH" });
      navigate("/game");
    }
    if (!isChecked) {
      setValidationMsg("Please accept the terms and conditions");
    }
  };

  return (
    <div
      className={`${classes.container} flex flex-col  items-center h-screen md:flex-row  md:justify-between md:pr-10 xl:justify-evenly `}
    >
      <img
        className={`${classes.wheel} w-1/2 md:-ml-40 md:mt-0 xl:w-3/12 xl:m-0`}
        src={wheel}
        alt="win wheel"
      />

      <div
        className={`${classes.formContainer} w-10/12  flex flex-col  items-center mx-9 mt-14 md:w-6/12 xl:w-3/12 `}
      >
        <h1 className="font-poppins font-bold text-2xl">
          This is how EngageBud looks like in action!
        </h1>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.formItem} w-full bg-white flex flex-row justify-start  items-center py-2 mt-6 border-b-2 border-b-cyan-700 rounded`}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl mx-4" />
            <div>
              <label for="email" className="block font-medium text-gray-500 ">
                Email
              </label>
              <input
                id="email"
                type="email"
                className=" appearance-none  rounded w-full   text-gray-700 focus:outline-none focus:shadow-outline "
                placeholder="Joe@gmail.com"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
          </div>
          <div
            className={`${classes.formItem} w-full bg-white flex flex-row justify-start  items-center py-2 mt-6 border-b-2 border-b-cyan-700 rounded`}
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl mx-4" />
            <div>
              <label for="phone" className="block font-medium text-gray-500 ">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                className=" appearance-none  rounded w-full   text-gray-700 focus:outline-none focus:shadow-outline "
                placeholder="+91 98256 XXXXX"
                value={phoneState.value}
                onChange={phoneChangeHandler}
                onBlur={validatePhoneHandler}
              />
            </div>
          </div>
          <div
            className={`${classes.formItem} w-full  flex flex-row justify-start  items-center py-2 mt-6 border border-slate-900 rounded`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkHandler}
              className="form-checkbox h-8 w-16 text-slate-600 mx-4 "
            />
            <label className="text-xs">
              I agree to receiving recurring automated messages at the number I
              have provided. Consent is not a condition to purchase.
            </label>
          </div>
          {emailState.isValid === false && (
            <p className=" italic text-xs text-red-500 text-center">
              * invalid email{" "}
            </p>
          )}
          {phoneState.isValid === false && (
            <p className=" italic text-xs text-red-500 text-center">
              * invalid phone {phoneState.isValid}
            </p>
          )}
          {/* {!isChecked === true && (
            <p className=" italic text-xs text-red-500 text-center">* not checked </p>
          )} */}
          {!isChecked && (
            <p className=" italic text-xs text-red-500 text-center">
              {validationMsg}
            </p>
          )}
          <Button type="submit" width="w-full">
            try your luck
          </Button>
        </form>
        <p className="font-sans italic text-xs mt-2">
          *You can spin the wheel only once!
        </p>
        <p className="font-sans italic mt-2 text-xs text-center">
          *If you win, you can claim your coupon for 10 minutes only!
        </p>
        <p className="font-sans font-bold  mt-2 mb-2">
          No, I don't feel lucky X
        </p>
      </div>
    </div>
  );
};

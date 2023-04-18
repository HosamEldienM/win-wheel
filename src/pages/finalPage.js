import classes from "./finalPage.module.css"
import wheel from "./../assets/wheeel.png"
import { Button } from "../components/button";
export const Final = () => {
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
          className={`${classes.contentContainer} w-10/12  flex flex-col  items-center mx-10 mt-20 md:w-6/12 xl:w-3/12 xl:mt-0`}>
          <p className="font-poppins font-bold text-2xl">Congrats! You Won:</p>
          <h1 className="font-poppins font-bold text-center text-3xl">
            20% Off Coupon on Best Sellers
          </h1>
          <div className={`${classes.coupon}  w-10/12 mt-6`}>
            <input
              readOnly
              value={"XAXPDF20"}
              className={`${classes.couponValue} text-2xl font-bold leading-12 w-3/5  text-white p-2 rounded-l `}
            />
            <button
              className={`text-2xl font-bold bg-green-800 leading-12 p-2 px-4 text-white rounded-r`}
            >
              Copy
            </button>
          </div>
          <Button width="w-full">Close Panel & Copy</Button>
          <p className="font-sans italic text-xs mt-2">
            *You can claim your coupon for 10 minutes only!
          </p>
        </div>
      </div>
    );
}
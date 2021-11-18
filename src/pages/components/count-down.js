import { useEffect, useState } from "react";
import styleText from "../css/text-fonts.module.css";
import style from "./count-down.module.css";

const CountDown = ({ endDate }) => {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    // const difference = +new Date(`${year}-12-1 11:00:00`) - +new Date();
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        päeva: Math.floor(difference / (1000 * 60 * 60 * 24)),
        tundi: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={"id" + interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <>
      <div className={style.countDown} key={timerComponents.index}>
        <span className={styleText.textLargerOrange}>
          {timerComponents.length ? timerComponents : <span>Oksjon läbi!</span>}
        </span>
      </div>
      <div>
        <span className={styleText.textMediumGray}>oksjoni lõpuni</span>
      </div>
    </>
  );
};

export default CountDown;

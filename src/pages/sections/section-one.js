import style from "./section-one.module.css";
import imgTop from "../../images/top.png";
import imgMobileTop from "../../images/mobile-top-cut.png";

const SectionOne = ({ mobile }) => {
  let getImg = imgTop;

  if (mobile) {
    getImg = imgMobileTop;
  }

  return (
    <div className={style.section1}>
      <img className={style.section1} src={getImg} alt="Top" />
    </div>
  );
};

export default SectionOne;

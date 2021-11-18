import style from "./section-one.module.css";
import imgTop from "../../images/top.png";
import imgMobileTop from "../../images/mobile-top-cut.png";
import imgArrow from "../../images/arrow.png";
import ShowIf from "../components/show-if";

const SectionOne = ({ mobile }) => {
  let getImg = imgTop;

  if (mobile) {
    getImg = imgMobileTop;
  }

  return (
    <div className={style.section1}>
      <img className={style.section1} src={getImg} alt="Top" />
      <ShowIf condition={!mobile}>
        <img className={style.section1Arrow} src={imgArrow} alt="Arrow" />
      </ShowIf>
    </div>
  );
};

export default SectionOne;

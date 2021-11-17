import style from "./section-one.module.css";
import imgTop from "../../images/top.png";

const SectionOne = () => {
  return (
    <div className={style.section1}>
      <img className={style.section1} src={imgTop} alt="Top" />
    </div>
  );
};

export default SectionOne;

import style from "./main-page.module.css";
import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";

const MainPage = () => {
  return (
    <div className={style.body}>
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SectionFive />
    </div>
  );
};

export default MainPage;

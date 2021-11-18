import style from "./main-page.module.css";
import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";
import { useEffect, useState } from "react";
import deviceIsMobile from "./components/device-is-mobile";
import { getItem } from "../actions";

const MainPage = () => {
  const [mobile, setMobile] = useState(false);
  const [data, setData] = useState({});
  const url = `/api/items/active/166039116`;

  useEffect(() => {
    (async function () {
      if (deviceIsMobile()) {
        setMobile(true);
      }
      await getItem(url, setData);
    })();
  }, []);

  console.log(data);

  return (
    <div className={style.body}>
      <SectionOne mobile={mobile} />

      <SectionTwo mobile={mobile} data={data} />

      <SectionThree mobile={mobile} />

      <SectionFour mobile={mobile} />

      <SectionFive />
    </div>
  );
};

export default MainPage;

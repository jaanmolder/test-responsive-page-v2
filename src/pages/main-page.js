import style from "./main-page.module.css";
import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";
import { useEffect, useState } from "react";
import deviceIsMobile from "./components/device-is-mobile";
import { getItem } from "../actions";
import ShowIf from "./components/show-if";

const MainPage = () => {
  const [mobile, setMobile] = useState(false);
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const ids = [166039116, 142388943];
  const id = ids[Math.floor(Math.random() * ids.length)];
  const url = `/api/items/active/${id}`;

  useEffect(() => {
    (async function () {
      if (deviceIsMobile()) {
        setMobile(true);
      }
      await getItem(url, setData);
      setLoaded(true);
    })();
  }, [url]);

  return (
    <div className={style.body}>
      <SectionOne mobile={mobile} />
      <ShowIf condition={loaded}>
        <SectionTwo mobile={mobile} data={data} />
      </ShowIf>
      <SectionThree mobile={mobile} />
      <SectionFour mobile={mobile} />
      <SectionFive />
    </div>
  );
};

export default MainPage;

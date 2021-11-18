import style from "./section-two.module.css";
import styleText from "../css/text-fonts.module.css";
import CountDown from "../components/count-down";

const SectionTwo = ({ mobile, data }) => {
  const getDateEndUnixTime = data.dateEnd;

  let secConStyle = style.section2Container;

  if (mobile) {
    secConStyle = style.section2ContainerMobile;
  }

  return (
    <div className={style.section2}>
      <div>
        <span className={styleText.textLarger}>
          <span className={styleText.textMediumGray}>Viimati Lõppenud</span>
          <br />
          <br />
          <div className={secConStyle}>
            <div className={style.section2Help}>
              <img
                className={style.section2Image}
                src={data.imageUrl}
                alt="Item"
              />
            </div>
            <div className={style.section2DetailsMain}>
              <br />
              {data.title}
              <div className={style.section2Details}>
                <div className={style.section2DetailsEur}>
                  <br />
                  <span className={styleText.textLargerOrange}>
                    {data.currentPriceEur}€
                  </span>
                  <br />
                  hetke hind
                </div>
                <div>
                  <br />
                  <CountDown endDate={getDateEndUnixTime} />
                </div>
                <div className={style.section2DetailsPakkuja}>
                  <br />
                  <span className={styleText.textLargerOrange}>
                    {data.currentBids}
                  </span>
                  <br />
                  pakkumist
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default SectionTwo;

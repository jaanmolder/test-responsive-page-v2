import style from "./section-four.module.css";
import styleText from "../css/text-fonts.module.css";
import iconEmail from "../../images/envelope.png";
import iconPhone from "../../images/phone.png";

const SectionFour = ({ mobile }) => {
  let secStyle = style.section4Section2Grid2;
  let secPattern = style.section4;

  if (mobile) {
    secStyle = style.section4SectionMobile;
    secPattern = style.section4Mobile;
  }

  return (
    <div className={secPattern}>
      <div className={style.section4SectionGrid1}>
        <div>
          <span className={styleText.textLarger}>
            <br />
            WANT HIGHER?
            <br />
            <br />
          </span>
          Before the experiments most physicist believed in an objective,
          independent universe. They still clung to the assumption that physical
          states exist in some absolute sense before they are measured.
        </div>
      </div>

      <div className={secStyle}>
        <div>
          <br />
          <br />
          <span className={styleText.textLarger}>CONTACT US</span>
          <br />
          <br />
          Before these experiments most
          <br />
          <br />
          <img src={iconEmail} alt="Email" className={style.icon} />{" "}
          info@allepal.ee
          <br />
          <br />
          <img src={iconPhone} alt="Phone" className={style.icon} /> +372
          65656565
          {/*<br />*/}
          {/*<br />*/}
        </div>
        <div>
          <br />
          <br />
          <span className={styleText.textLarger}>LOCATION</span>
          <br />
          <br />
          AllPal OÜ
          <br />
          Pärnu maantee 139 / Kohila 8<br />
          11317 Tallinn, Estonia
          <br />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

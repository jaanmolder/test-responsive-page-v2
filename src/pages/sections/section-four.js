import style from "./section-four.module.css";
import styleText from "../css/text-fonts.module.css";
import iconEmail from "../../images/envelope.png";
import iconPhone from "../../images/phone.png";

const SectionFour = () => {
  return (
    <div className={style.section4}>
      <div className={style.section4Section1}>
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

      <div className={style.section4Section2}>
        <div>
          <br />
          <br />
          <span className={styleText.textLarger}>CONTACT US</span>
          <br />
          <br />
          Before these experiments most
          <br />
          <br />
          <img src={iconEmail} alt="Email" /> info@allepal.ee
          <br />
          <br />
          <img src={iconPhone} alt="Phone" /> +372 65656565
          <br />
          <br />
        </div>
        <div>
          <br />
          <br />
          <span className={styleText.textLarge}>LOCATION</span>
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

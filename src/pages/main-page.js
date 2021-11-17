import style from "./main-page.module.css";
import imgTop from "../images/top.png";
import iconPhone from "../images/phone.png";
import iconEmail from "../images/envelope.png";
import GoogleMaps from "./components/google-maps";

const MainPage = () => {
  return (
    <div className={style.body}>
      <div className={style.section1}>
        <img className={style.section1} src={imgTop} alt="Top" />
      </div>

      <div className={style.section2}>
        <div>
          <span className={style.textLarger}>
            <br />
            IS THE WEB POSSIBLE <br />
            WITHOUT SPIDER?
            <br />
            <br />
          </span>
          Are space and time physical objects that would continue to exist even
          if living creatures were removed from the scene?
          <br />
          <br />
          Figuring out nature of the real world has obsessed scientist and
          philosophers for millennia. Three hundred years ago, the Irish
          empiricist George Berkeley contributed a particularly prescient
          observation: The only thing we perceive are our perceptions.
        </div>

        <div>
          <span className={style.textLarge}>COLOUR, SOUND</span>
          <br />
          <br />
          Color, sound, temperature, and the like exist only as perceptions in
          our head, not as absolute essences. In the broadest sense, we cannot
          be sure of an outside universe at all.
          <br />
          <br />
          <span className={style.textLarge}>TEMPERATURE</span>
          <br />
          <br />
          For centuries, scientist regarded Berkeley's argument as a
          philosophical sideshow and continued to build physical models based on
          the assumption of separate universe "out there" into which we have
          each individually arrived.
        </div>
      </div>

      <div className={style.section3}>
        <div>
          <span className={style.textLarger}>
            <br />
            MESSING WITH THE LIGHT
            <br />
            <br />
          </span>
          <ul>
            <li>
              Quantum mechanics is the physicist's most accurate model for
              describing the world of the atom.
            </li>
            <br />
            <br />
            <li>
              But it also makes some of the most persuasive arguments that
              conscious perception is integral the workings of the universe.
            </li>
            <br />
            <br />
            <li>Quantum theory tells us that an unobserved small object.</li>
          </ul>
        </div>

        <div>
          <span className={style.textLarger}>
            <br />
            WHAT ACCOMPLISHES THE COLLAPSE?
            <br />
            <br />
          </span>
          What accomplishes thus collapse? Messing with it. Hitting it with a
          bit of light in order to take its picture. Just looking at it does the
          job.
          <br />
          <br />
          Experiments suggest that mere knowledge in the experimenter's mind is
          sufficient to collapse a wave function and convert possibility to
          reality.
        </div>
      </div>

      <div className={style.section4}>
        <div className={style.section4Section1}>
          <div>
            <span className={style.textLarger}>
              <br />
              WANT HIGHER?
              <br />
              <br />
            </span>
            Before the experiments most physicist believed in an objective,
            independent universe. They still clung to the assumption that
            physical states exist in some absolute sense before they are
            measured.
          </div>
        </div>

        <div className={style.section4Section2}>
          <div>
            <br />
            <br />
            <span className={style.textLarger}>CONTACT US</span>
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
            <span className={style.textLarge}>LOCATION</span>
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

      <GoogleMaps />
    </div>
  );
};

export default MainPage;

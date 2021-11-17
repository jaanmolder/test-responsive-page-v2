import style from "./section-three.module.css";
import styleMain from "../main-page.module.css";

const SectionThree = () => {
  return (
    <div className={style.section3}>
      <div>
        <span className={styleMain.textLarger}>
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
        <span className={styleMain.textLarger}>
          <br />
          WHAT ACCOMPLISHES THE COLLAPSE?
          <br />
          <br />
        </span>
        What accomplishes thus collapse? Messing with it. Hitting it with a bit
        of light in order to take its picture. Just looking at it does the job.
        <br />
        <br />
        Experiments suggest that mere knowledge in the experimenter's mind is
        sufficient to collapse a wave function and convert possibility to
        reality.
      </div>
    </div>
  );
};

export default SectionThree;

import style from "./section-two.module.css";
import styleText from "../css/text-fonts.module.css";

const SectionTwo = () => {
  return (
    <div className={style.section2}>
      <div>
        <span className={styleText.textLarger}>
          <br />
          IS THE WEB POSSIBLE <br />
          WITHOUT SPIDER?
          <br />
          <br />
        </span>
        Are space and time physical objects that would continue to exist even if
        living creatures were removed from the scene?
        <br />
        <br />
        Figuring out nature of the real world has obsessed scientist and
        philosophers for millennia. Three hundred years ago, the Irish
        empiricist George Berkeley contributed a particularly prescient
        observation: The only thing we perceive are our perceptions.
      </div>
      <div>
        <span className={styleText.textLarge}>COLOUR, SOUND</span>
        <br />
        <br />
        Color, sound, temperature, and the like exist only as perceptions in our
        head, not as absolute essences. In the broadest sense, we cannot be sure
        of an outside universe at all.
        <br />
        <br />
        <span className={styleText.textLarge}>TEMPERATURE</span>
        <br />
        <br />
        For centuries, scientist regarded Berkeley's argument as a philosophical
        sideshow and continued to build physical models based on the assumption
        of separate universe "out there" into which we have each individually
        arrived.
      </div>
    </div>
  );
};

export default SectionTwo;

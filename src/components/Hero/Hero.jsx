import Button from "../../utils/commonComponents/Button/Button";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section flex absolute-center flex-col max-width">
        <div className="hero-heading ">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText={"Download CRED"} />
      </div>
    </div>
  );
}
export default Hero;

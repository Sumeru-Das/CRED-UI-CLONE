import Button from "../../utils/commonComponents/Button/Button";
import "./feelSpecial.css";


const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading">
              feel special more often.
            </div>
            <div className="photo-section-subheading">
              exclusive rewards for paying your bills
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRE, good
              begets good.
            </div>
            <div>
              <Button buttonText="Explore rewards"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeelSpecial;

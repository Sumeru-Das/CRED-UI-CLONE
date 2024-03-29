import Button from "../../utils/commonComponents/Button/Button";
import "./credSecurity.css";

const CredSecurity = () => {
  return (
    <div className="cred-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-security-heading">
              security first. and second.
            </div>
            <div className="photo-section-subheading">
              what's yours remains only yours.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-security-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what's yours remains only yours. there's
              no room for mistakes because we didn't leave any.
            </div>
            <div>
              <Button buttonText="Become a member"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CredSecurity;

import "./button.css";

const Button = ({ buttonText, customClass, prefix }) => {
  return (
    <div className={`button-wrapper flex absolute-center ${customClass} `}>
      {prefix} {buttonText}
    </div>
  );
};
export default Button;

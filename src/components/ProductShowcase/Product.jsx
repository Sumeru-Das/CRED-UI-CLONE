import "./product.css";
import first from "../../assets/IMG/1.png";
import left_1 from "../../assets/IMG/left-1.png";
import left_2 from "../../assets/IMG/left-2.png";
import right_1 from "../../assets/IMG/right-1.png";
import right_2 from "../../assets/IMG/right-2.png";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Product = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div className="product-showcase">
      <div
        className={`${showAnimation ? "scale-in-bottom" : ""} showcase-main`}
        ref={ref}
      >
        {showAnimation && (
          <div className="showcase-wrapper">
            <img src={first} className="showcase-ui showcase-mockup-1" />
            <img src={left_1} className="showcase-ui showcase-mockup-2" />
            <img src={left_2} className="showcase-ui showcase-mockup-3" />
            <img src={right_1} className="showcase-ui showcase-mockup-4" />
            <img src={right_2} className="showcase-ui showcase-mockup-5" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Product;

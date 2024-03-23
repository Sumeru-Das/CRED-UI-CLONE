import AppRating from "../components/AppRating/AppRating";
import BrandsLove from "../components/BrandsLove/BrandsLove";
import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import CredStory from "../components/CredStory/CredStory";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import Product from "../components/ProductShowcase/Product";
import WindowPeek from "../components/WindowPeek/WindowPeek";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
}
export default HomePage;

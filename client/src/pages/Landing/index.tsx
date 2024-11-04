import Header from "../../components/Header";
import SplashSection from "../../components/Splash-section";
import Hero from "../../components/Hero";
import ScrollContainer from "../../components/Scroll-Container";
import SubFooter from "../../components/Footer/SubFooter";
import Footer from "../../components/Footer/Footer";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <SplashSection />
      <Hero />
      <ScrollContainer />
      <SubFooter />
      <Footer />
    </>
  );
};

export default LandingPage;

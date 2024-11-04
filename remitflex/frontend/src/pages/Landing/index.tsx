import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";

const LandingPage: () => JSX.Element = () => {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </>
  );
};

export default LandingPage;

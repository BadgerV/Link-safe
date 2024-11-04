import { SplashImageContainer, SplashSectionContainer } from "./Splash-section.styles";
import CustomButton from "../Button";
import Sponsors from "../Sponsors/Sponsors";
import { useNavigate } from "react-router-dom";

export const SplashSection = () => {
  const navigate = useNavigate();
  return (
    <SplashSectionContainer>
      <h1>
        <span>
          The Link <img src={"/assets/svg/logo.svg"} alt="logo" className="logo-splash" /> is{" "}
        </span>
        <span>
          {" "}
          your <span className="vault-">Safe</span>
        </span>
      </h1>
      <p className="sub__text">Non-custodial algorand wallets via a Link. </p>
      <CustomButton variant="filled" type="button" onClick={() => navigate("/create")}>
        Create a LinkSafe
      </CustomButton>
      <SplashImageContainer src={"/assets/png/splash.png"} alt="splash" />
      <Sponsors />
    </SplashSectionContainer>
  );
};

export default SplashSection;

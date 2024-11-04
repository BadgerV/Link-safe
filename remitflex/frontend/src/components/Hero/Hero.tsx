import Button from "../Button/Button";
// import { LeftFlex, RightFlex, TitleContainer, Wrapper } from "./Hero.styles"
import { HeroContainer } from "./Hero.styles";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <div className="hero__left">
        <h3>
          Send money & <br className="break" /> pay bills in Africa
        </h3>
        <p className="scan">Scan your LinkSafe to get started</p>
        <div className="btnGo">
          <Button title="Go to App" onClick={() => navigate("/app")} />
        </div>

        <p className="powered">
          powered by
          <img className="powerImg icon" src="/assets/link-icon.png" alt="powered" />
          <img
            className="powerImg"
            src="/assets/linksafe-icon.png"
            alt="powered"
          />
        </p>
      </div>
      <div className="hero__right">
        <img src="/assets/right.png" alt="hero" />
      </div>
    </HeroContainer>
  );
};

export default Hero;

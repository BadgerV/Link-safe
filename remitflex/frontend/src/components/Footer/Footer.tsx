import { Main } from "./Footer.styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <div>
        <div className="contain">
          <h3>What are you waiting for?</h3>
          <h3>Get started!</h3>

          <div className="Goto" onClick={() => navigate("/app")}>
            Go to App
          </div>
          <div className="end">
            <p>© Remitflex2024</p>
          </div>
          <div className="paper">
            <img src="/assets/paperplane.png" alt="" />
          </div>
          <div className="home">
            <img src="/assets/home.png" alt="" />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Footer;

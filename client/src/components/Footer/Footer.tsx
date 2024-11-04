import { FooterContainer } from "./Footer.styles";
import CustomButton from "../Button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <div className="FooterDiv">
        <p className="ready">
          Ready to create Your <br /> Magical Link-Heaven
        </p>
        <CustomButton
          variant="filled"
          type="button"
          className="btn"
          onClick={() => navigate("/create")}
        >
          Create a linkSafe
        </CustomButton>
      </div>
      <p className="build">Created for Algorand's Build a Bull Hackathon</p>
    </FooterContainer>
  );
};

export default Footer;

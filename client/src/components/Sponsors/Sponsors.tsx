import { SponsorsContainer } from "./Sponsors.styles";

export const Sponsors = () => {
  return (
    <SponsorsContainer>
      Powered by <img src={"/assets/svg/algorand.svg"} alt="algorand" className="algorand" />
      algorand and
      <img src={"/assets/svg/circle.svg"} alt="circle" className="circle" />
    </SponsorsContainer>
  );
};

export default Sponsors;

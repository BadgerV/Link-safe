import { SubFooterContainer } from "./SubFooter.styles";

const SubFooter = () => {
  return (
    <SubFooterContainer>
      <div className="SubFooterDiv">
        <div className="shareDiv">
          <p className="share">
            Share <br /> Crypto via <br /> juat a link<span className="dot">.</span>
          </p>
          <div className="perfect">
            <p>perfect for</p>
            <p className="gifts">gifts</p>
            <p className="gifts">payments</p>
            <p className="gifts">savings</p>
          </div>
        </div>
        <div className="shareimg">
          <img src={"/assets/png/share.png"} alt="share" />
        </div>
      </div>
    </SubFooterContainer>
  );
};

export default SubFooter;

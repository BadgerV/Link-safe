import styled from "styled-components";

export const Image = styled.img`
  position: relative;
  width: 30px;
  height: 35.5px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  .link-wrapper {
    display: flex;
    text-decoration: none;
    gap: 0.5rem;

    p {
      margin-top:;
    }
  }
`;
export const HeaderTextsDiv = styled.div`
  display: flex;
  margin-top: 1.8rem;
`;
export const HeaderLinks = styled.a`
  color: #a9a9a9;
  font-size: 17px;
  cursor: pointer;
  opacity: 0.7rem;
  font-family: Sora-Regular;
  text-decoration: none;
  &:hover {
    color: #409099;
  }
`;
export const Text = styled.p`
  color: #409099;
  font-family: "var(--font-family-nista)", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  span {
    color: #6ec06c;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    font-family: var(--font-family-nista);
    line-height: normal;
  }
`;

// header connect wallet styles
export const HeaderConnectWallet = styled.button`
  display: flex;
  gap: 0.7rem;
  border: solid 1px #000000;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;

  .connect {
    @media screen and (max-width: 400px) {
      display: none;
    }
  }

  img {
    width: 1.1rem;
  }

  span {
    font-family: var(--font-family-nista);
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;

    @media screen and (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
  .dropDownConnect__items {
    right: 0;
    position: absolute;
    flex-direction: column;
    background: #880808;
    border-radius: 8px;
    display: none;
    border: 1px;
    top: 37.7px;
    width: 100%;
  }
  &:hover .dropDownConnect__items {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .dropDownConnect_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    jusitfy-content: center;
    cursor: pointer;
    gap: 1rem;

    p {
      font-family: Sora-Regular;
      font-style: normal;
      font-weight: 400;
      font-size: 0.9rem;
      color: whitesmoke;
    }
  }
`;

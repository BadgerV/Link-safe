import styled from "styled-components";
// import { flexCenter, flexRowBetween } from "../../styles/__mixins";
export const FooterContainer = styled.div`
  height: 20rem;
  padding-top: 2rem;
  background-image: url("/assets/png/foot.png");
  background-size: cover;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    background-size: 200% 100%;
  }
  .FooterDiv {
    position: relative;
    width: inherit;
  }
  .ready {
    font-size: 3.4rem;
    color: white;
    font-weight: bold;
    padding-bottom: 2rem;
    font-family: var(--font-family-geom);
  }
  .btn {
    border-radius: 999em;
    padding: 0.5rem 1rem;
    postion: absolute;
    margin-left: 10rem;

    background-color: #E53F71;
  }
  .build {
    margin-top: 2rem;
    font-family: var(--font-family-nista);
  }

  @media only screen and (max-width: 768px) {
    .ready {
      font-size: 1.6rem;
      padding-bottom: 2rem;
      font-family: var(--font-family-geom);
    }
    .build {
      margin-top: 2rem;
      font-size: 0.7rem;
      font-family: var(--font-family-nista);
    }
    .btn {
      postion: absolute;
      margin-left: 3.3rem;
      font-size: 0.8rem;
    }
  }
`;

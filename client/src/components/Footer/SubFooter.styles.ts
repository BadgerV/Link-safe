import styled from "styled-components";
// import { flexCenter, flexRowBetween } from "../../styles/__mixins";
export const SubFooterContainer = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .SubFooterDiv {
    display: flex;
    justify-content: between;
    align-items: center;

    width: 80%;
  }
  .shareDiv {
    width: 50%;
    padding-left: 2rem;
  }
  .share {
    color: #3f1651;
    font-size: 3.8rem;
    font-weight: bold;
    font-family: var(--font-family-geom);
    padding-bottom: 2rem;
  }
  .dot {
    color: #E53F71;
  }
  .perfect {
    padding-top: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-nista);
  }

  .gifts {
    border: 0.5px solid #E53F71;
    color: #E53F71;
    border-radius: 2rem;
    padding: 5px 10px;
    cursor: pointer;
  }
  .shareimg {
    width: 40%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 2.3rem;
    .SubFooterDiv {
      flex-direction: column;
      width: 100%;
      justify-content: center;
    }
    .shareDiv {
      width: 100%;
      padding-left: 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;
    }
    .share {
      font-size: 2.8rem;
    }
    .perfect {
      font-size: 0.8rem;
      padding-top: 0.5rem;
      gap: 5px;
    }
    .gifts {
      padding: 2.5px 5px;
    }
  }
`;

import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 22px;
  border: 1px solid #653780;
  background: linear-gradient(180deg, rgba(254, 247, 249, 0) 0%, #fef7f9 100%);
  box-shadow: 0px 23px 28px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  ${flexCenter()};
  flex-direction: column;
  width: 600px;
  margin: auto;
  padding: 3rem;
  gap: 2rem;

  .link__amount {
    @media screen and (max-width: 500px) {
      width: 92% !important;
    }
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 2rem;
  }

  .empty__link {
    font-family: var(--font-family-nista);
    font-size: var(--font-size-s);
    color: #e53f71;
    cursor: pointer;
  }

  h2 {
    font-family: var(--font-family-nista);
    font-weight: 600;
    color: var(--vault-primary);
    margin-right: auto;
  }

  .dropdown__icon:hover,
  .dropdown__icon:active {
    filter: invert(41%) sepia(0%) saturate(2%) hue-rotate(47deg) brightness(95%) contrast(91%);
  }

  .link__amount {
    width: 100%;
    ${flexCenter()};
    gap: 0.6rem;
    flex-direction: column;
    // padding : 0rem 1rem;

    h3 {
      font-family: var(--font-family-nista);
      color: var(--vault-primary);
      font-weight: 600;
      margin-right: auto;
    }
  }

  .input__amount {
    border: solid 1px var(--vault-primary);
    border-radius: 10px;
    ${flexCenter()};
    justify-content: space-between;
    width: 90%;
    padding: 1rem 1.5rem;
    font-family: var(--font-family-nista);
    font-size: var(--font-size-s);
  }

  button {
    width: 100%;
    padding: 0.8rem;
    background: #e53f71 !important;
  }
`;

import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";

export const LaunchContainer = styled.div`
  ${flexCenter()};
  flex-direction: column;
  width: 500px;
  margin: auto;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  .launch__ {
    width: 500px !important;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
      width: 90% !important;
    }

    @media screen and (max-width: 464px) {
      width: 95% !important;
    }

    @media screen and (max-width: 400px) {
      width: 97% !important;
    }
  }

  .popup__third {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    border: solid 1px var(--vault-primary);
    border-radius: 6px;
    cursor: not-allowed;
    background: whitesmoke;
    opacity: 0.5;
  }

  .popup__modal {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    .deposit {
      font-size: 1rem;
      margin-top: 1rem;
      font-family: var(--font-family-nista);
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--vault-black);
      font-family: var(--font-family-geom);
      margin-bottom: 1rem;
    }

    .popup__container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
      width: 100%;
      border: solid 1px var(--vault-primary);
      border-radius: 6px;
      padding: 1rem;
      gap: 2rem;

      h3 {
        font-size: 1rem;
      }
    }

    .popup__first,
    .popup__second {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      padding: 0.5rem;
      border: solid 1px var(--vault-primary);
      border-radius: 6px;
      cursor: pointer;
      background: #e53f7124;
      &:hover {
        background: #e53f71;
        color: white;
      }
    }
  }

  .owned__assets {
    position: unset !important;
    width: 100% !important;
    max-height: 14rem;
  }

  .copy__icon {
    width: 18px;
  }

  button {
    > div {
      gap: 0.5rem;
    }
  }

  .button__transparent {
    background: white !important;
    border: 1px solid #653780 !important;
    color: var(--vault-primary) !important;
  }

  .launch__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .launch__body {
    border: solid 2px var(--vault-primary);
    background: linear-gradient(180deg, rgba(254, 247, 249, 0) 0%, #fef7f9 100%);
    box-shadow: 0px 23px 28px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    width: 100%;
    padding: 3rem;

    @media screen and (max-width: 500px) {
      padding: 1rem 1rem;
    }

    .buttons__container {
      ${flexCenter()};
      justify-content: space-between;
      margin-top: 4rem;
      width: 100%;
      gap: 0.9rem;

      button {
        width: 80%;
        padding: 0.6rem 0rem;
      }

      .claim__button {
        background: #e53f71;
      }

      .deposit__button {
        background: transparent;
        color: var(--vault-primary);
        border: 1px solid var(--vault-primary);
      }
    }
  }
`;

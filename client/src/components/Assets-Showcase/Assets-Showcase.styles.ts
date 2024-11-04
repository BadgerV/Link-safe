import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";

export const AssetsShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .link__container {
    width: 100%;
  }
  .params-select {
    color: black !important;
  }
  .unset-params {
    color: unset;
  }
  .link-span {
    @media screen and (max-width: 500px) {
      font-size: 0.8rem !important;
    }
  }
  .link__types {
    border: solid 1px var(--vault-primary);
    border-radius: 10px;
    ${flexCenter()};
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1rem;
    cursor: pointer;

    .link-span {
      font-family: var(--font-family-nista);
      font-size: var(--font-size-s);
      color: #bfb1c5;
      cursor: pointer;
    }

    .asset-selected {
      color: black;
    }
  }

  .selected__link {
    &__item {
      ${flexCenter()};
      font-family: var(--font-family-nista);
      font-size: var(--font-size-s);
      color: var(--vault-primary);
      font-weight: 400;
      gap: 0.5rem;

      img {
        width: 17px;
        height: 17px;
      }
    }
  }

  .owned__assets {
    width: 500px;
    position: absolute;
    background: white;
    padding: 1rem;
    z-index: 3;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    background: #fff;
    box-shadow:
      0px 16px 48px 0px rgba(0, 0, 0, 0.1),
      0px 8px 24px 0px rgba(0, 0, 0, 0.1);
    margin-top: 4px;
    min-height: 10rem;
    max-height: 20rem;
    overflow-y: auto;

    h3 {
      font-family: var(--font-family-nista);
      font-size: var(--font-size-s);
      margin: 0.5rem 0rem 0.5rem;
    }
    p {
      font-family: var(--font-family-nista);
    }
  }
`;

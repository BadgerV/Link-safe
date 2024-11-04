import styled from "styled-components";
import { flexCenter, flexRowBetween } from "../../styles/__mixins";

export const HeaderContainer = styled.div`
  ${flexRowBetween()};
  padding: 2rem;

  .target__blank {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 1rem;
  }

  .copy__icon {
    width: 18px;
  }

  .disconnect {
    width: 10rem !important;
    right: 1.2rem !important;
  }

  .address__button {
    background: white;
    border: 1px solid #653780;
    gap: 0.3rem;
    display: flex;

    .address__ {
      font-family: var(--font-family-nista);
      font-size: 14px;
      color: black;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 2rem;
  }
  // @media screen and (max-width: 360px) {
  //   width: 1rem;
  // }

  h2 {
    font-weight: 700;
    font-size: var(--font-size-m);
    color: var(--vault-primary);
    font-family: var(--font-family-geom);

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    // @media screen and (max-width: 360px) {
    //   font-size: 0.8rem;
    // }
  }
`;

export const HeaderAddons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    gap: 0.5rem;
  }
  @media screen and (max-width: 360px) {
    gap: 0.5rem;
  }

  .header__addons__items {
    font-size: var(--font-size-s);
    font-family: var(--font-family-nista);
    ${flexCenter()};
    gap: 0.5rem;
    color: #e53f71;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    // @media screen and (max-width: 360px) {
    //   font-size: 0.57rem;
    // }
  }

  button {
    > div {
      gap: 0.5rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    // @media screen and (max-width: 360px) {
    //   font-size: 0.6rem;
    // }
  }
`;

export const HeaderDropdown = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;

  .dropdown {
    right: 0rem;
    top: 6rem;
    position: absolute;
    flex-direction: column;
    filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1));
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    display: none;
    border: 0.05rem;
    border-radius: 0.5rem;
    z-index: 100;
    width: 18.5rem;

    @media screen and (max-width: 550px) {
      top: 4.9rem;
    }

    &__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.625rem 0.8rem;
      background-color: #ffffff;
      gap: 1rem;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      color: unset;

      &:hover {
        background: #ebebeb;
      }

      &__img {
        width: 1.25rem;
        height: 1.25rem;
        overflow: hidden;
        display: flex;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        color: #959595;
        img,
        svg {
          width: 1.25rem;
          height: 1.25rem;
          object-fit: cover;
          filter: unset;
        }
      }
      p {
        font-family: var(--font-family-nista);
        font-style: normal;
        font-weight: 500;
        font-size: 0.9rem;
        display: flex;
        margin: unset;
      }
    }
  }

  &:hover .dropdown {
    display: flex;
  }

  .disconnect__wallet {
    background: transparent;
    font-family: var(--font-family-nista);
    color: red;
  }
`;

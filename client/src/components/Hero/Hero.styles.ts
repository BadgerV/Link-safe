import styled from "styled-components";
import { flexCenter, flexRowBetween } from "../../styles/__mixins";

export const HeroContainer = styled.div`
  background: #EDF6F7;
  height: 50vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeroSection = styled.div`
  width: 100vw;
  height: 50vh;
  scroll-snap-align: start;
  transition: white 0.3s ease; /* Add a smooth background color transition */
  ${flexCenter()}

  &:nth-child(1) {
    transition-delay: 0.5s;
  }

  &:nth-child(2) {
    transition-delay: 1s;
  }

  &:nth-child(3) {
    transition-delay: 1.5s;
  }
`;

export const HeroSectionContent = styled.div`
  border-radius: 17px;
  background: #fff;
  box-shadow: 0px 9px 14px 0px rgba(246, 191, 208, 0.5);
  width: 700px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    margin: 20px;
  }

  .hero__header {
    ${flexRowBetween()};

    h2 {
      font-family: var(--font-family-geom);
      font-weight: 600;
      font-size: var(--font-size-m);
      color: var(--vault-primary);
    }

    .hero__img {
      margin-top: -50px;
    }
  }
  .hero__description {
    font-family: var(--font-family-nista);
    font-size: var(--font-size-s);
    color: var(--vault-black);
  }
`;

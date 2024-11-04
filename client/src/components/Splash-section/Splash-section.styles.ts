import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";
import { gradientAnimation } from "../../styles/__animations";

export const SplashSectionContainer = styled.div`
  --color-light-purple: rgb(207, 89, 230);
  --color-light-whitesmoke: #e53f71;

  ${flexCenter()};
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;

  h1 {
    font-family: var(--font-family-geom);
    font-weight: 600;
    font-size: 70px;
    color: #3f1651;
    ${flexCenter()};
    flex-direction: column;
    @media screen and (max-width: 550px) {
      font-size: 50px;
    }

    .logo-splash {
      width: 86px;
      height: 90px;
      margin-left: -17px;
      margin-bottom: -10px;
      @media screen and (max-width: 550px) {
        width: 45px;
        margin-left: -14px;
        margin-bottom: -24px;
      }
    }

    .vault- {
      background: linear-gradient(
        -45deg,
        var(--color-light-whitesmoke),
        var(--color-light-purple),
        var(--color-light-whitesmoke),
        var(--color-light-purple)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400% 400%;
      animation: ${gradientAnimation} 3s ease infinite;
    }
  }

  .sub__text {
    font-size: var(--font-size-m);
    font-family: var(--font-family-nista);
    @media screen and (max-width: 550px) {
      font-size: var(--font-size-s);
    }
  }

  button {
    border-bottom: 4px solid #e53f71;
    padding: 10px 40px;
  }
`;

export const SplashImageContainer = styled.img`
  width: 100%;
  max-width: 30rem;
  height: auto;
`;

import styled from "styled-components";

interface ScrollSectionProps {
  visible: Boolean;
}

type CustomScrollBarProps = {
  scrollPercentage: number;
};

export const ScrollContainerP = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  max-height: 100vh;
  padding: 3rem 0rem;
  background: url("/assets/png/hero.png");
  background-size: 100% 110%;
  overflow-y: scroll;
  gap: 2rem;

  @media screen and (max-width: 900px) {
    padding: 2rem 1rem;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
      padding: 1rem 0.3rem;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }

  .scroll__percent {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  margin-bottom: 2rem;
  padding-bottom: -3rem;
`;

export const ScrollSection = styled.div<ScrollSectionProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: ${props => (props.visible ? 1 : 0.5)};
  transition: opacity 0.5s;
  color: #fff;
  padding: 0rem 20rem;

  @media screen and (max-width: 1390px) {
    padding: 0rem 4rem;
  }
  @media screen and (max-width: 900px) {
    opacity: 0.8;
    padding: 0rem 1rem;

    h2 {
      font-size: 1.1rem;
    }
  }

  .section__first__content {
    display: flex;
    // flex-wrap: no-wrap;
    flex-direction: column;
    // white-space: nowrap;

    @media screen and (max-width: 900px) {
      gap: 0.5rem;
    }
  }

  h1 {
    font-size: 2rem;
    font-family: var(--font-family-geom);
    font-weight: 700;
  }
  h2 {
    font-size: 1.5rem;
    font-family: var(--font-family-geom);
    font-weight: 700;

    @media screen and (max-width: 900px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1rem;
    font-family: var(--font-family-nista);
    font-weight: 400;
  }

  &:nth-child(1) {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: left;
    margin-top: 3rem;

    @media screen and (max-width: 900px) {
      justify-content: center;
      margin-top: 0rem;
    }
  }
  &:nth-child(2) {
    display: flex;
    position: sticky;
    top: 3rem;
    justify-content: right;

    @media screen and (max-width: 900px) {
      justify-content: center;
      margin-top: 0rem;
    }
  }

  &:nth-child(3) {
    display: flex;
    justify-content: left;
    position: sticky;
    top: 9rem;

    @media screen and (max-width: 900px) {
      justify-content: center;
      margin-top: 0rem;
      top: 0rem;
    }
  }
`;

export const ScrollProgress = styled.div<CustomScrollBarProps>`
  position: absolute;
  top: 10;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 80%;
  border-radius: 2px;
  opacity: 1;
  background-color: #CCF7FF;

  @media screen and (max-width: 900px) {
    display: none;
  }


  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: ${props => props.scrollPercentage + "%"};
    background-color: #E53F71; 
    border-radius: inherit;
    }

  &::after {
     content: '';
     position: absolute;
     top: ${props => props.scrollPercentage + "%"};
     left: 50%;
     transform: translateX(-50%);
     color: #E53F71;
     font-weight: bold;
     width: 13px;
     height: 13px;
     box-shadow: 0 0 10px #E53F71; 
     margin-top: -7px;
     padding: 4px;
     background-color: #E53F71; 
     border-radius: 100%;
     opacity: 0.8;
     }
    }
`;

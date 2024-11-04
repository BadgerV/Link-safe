import styled from "styled-components";

export const VaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  @media screen and (max-width: 500px) {
    width: 350px;
  }

  h3 {
    font-family: var(--font-family-geom);
    font-size: 30px;
    margin: auto;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }

  .vault__cont {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;

    input {
      width: 95%;
      padding: 10px;
      border: solid 1px #409099;
      border-radius: 5px;
    }
    button {
      width: 95%;
      padding: 10px;
    }
  }

  .vault__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    width: 300px;
    margin: auto;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    // border-radius : 10px;
  }
`;

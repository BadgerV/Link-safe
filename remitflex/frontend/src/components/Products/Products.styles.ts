import styled from "styled-components";

export const Main = styled.div`
  display: flex;
`;
export const ProductDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-left: -2.5rem !important;
`;
export const Card = styled.div`
  background: #f9fff9;
  cursor: pointer;
  height: 183px;
  border-radius: 15px;
  width: 150px !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    scale: 1.05;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem !important;
    margin: auto;
  }
  img {
    width: 58px;
    height: 58px;
  }
  p {
    text-align: center;
    color: #2b6066;
    font-size: 12px;
  }
`;

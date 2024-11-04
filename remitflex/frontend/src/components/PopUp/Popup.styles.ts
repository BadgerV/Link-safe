import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  div {
    width: 16rem;
    margin-top: -1rem;
    text-align: center;
    padding-bottom: 1rem;
  }
`;
export const QRText = styled.p`
  width: 19rem;
  font-size: 25px;
  background: linear-gradient(to left, #84e681, #409099);
  background-clip: text;
  text-align: center;
  margin-left: -1.5rem;
  font-family: Sora-SemiBold;
  -webkit-background-clip: text;
  color: transparent;

  &:hover {
    background: linear-gradient(to right, #84e681, #409099);
    background-clip: text;
    text-align: center;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
export const ModalWrapper = styled.div`
  background: #fff;
  border-radius: 13px;
  padding-left: 2%;
  padding-right: 2%;
  position: absolute !important;
  overflow-y: auto;
  z-index: 100;
`;

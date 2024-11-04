import styled from "styled-components";

export const PopupContainer = styled.div`
  width: 100%;
  height: 100%;

  .PopUp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: height 0.3s ease;
    z-index: 1000;
    opacity: 1;
    @media screen and (max-width: 600px) {
      justify-content: flex-end;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .popupContent {
      background-color: white;
      padding: 20px;
      box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      border-radius: 16px;

      @media screen and (max-width: 600px) {
        width: 100%;
        border-radius: 16px 16px 0px 0px;
      }

      .closeButton {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        transition: color 0.3s ease;
      }
    }
  }
`;

// PopUp.tsx
import React from "react";
// import styles from './PopUp.module.scss';
// import closeIcon from '/';
import { PopupContainer } from "./Popup.styles";

interface PopUpProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ children, isOpen, onClose }) => {
  return (
    <PopupContainer>
      <div className={`PopUp`}>
        <div className={`overlay`}></div>
        <div
          className={`popupContent`}
          style={{
            animation: isOpen ? "modalEnter 0.3s ease-in-out" : "modalExit 0.9s ease-in-out"
          }}
        >
          <button className={`closeButton`} onClick={onClose}>
            <img src={"assets/svg/close.svg"} alt="close" />
          </button>
          {children}
        </div>
      </div>
    </PopupContainer>
  );
};

export default PopUp;

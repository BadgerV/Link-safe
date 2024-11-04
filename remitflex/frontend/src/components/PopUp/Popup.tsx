import Button from "../Button/Button";
import { Background, ModalWrapper, ModalContent, QRText } from "./Popup.styles";

interface PopupProps {
  id: string;
  onClick: () => void;
  onClickButton: () => void;
}

const Popup: React.FC<PopupProps> = ({ id, onClick, onClickButton }) => {
  return (
    <Background id={id} onClick={onClick}>
      <ModalWrapper>
        <ModalContent>
          <img src="/assets/svg/qrcode.svg" alt="" />
          <div>
            <QRText>Scan QR with Algorand Wallet to make payment code</QRText>
            <h3> OR </h3>
          </div>
          <Button onClick={onClickButton} title={"Pay with wallet"} color="#fff" />
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
};

export default Popup;

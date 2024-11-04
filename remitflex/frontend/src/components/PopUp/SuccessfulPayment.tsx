import Button from "../Button/Button";
import { Background, ModalWrapper, ModalContent, QRText } from "./Popup.styles";

interface PopupProps {
  id: string;
  onClick: () => void;
  onClickButton: () => void;
}

const Popup: React.FC<PopupProps> = ({ id, onClick, onClickButton }) => {
  console.log(id);
  return (
    <Background id={id} onClick={onClick}>
      <ModalWrapper>
        <ModalContent>
          <img src="/assets/svg/CheckCircle.svg" alt="" />
          <div>
            <QRText>Your bill payment was successful</QRText>
          </div>
          <Button title={"Go to dashboard"} onClick={onClickButton} color="#fff" />
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
};

export default Popup;

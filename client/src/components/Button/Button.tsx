import { ReactNode } from "react";
import cx from "clsx";
import {
  Button,
  ButtonFlex,
  ButtonBlock,
  ButtonSpinnerContainer,
  ButtonSpinnerRing,
  ButtonSpin,
  ButtonPurple
} from "./Button.styles";

const ButtonSpinner = () => {
  return (
    <ButtonSpinnerContainer>
      <ButtonSpinnerRing></ButtonSpinnerRing>
      <ButtonSpin></ButtonSpin>
    </ButtonSpinnerContainer>
  );
};

type SUPPORTED_VARIANTS = "filled" | "outlined" | "light" | "ghost" | "dashed";
type SUPPORTED_COLORS = "purple" | "gradient" | "default";

type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: SUPPORTED_VARIANTS;
  color?: SUPPORTED_COLORS;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void;
  loadingText?: string;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const CustomButton = ({
  children,
  disabled,
  isLoading,
  type,
  color = "gradient",
  variant = "filled",
  loadingText,
  onClick,
  fullWidth = false,
  className,
  style
}: ButtonProps) => {
  const isDisabled = isLoading === true || disabled === true;
  return (
    <ButtonPurple
      type={type}
      disabled={isDisabled}
      style={style}
      className={cx(Button, color, variant, fullWidth && ButtonBlock, className)}
      onClick={onClick}
    >
      <ButtonFlex>
        {isLoading ? <ButtonSpinner /> : null}
        {isLoading && loadingText ? loadingText : children}
      </ButtonFlex>
    </ButtonPurple>
  );
};

export default CustomButton;

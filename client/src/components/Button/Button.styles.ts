import styled, { keyframes } from "styled-components";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  "--color-gray-200"?: string;
  "--spinner-color"?: string;
};

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonSpinnerContainer = styled.div`
  position: relative;
  margin-right: 8px;
`;

export const ButtonSpinnerRing = styled.div<ButtonProps>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  border: 3px solid ${props => props["--spinner-color"] || "white"};
  opacity: 0.5;
`;

export const ButtonSpin = styled.div<ButtonProps>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 3px solid transparent;
  border-top-color: ${props => props["--spinner-color"] || "white"};
  border-radius: 99px;
  animation: ${spin} 0.75s linear infinite;
`;

export const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  font-family: var(--font-family-nista);
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  text-align: center;
  padding: 5px 20px;
  transition: 0.25s ease;
  cursor: pointer;

  &.block {
    width: 100%;
  }
`;

export const ButtonDefault = styled(Button)<ButtonProps>`
  &.outlined {
    &:disabled {
      border: 1px solid ${props => props["--color-gray-200"] || "#E0E0E0"};
    }
  }
`;

export const ButtonBlock = styled(Button)`
  width: 100%;
`;

export const ButtonStriped = styled(Button)`
  transition: none;

  &.filled {
    background: transparent;
    color: var(--vault-primary);
    border: solid 2px var(--vault-primary);

    &:hover {
      background: var(--vault-primary);
      color: var(--vault-white);
    }

    &:disabled {
      pointer-events: none;
      background: #b2b2b2;
      color: var(--vault-white);
      border: transparent;
    }
  }

  &.outlined {
    background: var(--vault-white);

    &:hover {
      background: var(--vault-primary);
      color: var(--vault-white);
    }
  }
`;

export const ButtonGradient = styled(Button)`
  transition: none;

  &.filled {
    background: linear-gradient(295.67deg, #de0d6f 16.23%, #731054 83.77%);
    color: var(--vault-white);

    &:hover {
      background: var(--vault-primary);
      background-position: 100% 0;
    }

    &:disabled {
      pointer-events: none;
      background: #b2b2b2;
    }
  }

  &.outlined {
    background: var(--vault-white);

    &:hover {
      background: var(--vault-primary);
      color: var(--vault-white);
    }
  }
`;

export const ButtonPurple = styled(Button)`
  &.filled {
    background: var(--vault-primary);
    color: var(--vault-white);

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &.outlined {
    border: 1px solid #731054;
    color: #731054;
    background-color: transparent;

    &:disabled {
      opacity: 0.5;
    }
  }

  &.ghost {
    --spinner-color: #731054;
    background-color: transparent;
    border: none;
    color: #731054;
  }

  &.dashed {
    border: 1px dashed #731054;
    background: transparent;
    color: #731054;
  }
`;

import { ReactNode } from "react";
import { CardContainer } from "./Card.styles";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

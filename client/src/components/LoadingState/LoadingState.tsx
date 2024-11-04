import { LoadingContainer } from "./LoadingState.styles";
import cx from "clsx";

export function LoadingState({
  width,
  height,
  className
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) {
  return (
    <LoadingContainer
      className={cx(className)}
      style={{
        height,
        width
      }}
    ></LoadingContainer>
  );
}

import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";
export const OptionLabelContainer = styled.div`
  ${flexCenter()};
  width: 100%;
  justify-content: space-between;
  padding: 0.4rem 0rem;
  cursor: pointer;

  .option-label__left {
    ${flexCenter()};
    font-family: var(--font-family-nista);
    font-size: var(--font-size-s);
    color: var(--vault-primary);
    font-weight: 400;
    gap: 0.5rem;

    .option__icon {
      width: 17px;
      height: 17px;
    }
  }

  .option__amount {
    color: var(--vault-primary);
  }
`;

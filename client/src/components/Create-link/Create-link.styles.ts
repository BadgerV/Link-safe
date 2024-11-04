import styled from "styled-components";
import { flexCenter } from "../../styles/__mixins";

export const CreatedLinkContainer = styled.div`
  ${flexCenter()};
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    margin: 0 1rem;
  }

  .link__address {
    border-bottom: 1px solid #653780;
    background: linear-gradient(180deg, rgba(254, 247, 249, 0) 0%, #fef7f9 100%);
    backdrop-filter: blur(11px);
    padding-bottom: 0.5rem;
    font-family: var(--font-family-nista);
    color: var(--vault-primary);
    font-size: var(--font-size-m);
    cursor: pointer;
    font-weight: 600;
  }

  .qr__container {
    border: solid 1px var(--vault-primary);
    border-radius: 5px;
    padding: 1rem;
  }

  button {
    > div {
      gap: 0.5rem;
    }
  }

  .buttons__container {
    display: flex;
    gap: 1rem;
  }

  .copy__icon {
    width: 18px;
  }
  .button__transparent {
    background: white !important;
    border: 1px solid #653780 !important;
    color: var(--vault-primary) !important;
  }
`;

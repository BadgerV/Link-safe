import { WalletStatusType } from "../../types/components.types";
import { getShortenedAddress } from "../../utils/walletConnectHelper";

const WalletStatus: React.FC<WalletStatusType> = ({ address }) => {
  if (address) {
    const shortenedAddress = getShortenedAddress(address);
    return <span>{shortenedAddress}</span>;
  }
};

export { WalletStatus };

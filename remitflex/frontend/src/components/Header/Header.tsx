import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RootState } from "../../store/store";
import { HeaderConnectWallet, Image, LogoWrapper, Text } from "./Header.styles";
import { WalletStatus } from "./WalletStatus";

const Header: React.FC = () => {
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const vault = useSelector((state: RootState) => state.currentUser?.currentVault);

  const handleCopyClick = () => {
    setHandleCopyAddress(true);
    setTimeout(() => {
      setHandleCopyAddress(false);
    }, 800);
  };

  useEffect(() => {
    if (!vault?.address) return;
  }, [vault?.address]);

  return (
    <LogoWrapper>
      <Link to="/" className="link-wrapper">
        <Image src={"/assets/remitflexlogo.png"} alt="logo" />
        <Text>
          {" "}
          Remit<span>flex</span>
        </Text>
      </Link>
      {vault?.address && (
        <HeaderConnectWallet>
          <WalletStatus address={vault?.address} />
          {!vault.address ? (
            <img className="connect" src="/assets/copywallet.png" alt="connect wallet" />
          ) : (
            <CopyToClipboard text={vault.address} onCopy={handleCopyClick}>
              <img
                src={handleCopyAddress ? "/assets/copy.png" : "/assets/copy.svg"}
                alt={handleCopyAddress ? "copy" : "wallet copy"}
                style={{ cursor: "pointer" }}
              />
            </CopyToClipboard>
          )}
        </HeaderConnectWallet>
      )}
    </LogoWrapper>
  );
};

export default Header;

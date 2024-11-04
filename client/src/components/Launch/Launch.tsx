// @ts-nocheck

import { useSelector } from "react-redux";
import { LaunchContainer } from "./Lauch.styles";
import CustomButton from "../Button";
import { getSafe } from "link-safe";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { computeAssets } from "../../utils/assets.utils";
import AssetsShowcase from "../Assets-Showcase";
import PopUp from "../Popup";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { claimVault } from "../../utils/integration";
import { LoadingState } from "../LoadingState/LoadingState";
import { successToast } from "../../utils/customToast";
import { errorToast } from "../../utils/customToast";
const REACT_APP_CLIENT_URL = import.meta.env.VITE_APP_CLIENT_URL;

const LaunchVault = () => {
  const address = useSelector((state: any) => state.currentUser?.currentUser);
  const [ownedAssets, setOwnedAssets] = useState<any>({ assets: [], nfts: [] });
  const [vaultNobleLink, setVaultNobleLink] = useState<any>(null);
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const [showDepositPopup, setShowDepositPopup] = useState(false);
  const walletType = useSelector((state: any) => state.currentUser?.walletType);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const getSafeNobleLink = async () => {
    setIsLoading(true);
    const nobleCurveKey = `${REACT_APP_CLIENT_URL}${location.pathname}`;
    console.log(nobleCurveKey, "nobleCurvekey")
    const res = await getSafe(nobleCurveKey);
    setVaultNobleLink(res);
    setIsLoading(false);
    return res;
  };

  const AVAILABLE_ASSETS = async () => {
    setIsLoading(true);
    const assets = await computeAssets(vaultNobleLink.address);
    setOwnedAssets(assets ?? { assets: [], nfts: [] });

    setIsLoading(false);
  };

  // const vaultLink =
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const result = await getSafeNobleLink();
      // if (!result) navigate("/");
    })();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (!vaultNobleLink) return;
    AVAILABLE_ASSETS();
    setIsLoading(false);
  }, [vaultNobleLink]);

  const handleClaim = async () => {
    const algoAsset = ownedAssets.assets.find(asset => asset.id == 0);
      console.log(algoAsset, "algoasset")
    if (algoAsset.amount < 200000) {
      errorToast("You need a minimum of 0.2 Algo to claim");
      return;
    }
    const vault: any = await claimVault(vaultNobleLink, address, walletType, ownedAssets);
    successToast("successfully claimed asset");
    setShowPopup(false);
    setTimeout(() => {
      window.location.reload();
    }, 3200);
  };

  return (
    <LaunchContainer>
      {isLoading ? (
        <LoadingState width={500} height={"50vh"} />
      ) : (
        <div className="launch__">
          <div className="launch__header">
            <h3>Welcome,</h3>
          </div>
          <div className="launch__body">
            <AssetsShowcase
              ownedAssets={ownedAssets}
              params={true}
              setShowDropdownItems={setShowDropdownItems}
              showDropdownItems={showDropdownItems}
            />
            <div className="buttons__container">
              <CustomButton
                variant="filled"
                type="button"
                className="deposit__button"
                onClick={() => setShowDepositPopup(true)}
              >
                Deposit
              </CustomButton>
              <CustomButton
                variant="filled"
                type="button"
                className="claim__button"
                onClick={() => setShowPopup(true)}
              >
                Claim
              </CustomButton>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <PopUp isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <div className="popup__modal">
            <h2>Select withdrawal mode</h2>
            <div className="popup__container">
              <div className="popup__first" onClick={handleClaim}>
                <h3>via the connected wallet</h3>
                <p>Asset will be sent to the connected algorand wallet</p>
              </div>
              <div className="popup__second">
                <a
                  href={`https://remit-flex.netlify.app/app${location.pathname}${location.hash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>via remit flex</h3>
                  <p>Make remittances and pay over 18,000 bill categories in africa</p>
                </a>
              </div>
              <div className="popup__third">
                <h3>via gift card</h3>
                <p>Claim into your gift card</p>
              </div>
            </div>
          </div>
        </PopUp>
      )}
      {showDepositPopup && (
        <PopUp isOpen={showDepositPopup} onClose={() => setShowDepositPopup(false)}>
          <div className="popup__modal">
            <h2 className="deposit">Deposit asset via vault wallet address</h2>
            <div className="popup__container noble__link">
              <QRCode value={vaultNobleLink.address} />

              <CopyToClipboard text={vaultNobleLink.address}>
                <CustomButton
                  variant="filled"
                  className="button__transparent"
                  onClick={() => {
                    setHandleCopyAddress(!handleCopyAddress);
                    setTimeout(() => {
                      setHandleCopyAddress(false);
                    }, 800);
                  }}
                >
                  {!handleCopyAddress ? (
                    <img
                      className="copy__icon"
                      src="/assets/svg/copy-created.svg"
                      alt="link copy"
                      style={{
                        cursor: "pointer"
                      }}
                    />
                  ) : (
                    <img src="/assets/png/copy.png" alt="copy" className="copy__icon" />
                  )}
                  {"Copy Address"}
                </CustomButton>
              </CopyToClipboard>
            </div>
          </div>
        </PopUp>
      )}
    </LaunchContainer>
  );
};

export default LaunchVault;

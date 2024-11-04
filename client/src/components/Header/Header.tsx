// @ts-nocheck
import { useEffect, useState } from "react";
import CustomButton from "../Button";
import { HeaderContainer, LogoContainer, HeaderAddons, HeaderDropdown } from "./Header.styles";
import { PeraWalletConnect } from "@perawallet/connect";
import { setCurrentUser, setWalletType } from "../../stores/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { RootState } from "../../stores/stores";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate, useLocation } from "react-router-dom";
import { errorToast, infoToast, successToast } from "../../utils/customToast";

const peraWallet = new PeraWalletConnect();
const deflywallet = new DeflyWalletConnect();

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const address = useSelector((state: RootState) => state.currentUser?.currentUser);
  const walletType = useSelector((state: RootState) => state.currentUser?.walletType);
  const location = useLocation();


  const peraWalletReconnect = () => {
    peraWallet
      .reconnectSession()
      .then(accounts => {
        if (accounts.length) {
          dispatch(setCurrentUser(accounts[0]));
          dispatch(setWalletType("pera"));
        }
        peraWallet.connector.on("disconnect", () => {
          dispatch(setCurrentUser(undefined));
          dispatch(setWalletType(""));
          peraWallet.disconnect();
        });
      })
      .catch(e => console.log(e));
  };
  const deflyWalletReconnect = () => {
    deflywallet
      .reconnectSession()
      .then(accounts => {
        if (accounts.length) {
          dispatch(setCurrentUser(accounts[0]));
          dispatch(setWalletType("defly"));
        }
        deflywallet.connector.on("disconnect", () => {
          dispatch(setCurrentUser(undefined));
          dispatch(setWalletType(""));
          deflywallet.disconnect();
        });
      })
      .catch(e => console.log(e));
  };
  useEffect(() => {
    if (walletType === "pera") {
      peraWalletReconnect();
    } else if (walletType === "defly") {
      deflyWalletReconnect();
    }
  }, []);

  const peraWalletConnect = () => {
    peraWallet
      .connect()
      ?.then(accounts => {
        peraWallet.connector.on("disconnect", () => {
          dispatch(setCurrentUser(undefined));
          dispatch(setWalletType(""));
          peraWallet.disconnect();
          infoToast("Wallet disconnected");
        });
        dispatch(setCurrentUser(accounts![0]));
        dispatch(setWalletType("pera"));
        successToast("Successfully connected to Pera Wallet");
      })
      .catch(error => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  };

  const deflyWalletConnect = () => {
    deflywallet
      .connect()
      ?.then(accounts => {
        deflywallet.connector.on("disconnect", () => {
          dispatch(setCurrentUser(undefined));
          dispatch(setWalletType(""));
          deflywallet.disconnect();
          infoToast("Wallet Disconnected");
        });
        dispatch(setCurrentUser(accounts![0]));
        dispatch(setWalletType("defly"));
        successToast("Successfully connected to Defly Wallet");
      })
      .catch(error => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  };

  const disconnectWallet = () => {
    if (walletType === "pera") {
      peraWallet.disconnect();
    } else if (walletType === "defly") {
      deflywallet.disconnect();
    }
    dispatch(setCurrentUser(undefined));
    dispatch(setWalletType(""));
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <img src={"/assets/svg/logo.svg"} alt="logo" />
        <h2>LinkSafe</h2>
      </LogoContainer>
      <HeaderAddons>
        {location.pathname === "/" ? (
          <a
            href="https://www.npmjs.com/package/link-safe"
            target="_blank"
            className="target__blank"
            rel="noreferrer"
          >
            <div className="header__addons__items">
              <span>Documentation</span>
            </div>
          </a>
        ) : null}

        <HeaderDropdown>
          <CustomButton
            variant="filled"
            type="button"
            className={address ? "address__button address__main" : "address__main"}
          >
            {address ? (
              <span className="address__">
                {address?.substring(0, 5)}...
                {address?.substring(54, 57)}
              </span>
            ) : (
              "Connect"
            )}
            {address && (
              <CopyToClipboard text={address}>
                {!handleCopyAddress ? (
                  <img
                    className="copy__icon"
                    src="/assets/svg/copy.svg"
                    alt="wallet copy"
                    style={{
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      setHandleCopyAddress(!handleCopyAddress);
                      setTimeout(() => {
                        setHandleCopyAddress(false);
                      }, 800);
                    }}
                  />
                ) : (
                  <img src="/assets/png/copy.png" alt="copy" className="copy__icon" />
                )}
              </CopyToClipboard>
            )}
          </CustomButton>
          <div className={address ? `dropdown disconnect` : `dropdown`}>
            {address ? (
              <div className="dropdown__item" onClick={disconnectWallet}>
                <p className="disconnect__wallet"> Disconnect</p>
              </div>
            ) : (
              <>
                <div className="dropdown__item" onClick={peraWalletConnect}>
                  <div className="dropdown__item__img">
                    <img src={"/assets/png/pera.png"} alt="pera" />
                  </div>
                  <p>Pera Wallet</p>
                </div>
                <div className="dropdown__item" onClick={deflyWalletConnect}>
                  <div className="dropdown__item__img">
                    <img src={"/assets/png/defly.png"} alt="defly" />
                  </div>
                  <p>Defly Wallet</p>
                </div>
              </>
            )}
          </div>
        </HeaderDropdown>
      </HeaderAddons>
    </HeaderContainer>
  );
};

export default Header;

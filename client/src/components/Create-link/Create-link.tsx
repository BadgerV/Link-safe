// @ts-nocheck

import { useEffect, useState, useRef } from "react";
import Card from "../Card";

import * as alogkit from "@algorandfoundation/algokit-utils";
import { TransactionSignerAccount } from "@algorandfoundation/algokit-utils/types/account";
import { useWallet } from "@txnlab/use-wallet";
import { LinkSafeClient } from "../../contracts/LinkSafeClient";

import { computeAssets, Asset, NFT } from "../../utils/assets.utils";
import CustomButton from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { createSafe } from "link-safe";
import { useNavigate } from "react-router-dom";
import { CreatedLinkContainer } from "./Create-link.styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "qrcode.react";
import AssetsShowcase from "../Assets-Showcase";
import {
  sendTransaction,
  algodClient,
  sendAmountToASA,
} from "../../utils/integration";
import { PeraWalletConnect } from "@perawallet/connect";
import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { setCurrentUser } from "../../stores/user/user.reducer";
import { setWalletType } from "../../stores/user/user.reducer";
import PopUp from "../Popup/Popup";
import { errorToast, successToast } from "../../utils/customToast";
import algosdk from "algosdk";
interface OwnedAssets {
  assets: Asset[];
  nfts: NFT[];
}

const peraWallet = new PeraWalletConnect();
const deflywallet = new DeflyWalletConnect();

const CreateLink = () => {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const dropdownRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [ownedAssets, setOwnedAssets] = useState<OwnedAssets>({
    assets: [],
    nfts: [],
  });
  const address = useSelector((state: any) => state.currentUser?.currentUser);
  const walletType = useSelector((state: any) => state.currentUser?.walletType);
  const [createdVault, setCreatedVault] = useState<any>(null);
  const navigate = useNavigate();
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
  const [amount, setAmount] = useState(null);
  const [isVaultResolved, setIsVaultResolved] = useState(false);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const AVAILABLE_ASSETS = async () => {
    const assets = await computeAssets(address);
    setOwnedAssets(assets ?? { assets: [], nfts: [] });
  };

  const algodClient = alogkit.getAlgoClient({
    server: "https://mainnet-api.algonode.cloud",
    port: "",
    token: "",
  });


  const { signer, activeAddress } = useWallet();
  console.log(activeAddress, "active")
  // const sender = { signer, addr: activeAddress! };

  // handles the click event when clicked outside of dropdown
  // useEffect(() => {
  //   const handleClickOutsideDropdownItem = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node) &&
  //       event.target instanceof Element
  //     ) {
  //       setShowDropdownItems(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutsideDropdownItem);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutsideDropdownItem);
  //   };
  // }, []);

  const peraWalletReconnect = () => {
    peraWallet
      .reconnectSession()
      .then((accounts) => {
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
      .catch((e) => console.log(e));
  };
  const deflyWalletReconnect = () => {
    deflywallet
      .reconnectSession()
      .then((accounts) => {
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
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (walletType === "pera") {
      peraWalletReconnect();
    } else if (walletType === "defly") {
      deflyWalletReconnect();
    }
  }, []);

  useEffect(() => {
    if (!address) return;
    AVAILABLE_ASSETS();
  }, [address]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "",
          text: "share your link vault with who you want to tip or gift (if there is an asset in the link 😄)",
          url: createdVault?.safe,
        });
        console.log("Successfully shared");
      } else {
        console.log("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleDropdown = () => {
    if (!address) {
      errorToast("Please connect your wallet");
      return;
    }
    setShowDropdownItems(!showDropdownItems);
  };

  const handleSelectAsset = (asset: Asset) => {
    setSelectedAsset(asset);
    setShowDropdownItems(false);
  };

  const createEmptyLinkVault = async () => {
    const createdVault = await createSafe();
    console.log(createdVault, "created")
    if (createdVault.address) {
      setCreatedVault(createdVault);
      successToast("Link created successfully");
      setIsVaultResolved(true);
    }
  };

  const createSafeAndFund = async () => {
    if (!address) return errorToast("Please connect your wallet");
    if (!selectedAsset)
      return errorToast(
        "Please select a token you want to fund your vault with"
      );
    if (!amount)
      return errorToast("Please enter an amount to fund your vault with");
    if (selectedAsset.minimumBalance < 200000)
      return errorToast(
        `You need a minimum of ${selectedAsset.minimumBalance / 10 ** 6} ALGO to fund your vault`
      );
    if (selectedAsset.amount < amount)
      return errorToast(
        `You do not have sufficient balance to make this transaction`
      );

  const params = await algodClient.getTransactionParams().do();
  const txn = algosdk.makeApplicationCallTxnFromObject({
    from : address,
    appIndex: 0,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
    suggestedParams: params,
    appArgs : []
  })

  // Get the transaction signed by Pera Wallet
  const signedTxn = await peraWallet.signTransaction([[{ txn, signers: [address] }]]);
    
  // // Send the transaction
  // const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
    const createdVault = await createSafe();
    // console.log(createdVault)
    if (createdVault.address) {
      const checkIfAlgo = ownedAssets.assets.find(
        (asset: Asset) => Number(selectedAsset.id) === 0
      );
      if (checkIfAlgo) {
        await sendTransaction(
          amount,
          address,
          createdVault.address,
          walletType === "pera" ? peraWallet : deflywallet,
          selectedAsset
        );
        setIsVaultResolved(true);
        setCreatedVault(createdVault);
        successToast("Link created successfully");
      } else {
        await sendAmountToASA(
          amount,
          address,
          selectedAsset,
          createdVault,
          walletType === "pera" ? peraWallet : deflywallet
        );
        setIsVaultResolved(true);
        setCreatedVault(createdVault);
        successToast("Link created successfully");
      }
    }

  };
  return (
    <>
      {!isVaultResolved ? (
        <Card>
          <h2>Create a linkVault</h2>
          <AssetsShowcase
            ownedAssets={ownedAssets}
            params={false}
            handleSelectAsset={handleSelectAsset}
            selectedAsset={selectedAsset}
            showDropdownItems={showDropdownItems}
            setShowDropdownItems={setShowDropdownItems}
          />
          <div className="link__amount">
            <h3>Amount</h3>
            <input
              type="number"
              placeholder={selectedAsset ? `0 ${selectedAsset.unit_name}` : "0"}
              className="input__amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <p className="empty__link" onClick={createEmptyLinkVault}>
            Create an empty link to fund later?
          </p>
          <CustomButton
            variant="filled"
            type="button"
            onClick={createSafeAndFund}
          >
            Create
          </CustomButton>
        </Card>
      ) : (
        <CreatedLinkContainer>
          <img src="/assets/svg/link-created.svg" alt="link created" />
          <h2> Link Created!</h2>
          <a href={createdVault?.safe} target="_blank" rel="noreferrer">
            <p className="link__address">{`${createdVault?.safe.substring(0, 36)}...`}</p>
          </a>
          <div className="buttons__container">
            <CopyToClipboard text={createdVault?.safe}>
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
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <img
                    src="/assets/png/copy.png"
                    alt="copy"
                    className="copy__icon"
                  />
                )}
                {"Copy Link"}
              </CustomButton>
            </CopyToClipboard>
            <CustomButton className="button__transparent" onClick={handleShare}>
              <img
                src="/assets/svg/share-link.svg"
                alt="share"
                className="copy__icon"
              />
              Share Link
            </CustomButton>
          </div>
          <div className="qr__container">
            <QRCode value={createdVault?.safe} />
          </div>
        </CreatedLinkContainer>
      )}
      {showPopup && (
        <PopUp isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <div className="popup__modal">
            <h2>Select withdrawal mode</h2>
            <div className="popup__first">
              <h3>via the connected wallet</h3>
              <p>Asset will be sent to the connected algorand wallet</p>
            </div>
            <div className="popup__second">
              <h3>via Remit flex</h3>
              <p>
                Make remittances and pay over 18,000 bill categories in africa
              </p>
            </div>
          </div>
        </PopUp>
      )}
    </>
  );
};

export default CreateLink;

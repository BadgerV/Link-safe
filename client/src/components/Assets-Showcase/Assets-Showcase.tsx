import { useEffect, useState, useRef } from "react";
import { Asset, NFT } from "../../utils/assets.utils";
import OptionLabel from "../Option-Label";
import { AssetsShowcaseContainer } from "./Assets-Showcase.styles";
import { useSelector } from "react-redux";
import { errorToast } from "../../utils/customToast";

interface OwnedAssets {
  ownedAssets: {
    assets: Asset[];
    nfts: NFT[];
  };
  params: boolean;
  handleSelectAsset?: (asset: Asset) => void;
  selectedAsset?: any;
  showDropdownItems: boolean;
  setShowDropdownItems: any;
}

export const AssetsShowcase: React.FC<OwnedAssets> = ({
  ownedAssets,
  params,
  handleSelectAsset,
  selectedAsset,
  showDropdownItems,
  setShowDropdownItems
}: OwnedAssets) => {
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const address = useSelector((state: any) => state.currentUser?.currentUser);

  // handles the click event when clicked outside of dropdown
  useEffect(() => {
    const handleClickOutsideDropdownItem = (event: MouseEvent) => {
      if (params) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        event.target instanceof Element
      ) {
        setShowDropdownItems(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDropdownItem);
    return () => {
      document.removeEventListener("click", handleClickOutsideDropdownItem);
    };
  }, []);

  useEffect(() => {
    params ? setShowDropdownItems(true) : setShowDropdownItems(false);
  }, [params]);

  const handleDropdown = () => {
    if (params) return;
    if (!params && !address) {
      errorToast("Please connect your wallet");
      return;
    }
    params ? setShowDropdownItems(true) : setShowDropdownItems(!showDropdownItems);
  };

  return (
    <AssetsShowcaseContainer>
      <div className="link__container" ref={dropdownRef}>
        <div
          className={`link__types ${showDropdownItems ? "link__active" : ""} `}
          onClick={handleDropdown}
        >
          <span
            className={`link-span ${params ? "params-select" : "unset-params"} ${
              selectedAsset ? "asset-selected" : ""
            }`}
          >
            {selectedAsset ? (
              <div className="selected__link">
                <div className="selected__link__item">
                  <img src={selectedAsset.logo.svg} alt="logo" className="selected__link__icon" />
                  <p className="selected__link__name">{selectedAsset.unit_name}</p>
                </div>
                <p></p>
              </div>
            ) : (
              "Algorand standard assets"
            )}
          </span>
          {!params && (
            <img src={"/assets/svg/dropdown.svg"} alt="dropdown" className="dropdown__icon" />
          )}
        </div>
        {showDropdownItems && (
          <div className="owned__assets">
            <h3>Tokens</h3>
            {ownedAssets?.assets?.length > 0 &&
              ownedAssets.assets.map((asset: Asset, i: number) => (
                <div
                  className="owned__assets__item"
                  key={i}
                  onClick={() => {
                    if (params) return;
                    handleSelectAsset(asset);
                  }}
                >
                  <OptionLabel key={i} option={asset} />
                </div>
              ))}
            <h3>Nfts</h3>
            {ownedAssets?.nfts?.length > 0 ? (
              ownedAssets.assets.map((nft: Asset, i: number) => (
                <OptionLabel key={i} option={nft} />
              ))
            ) : (
              <p>There are no nfts in this wallet</p>
            )}
          </div>
        )}
      </div>
    </AssetsShowcaseContainer>
  );
};

export default AssetsShowcase;

import React, { useState, useEffect } from "react";
import { VaultContainer } from "./Vault.styles";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import Button from "../Button/Button";
import { getSafe } from "link-safe";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.reducer";
const REACT_APP_CLIENT_URL = import.meta.env.VITE_APP_ENGINE_VAULT as string;

const VaultScanner: React.FC = () => {
  const [data, setData] = useState(null);
  const [startScan, setStartScan] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getVaultNobleLink = async () => {
    //eslint-disable-next-line
    const nobleCurveKey = `${REACT_APP_CLIENT_URL}${location.pathname}${location.hash}`.replace(
      "/app",
      ""
    );
    const res = await getSafe(nobleCurveKey);
    setData(res.linksafe);
    setCurrentUser(res);
    return res;
  };

  useEffect(() => {
    (async () => {
      await getVaultNobleLink();
    })();
  }, []);

  const handleStart = () => {
    setStartScan(true);
  };

  const handleInputChange = (e: any) => {
    setData(e.target.value);
  };

  const handleOnclick = async () => {
    if (!data) return;
    const linkWallet = await getSafe(data);
    if (!linkWallet) {
      alert("Invalid LinkSafe URL");
      return;
    } else {
      dispatch(setCurrentUser(linkWallet));
      setStartScan(false);
      navigate("/dashboard");
    }
  };

  return (
    <VaultContainer>
      <div className="vault__img">
        {startScan ? (
          <QrReader
            onResult={(result: any, error: any) => {
              if (result) {
                setData(result?.text);
              }

              if (error) {
                console.info(error);
              }
            }}
            //@ts-ignore
            style={{ width: "100%" } as any}
          />
        ) : (
          <img src="/assets/scan.svg" alt="scan" onClick={handleStart} />
        )}
      </div>
      <h3>Scan LinkSafe QR code</h3>
      <div className="vault__cont">
        <p>Or</p>
        <p>Enter Link safe URL</p>
        <input
          type="text"
          placeholder="Enter Link safe URL"
          value={data ? data : ""}
          onChange={handleInputChange}
        />
        {/* Button to proceed manually without scanning */}
        <Button title="Proceed" className={!data ? "disabled-state" : ""} onClick={handleOnclick} />
      </div>
    </VaultContainer>
  );
};

export default VaultScanner;

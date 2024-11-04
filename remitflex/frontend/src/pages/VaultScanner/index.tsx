import Header from "../../components/Header";
import VaultScanner from "../../components/Vault";

const VaultPage: () => JSX.Element = () => {
  return (
    <div className="landing">
      <Header />
      <VaultScanner />
    </div>
  );
};

export default VaultPage;

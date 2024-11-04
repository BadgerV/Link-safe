import { OptionLabelContainer } from "./Option-Label.styles";

interface OptionLabelProps {
  option: {
    logo: {
      svg: string;
    };
    unit_name: string;
    amount: number;
    decimals: number;
  };
}

const OptionLabel: React.FC<OptionLabelProps> = ({ option }: OptionLabelProps) => {
  return (
    <OptionLabelContainer>
      <div className="option-label__left">
        <img src={option.logo.svg} alt="logo" className="option__icon" />
        <p className="">{option.unit_name}</p>
      </div>
      <p className="option__amount">{(option.amount / 10 ** option.decimals).toFixed(2)}</p>
    </OptionLabelContainer>
  );
};

export default OptionLabel;

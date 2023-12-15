export interface IRollerAliasInputListProps {
  rollerNames: string[];
  onAliasChangeCallback: (rollerName: string, alias: string) => void;
}

const RollerAliasInputList: React.FunctionComponent<IRollerAliasInputListProps> = (
  props: IRollerAliasInputListProps
) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, rollerName: string) => {
    const inputValue = e.target.value || rollerName;
    props.onAliasChangeCallback(rollerName, inputValue);
  };

  return (
    <div className="roller-alias-input-list">
      {props.rollerNames.map((name: string) => (
        <div key={name}>
          <input
            className="alias-input"
            placeholder={name}
            onChange={(e) => handleInputChange(e, name)}
          />
          {name}
        </div>
      ))}
    </div>
  );
};

export default RollerAliasInputList;
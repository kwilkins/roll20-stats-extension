import { Stack } from '@fluentui/react/lib/Stack';

import { IRollData, RollDataDiceRollsPropertyName } from '../model/DiceRollInterfaces';
import RollerPersona, { GroupedRollerPersona } from './RollerPersona';

export interface IRollerPersonaListProps {
  aliasMap: Record<string, string>;
  rollData: IRollData;
  onAliasChangeCallback: (rollerName: string, alias: string) => void;
}

/**
 * @summary Renders a list of rollers taking into account what rollers have been grouped together.
 */
const RollerPersonaList: React.FunctionComponent<IRollerPersonaListProps> = (
  props: IRollerPersonaListProps
) => {
  return (
    <Stack className='roller-alias-input-list' tokens={{ childrenGap: 5 }}>
      {props.rollData.rollerNames.map((name: string) => {
        const rolls = props.rollData[RollDataDiceRollsPropertyName.d20].filter((x) => x.rollerName === name);
        const isGroupedElsewhere: boolean = !!Object.entries(props.aliasMap).find(([key, value]) => key === name && value !== name);
        const groupedRollerPersonas: GroupedRollerPersona[] = Object.entries(props.aliasMap).filter(([key, value]) => key !== name && value === name).map(([key, value]) => ({
          name: key,
          rollCount: props.rollData[RollDataDiceRollsPropertyName.d20].filter((x) => x.rollerName === key).length
        }));
        return isGroupedElsewhere
        ? (
          <></>
        )
        : (
          <Stack.Item key={`${name}-roller`}>
            <RollerPersona
              groupedRollerData={groupedRollerPersonas}
              name={name}
              rollCount={rolls.length}
              onAliasChangeCallback={props.onAliasChangeCallback}
            />
          </Stack.Item>
        );
      })}
    </Stack>
  );
};

export default RollerPersonaList;
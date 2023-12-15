import { Stack } from '@fluentui/react/lib/Stack';

import { IRollData, RollDataDiceRollsPropertyName } from '../model/DiceRollInterfaces';
import { Roller } from '../model/Roller';
import RollerPersona, { GroupedRollerPersona } from './RollerPersona';

export interface IRollerPersonaListProps {
  rollers: Roller[];
  rollData: IRollData;
  onRollerGroupingCallback: (rollerName: string, alias: string) => void;
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
        const rolls = props.rollData[RollDataDiceRollsPropertyName.d20].filter((x) => x.rollerName === name),
          isGroupedElsewhere: boolean = !!props.rollers.find((roller) => roller.aliases.includes(name)),
          groupedRollerPersonas: GroupedRollerPersona[] = (props.rollers.find((roller) => roller.name === name)?.aliases ?? [])
            .map((name) => ({
              name,
              rollCount: props.rollData[RollDataDiceRollsPropertyName.d20].filter((x) => x.rollerName === name).length
            }));

        return isGroupedElsewhere
        ? (
          <></>
        )
        : (
          <Stack.Item key={`${name}-roller`}>
            <RollerPersona
              groupedRollerList={groupedRollerPersonas}
              name={name}
              rollCount={rolls.length}
              onRollerGroupingCallback={props.onRollerGroupingCallback}
            />
          </Stack.Item>
        );
      })}
    </Stack>
  );
};

export default RollerPersonaList;
import React from 'react';
import { useBoolean } from '@fluentui/react-hooks';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { IPersonaStyles, Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import { IButtonProps, IconButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react/lib/Stack';
import classNames from 'classnames';

export interface GroupedRollerPersona {
  name: string;
  rollCount: number;
}

export interface RollerPersonaProps {
  groupedRollerList: GroupedRollerPersona[];
  name: string;
  rollCount: number;
  onRollerGroupingCallback: (rollerName: string, alias: string) => void;
}

/**
 * @summary Renders data for a roller's display.
 */
const RollerPersona: React.FunctionComponent<RollerPersonaProps> = (props: RollerPersonaProps) => {
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  const [isExpanded, { toggle: toggleIsExpanded }] = useBoolean(false);

  const createDragStartHandler = React.useCallback((rollerName: string) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('name', rollerName);
      e.dataTransfer.effectAllowed = 'linkMove';
      setIsDragging(true);
    }; 
  }, []);
  const dragOverHandler = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = isDragging
    ? 'none'
    : 'move';
  }, [isDragging]);
  const dropHandler = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.onRollerGroupingCallback(props.name, e.dataTransfer.getData('name'));
    setIsDragging(false);
  }, []);
  const dragEndHandler = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
  }, []);

  const toggleExpandButtonProps = React.useMemo(() => {
    const helpText= isExpanded ? 'Collapse grouped rollers' : 'Expand grouped rollers';
    return {
      ariaLabel: helpText,
      checked: isExpanded,
      iconProps: {
        iconName: isExpanded ? 'ChevronDownMed' : 'ChevronRightMed'
      },
      title: helpText,
      toggle: true,
      onClick: () => toggleIsExpanded()
    } as IButtonProps;
  }, [isExpanded]);

  return (
    <Stack className="roller-persona" verticalFill={true}>
      <Stack.Item className="primary-roller">
        <Stack horizontal={true} verticalFill={true}>
          {!!props.groupedRollerList.length && (
            <IconButton {...toggleExpandButtonProps} />
          )}
          <Persona
            className={classNames({ 'group': props.groupedRollerList.length && !isExpanded })}
            imageAlt="persona silhouette"
            draggable={true}
            size={PersonaSize.size24}
            styles={personaStyles}
            text={`${props.name}: ${createRollText(props.groupedRollerList.length && !isExpanded ? [props.rollCount, ...props.groupedRollerList.map((x) => x.rollCount)].reduce((a, b) => a + b, 0) : props.rollCount)}`}
            onDragOver={dragOverHandler}
            onDragStart={createDragStartHandler(props.name)}
            onDrop={dropHandler}
            onDragEnd={dragEndHandler}
            onRenderPersonaCoin={(coinProps) => {
              return (
                <FontIcon className="roller-icon" aria-label="Contact" iconName="Contact" style={{ width: coinProps?.coinSize, height: coinProps?.coinSize }} />
              );
            }}
          />
        </Stack>
      </Stack.Item>
      {isExpanded && (
        <Stack.Item className="grouped-rollers" tokens={{ margin: '0 0 0 40px' }}>
          <Stack tokens={{ childrenGap: 10 }}>
            {props.groupedRollerList.map((roller: GroupedRollerPersona) => (
              <Stack.Item key={roller.name}>
                <Persona
                  className="grouped-roller"
                  imageAlt="persona silhouette"
                  size={PersonaSize.size24}
                  styles={personaStyles}
                  text={`${roller.name}: ${createRollText(roller.rollCount)}`}
                  onRenderPersonaCoin={(coinProps) => {
                    return (
                      <FontIcon className="roller-icon" aria-label="Contact" iconName="Contact" style={{ width: coinProps?.coinSize, height: coinProps?.coinSize }} />
                    );
                  }}
                />
              </Stack.Item>
            ))}
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};

export default RollerPersona;

const createRollText = (rollCount: number) => `${rollCount} d20 rolls`;

const personaStyles: Partial<IPersonaStyles> = {
  root: {
    border: 'solid 1px black',
    '.roller-icon': {
      padding: '0 4px'
    },
    '&.group:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: '3px',
      right: '-3px',
      bottom: '-3px',
      left: '3px',
      borderRight: 'solid 1px black',
      borderBottom: 'solid 1px black'
    }
  },
  details: {
    padding: '0'
  }
};

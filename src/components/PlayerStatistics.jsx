import React from 'react';

import classNames from 'classnames';

const PlayerStatistics = (props) => {
  return (
    <div className="player-statistics">
      <div className="player-name">{props.playerName}</div>
      <div className="statistics">
        {!!props.statisticTypes.length &&
          renderStatistics(props.statisticTypes)
        }
      </div>
    </div>
  );
};

const renderStatistics = (statisticTypes) => {
  return statisticTypes.map((st) => (
    <div className="statistic-type">
      <div className="total">{st.rollCount} {st.rollType} rolls</div>
      {Object.values(st.statistics).map((s) => (
        <div className={classNames('statistic', { tooltip: s.tooltipText })}>
          <span className="name">{s.name}:</span> <span className="value">{s.value}</span>
          {s.tooltipText && <span className="tooltip-text">{s.tooltipText}</span>}
        </div>))
      }
    </div>)
  );
};

export default PlayerStatistics;
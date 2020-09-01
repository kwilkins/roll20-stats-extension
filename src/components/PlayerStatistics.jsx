import React from 'react';

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
        <div className="statistic">
          {s.name}: <span className="number">{s.value}</span>
        </div>))
      }
    </div>)
  );
};

export default PlayerStatistics;
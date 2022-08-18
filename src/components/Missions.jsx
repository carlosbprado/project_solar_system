import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((m) => (
          <MissionCard key={ m.name } name={ m.name } />
        ))}
      </div>
    );
  }
}

export default Missions;

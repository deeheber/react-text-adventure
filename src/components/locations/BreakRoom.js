import React, { Fragment } from 'react';

const BreakRoom = props => (
  <Fragment>
    <h2>Location: Watering Hole (Temporary Reprieve)</h2>
      <p>
        Upon entering the breakroom, you see the remnants of cake from the Launch Party from last night. Phyllis and Angela are arguing about who is on clean up duty. There are leftover pieces of cake still sitting out. Desparate to avoid entanglement in the affairs of the Party Planning Committee, you must decide what to do next.
      </p>
      <button onClick={() => props.updateLocation('Desk')}>Go to your desk</button>
      <button onClick={() => props.updateLocation('BossDesk')}>Go to your boss's desk</button>
      {
        props.hasCake ?
          '':
          <button onClick={props.toggleCake}>Snag Creed's cake</button> 
      }
  </Fragment>
);

export default BreakRoom;

/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './Entry';

const Tiles = ({ entries }) => (
  <div>
    {entries.map((entry) => (
      <Entry
        user={entry.user}
        image={entry.image}
        ups={entry.ups}
      />
    ))}
  </div>
);

export default Tiles;

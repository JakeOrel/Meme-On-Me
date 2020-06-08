/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './Entry';

const Tiles = ({ entries }) => (
  <div>
    {entries.map((entry) => (
      <Entry
        ups={Math.floor(Math.random() * (10000 - 1) + 1)}
        image={entry.url}
      />
    ))}
  </div>
);

export default Tiles;

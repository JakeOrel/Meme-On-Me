/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './Entry';

const Tiles = ({ entries }) => (
  <div>
    {entries.map((entry) => (
      <Entry
        image={entry.img}
        color={entry.color}
        top={entry.line1}
        bottom={entry.line2}
      />
    ))}
  </div>
);

export default Tiles;

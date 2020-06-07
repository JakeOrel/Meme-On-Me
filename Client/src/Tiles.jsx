/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './Entry';

const Tiles = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <Entry
          image={entry.url}
        />
      ))}
    </div>
  );
};

export default Tiles;

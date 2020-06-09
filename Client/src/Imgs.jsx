import React from 'react';
import ThumbNail from './ThumbNail';

const Imgs = ({ entries, onClick }) => (
  <div>
    {entries.map((entry, key) => (
      <ThumbNail
        image={entry.img}
        key={key}
        number={key}
        onClick={(e) => onClick(e)}
      />
    ))}
  </div>
);

export default Imgs;

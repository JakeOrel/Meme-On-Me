/* eslint-disable react/prop-types */
import React from 'react';
import {
  Tile, Meme, TopLine, BottomLine,
} from './styles';

const Entry = ({
  image, color, top, bottom,
}) => (
  <Tile>
    <TopLine style={{ color }}>{top}</TopLine>
    <BottomLine style={{ color }}>{bottom}</BottomLine>
    <Meme src={image} alt="" />
  </Tile>
);

export default Entry;

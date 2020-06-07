/* eslint-disable react/prop-types */
import React from 'react';
import { Tile, Up, Meme } from './styles';

const Entry = ({
  image, ups,
}) => (
  <Tile>
    <Meme src={image} alt="" />
    <Up type="button">{ups}</Up>
  </Tile>
);

export default Entry;

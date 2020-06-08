/* eslint-disable react/prop-types */
import React from 'react';
import {
  Tile, Up, Meme, UserName,
} from './styles';

const Entry = ({
  image, ups, author,
}) => (
  <Tile>
    <UserName>{author}</UserName>
    <Meme src={image} alt="" />
    <Up type="button">{ups}</Up>
  </Tile>
);

export default Entry;

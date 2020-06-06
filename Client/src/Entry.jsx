/* eslint-disable react/prop-types */
import React from 'react';
import { Tile, UserName, Up } from './styles';

const Entry = ({ user, image, ups }) => (
  <Tile>
    <UserName>
      {user}
    </UserName>
    <Up type="button">{ups}</Up>
  </Tile>
);

export default Entry;

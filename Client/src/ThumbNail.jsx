import React from 'react';
import { ThumbNailHolder, ImgBtn, Icon } from './styles';

const ThumbNail = ({ image, number, onClick }) => (
  <ThumbNailHolder>
    <ImgBtn onClick={(e) => onClick(e)}>
      <Icon src={image} alt={number} />
    </ImgBtn>
  </ThumbNailHolder>
);

export default ThumbNail;

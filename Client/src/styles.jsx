/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Header = styled.div`
  border: 1px solid grey;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Title = styled.p`
  color: #be79df;
  font-size: 45px;
  margin-left: 43vw;
`;

export const TileHolder = styled.div`
  margin-top: 8%;
  width: 45vw;
`;

export const UserName = styled.h5`
  color: #be79df;
  font-size: 24px;
`;

export const TopLine = styled.div`
  position: absolute;
  margin-top: -50vw;
  font-size: 24px;
`;

export const BottomLine = styled.div`
  position: absolute;
  margin-top: 8vw;
  font-size: 24px;
`;

export const Tile = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 5%;
  margin-top: 10px;
  width: 50vw;
  height: 35vw;
  justify-content: center;
  align-items: center;
  border: solid grey 1px;
`;

export const Up = styled.button`
  background-color: #00bdaa;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Meme = styled.img`
  width: 35vw;
  height: 32vw;
`;

export const NewMeme = styled.button`
  width: 20vw;
  height: 5vh;
  border-radius: 7%;
  background-color: #be79df;
  margin-top: -20vw;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemeCreator = styled.div`
  width: 50vw;
  height: 40vw;
  display: flex;
  justify-content: center;
`;

export const ThumbNailHolder = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const ImgBtn = styled.button`
  padding: 5px;
  border: none;
  height: 70px;
  width: 70px;
  background-color: rgba(255, 255, 255, 0.08);
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: auto;
  width: 50vw;
  height: 40vw;
  margin-top: 20px;
  border: 3px solid grey;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.08);
`;

export const MemeHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 8vw;
  margin-left: 175px;
`;

export const MainMeme = styled.img`
  width: 500px;
  height: 500px;
`;

export const Line1 = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  display: block;
`;

export const Line2 = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  display: block;
`;

export const MemeTextForm = styled.form`
`;

export const MemeText = styled.input`
  height: 2vw;
  width: 10vw;
  border-radius: 8%;
  background-color: #be79df;
  font-size: 18px;
`;

export const FormHolder = styled.div`
  position: absolute;
  max-width: 200px;
  max-height: 150px;
  top: 50%;
  left: 28%;
`;

export const FormLabel = styled.label`
  color: #be79df;
  font-size: 20px;
`;

export const MemeTxtColor = styled.input`
  height: 2vw;
  width: 10vw;
  border-radius: 8%;
  font-size: 18px;
`;

export const SaveMeme = styled.input`
  width: 10vw;
  heigh: 2vw;
  border-radius: 8%;
  background-color: #00bdaa;
  border: none;
  padding: 10px;
  margin-top: 1vw;
  font-size: 18px;
`;

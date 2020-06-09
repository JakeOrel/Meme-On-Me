/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import Tiles from './Tiles';
import Imgs from './Imgs';
import {
  Header, TileHolder, NewMeme, Title,
  Container, MemeCreator, ModalWrapper,
  MemeHolder, MainMeme, Line1, Line2, MemeText,
  MemeTextForm, FormHolder, FormLabel, MemeTxtColor, SaveMeme,
} from './styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
      templates: [],
      memeCreator: false,
      index: 0,
      line1: '',
      line2: '',
      color: '',
    };
    this.createMeme = this.createMeme.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getPosts();
    this.getTemplates();
  }

  getTemplates() {
    axios.get('/templates')
      .then((result) => {
        this.setState({
          templates: result.data,
        });
      });
  }

  getPosts() {
    axios.get('/memes')
      .then((result) => {
        result.data.reverse();
        this.setState({
          memes: result.data,
        });
      });
  }

  createMeme(e) {
    const { memeCreator } = this.state;
    e.preventDefault();

    this.setState({
      memeCreator: !memeCreator,
    });
  }

  handleImageClick(e) {
    e.preventDefault();
    let imgIdx = e.target.alt;
    if (!imgIdx) {
      imgIdx = 0;
    }

    this.setState({
      index: imgIdx,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      line1, line2, index, memeCreator, color, templates,
    } = this.state;

    const imgUrl = templates[index].img;
    axios({
      method: 'PUT',
      url: '/memes',
      data: {
        memes: imgUrl,
        line1,
        line2,
        color,
      },
    })
      .then(() => {
        this.getPosts();
      })
      .then(() => {
        this.setState({
          memeCreator: !memeCreator,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      memes, memeCreator, index, line1, line2, color, templates,
    } = this.state;
    return (
      <div>
        <Header>
          <Title>Meme On Me</Title>
          <NewMeme onClick={this.createMeme}>Create a Meme</NewMeme>
        </Header>
        {memeCreator ? (
          <ModalWrapper>
            <MemeCreator>
              <Imgs entries={templates} onClick={this.handleImageClick} />
              <MemeHolder>
                <MainMeme src={templates[index].img} />
                <Line1 style={{ color }}>{line1}</Line1>
                <Line2 style={{ color }}>{line2}</Line2>
              </MemeHolder>
              <FormHolder>
                <MemeTextForm onSubmit={this.handleSubmit}>
                  <FormLabel>Top text</FormLabel>
                  <MemeText type="topTxt" name="line1" value={line1} onChange={this.handleChange} />
                  <FormLabel>Bottom Text</FormLabel>
                  <MemeText type="bottomTxt" name="line2" value={line2} onChange={this.handleChange} />
                  <FormLabel>Text Color</FormLabel>
                  <MemeTxtColor type="color" name="color" value={color} onChange={this.handleChange} />
                  <SaveMeme type="submit" value="Submit Your Meme" onSubmit={this.handleSubmit} />
                </MemeTextForm>
              </FormHolder>
            </MemeCreator>
          </ModalWrapper>
        ) : (
          <Container>
            <TileHolder>
              <Tiles entries={memes} />
            </TileHolder>
          </Container>
        )}
      </div>
    );
  }
}

export default App;

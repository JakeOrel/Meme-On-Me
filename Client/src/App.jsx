import React from 'react';
import axios from 'axios';
import Tiles from './Tiles';
import { Header, TileHolder } from './styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [{ user: 'johnny bravo', ups: 100, thumbnail: 'https://b.thumbs.redditmedia.com/pyRe8UVjyJrmihhw2B5DvBEh5sElYaEOXrbNTswqshU.jpg' }],
    };
  }

  // componentDidMount() {
  //   this.getPosts();
  // }

  // getPosts() {
  //   let uName = 'home';
  //   const url = window.location.href;
  //   const query = url.slice(url.indexOf('?'));
  //   const params = new URLSearchParams(query);
  //   if (params.get('user') !== null) {
  //     uName = params.get('user');
  //   }
  //   axios.get(`/${uName}`)
  //     .then((data) => {
  //       this.setState({
  //         entries: data,
  //       });
  //     });
  // }

  render() {
    const { entries } = this.state;
    return (
      <div>
        <Header>Meme On Me</Header>
        <TileHolder>
          <Tiles entries={entries} />
        </TileHolder>
      </div>
    );
  }
}

export default App;

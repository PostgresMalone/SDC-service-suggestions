import React from 'react';
import axios from 'axios';
import HousesList from './HousesList.jsx';
import { Container, Header, BottomPadding, GlobalStyle } from './Styled_Components/styling.jsx';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      moreRevealed: false,
    };
    this.toggleMoreHomes = this.toggleMoreHomes.bind(this);
  }

  componentDidMount() {
    this.getHomes(1);
  }

  getHomes(num) {
    axios.get(`/homes/${num}`)
      .then((data) => {
        console.log(data.data, 'Data in getHomes function');
        this.setState({ houses: data.data });
        console.log(this.state, 'State after setting it');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleMoreHomes() {
    this.setState({ moreRevealed: !this.state.moreRevealed });
  }

  render() {
    return (
      <Container>
        <Header> Other highly rated homes</Header>
        <HousesList state={this.state} toggleHomes={this.toggleMoreHomes} />
        <BottomPadding></BottomPadding>
        <GlobalStyle />
      </Container>
    )
  }
}

export default Suggestions;
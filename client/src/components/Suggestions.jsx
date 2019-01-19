import React from 'react';
import axios from 'axios';
import HousesList from './HousesList.jsx';
import { Container, Header, BottomPadding, GlobalStyle } from './Styled_Components/styling.jsx';

/*
- Houses is an array of objects {id: , suggestions: }
*/

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [{
        id: 0,
        suggestions: []
      }],
      moreRevealed: false,
      favoritesList: []
    };
    this.addFavoriteList = this.addFavoriteList.bind(this);
    this.addToFavorited = this.addToFavorited.bind(this);
    this.removeFromFavorited = this.removeFromFavorited.bind(this);
    this.toggleMoreHomes = this.toggleMoreHomes.bind(this);
  }

  //Where the initial homes request is called
  componentDidMount() {
    //Grab the URL
    this.getHomes(100);
    this.getFavoritesList();
  }

  //getHomes function to get the home numbers. 
  getHomes(num) {
    axios.get(`/homes/${num}/suggestions`)
      .then((data) => {
        console.log(data, 'Data in my frontend')
        this.setState({ houses: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFavoritesList() {
    axios.get('/user/favorites')
      .then((data) => {
        let ListNames = [];
        data.data.forEach((list) => {
          ListNames.push(list.favorites);
        });
        this.setState({ favoritesList: ListNames });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addFavoriteList(name) {
    axios.post('/user/favorites', {
      listName: name
    })
      .then((response) => {
        this.getFavoritesList();
      })
      .catch((error) => {
        console.log(error);
      });
  }


  addToFavorited(listName, houseName) {
    let oldFavorites;
    for (var i = 0; i < this.state.favoritesList.length; i++) {
      if (this.state.favoritesList[i][listName]) {
        oldFavorites = this.state.favoritesList[i][listName].slice();
      }
    }
    let newFavorites = oldFavorites.slice();
    newFavorites.push(houseName);

    axios.put('/user/updateFavorite', {
      listName, listName,
      oldList: oldFavorites,
      favList: newFavorites
    })
      .then((response) => {
        this.getFavoritesList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeFromFavorited(listName, houseName) {
    let oldFavorites;
    for (var i = 0; i < this.state.favoritesList.length; i++) {
      if (this.state.favoritesList[i][listName]) {
        oldFavorites = this.state.favoritesList[i][listName].slice();
      }
    }
    let newFavorites = oldFavorites.slice();
    for (var i = 0; i < newFavorites.length; i++) {
      if (newFavorites[i] === houseName) {
        newFavorites.splice(i, 1);
      }
    }

    axios.put('/user/updateFavorite', {
      listName, listName,
      oldList: oldFavorites,
      favList: newFavorites
    })
      .then((response) => {
        this.getFavoritesList();
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
        <Header>Other highly rated homes</Header>
        <HousesList
          state={this.state}
          toggleHomes={this.toggleMoreHomes}
          addFavoriteList={this.addFavoriteList}
          addToFavorited={this.addToFavorited}
          removeFromFavorited={this.removeFromFavorited}
        />
        <BottomPadding></BottomPadding>
        <GlobalStyle />
      </Container>
    );
  }
}

export default Suggestions;
import React, { Component } from "react";

import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

import character from './character.json'




class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    character,
    score: 0,
    topScore: 0
  };


// Map over this.state.cards and render a cardCard component for each card object
 render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}>Clicky Game</Navbar>
        {this.state.character.map(character => (
          <Cards
            clickCount={this.clickCount}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;

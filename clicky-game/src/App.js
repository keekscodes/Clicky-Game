import React, { Component } from 'react';

import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

import character from './character.json'


function random(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    score: 0,
    topScore: 0,
    selected: [],
    gameOver: false,
    countdown: '',
  };

  mixCards = () => {
    let shuffled = random(character);
    this.setState({chars: shuffled});
  }
  handleClick = (name) => {
    if (!this.state.gameover) {
      if (this.state.selected.indexOf(name) === -1) {
        // this.increment();
        this.setState({ selected: [...this.state.selected, name] });
      } else {
        this.setState({ msg: 'GAME OVER', gameOver: true })
        this.reset();
        setTimeout(() => {
          this.setState({ countdown: 3 });
        }, 1000)
        setTimeout(() => {
          this.setState({ countdown: 2 });
        }, 2000)
        setTimeout(() => {
          this.setState({ countdown: 1 });
        }, 3000)
      }
    } else {
      this.setState({ 
        msg: 'Click any character to begin', 
        selected: [],
        score: 0,
        gameover: false
      });
    }
  }

// Map over this.state.cards and render a card component for each card object
 render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}>Clicky Game</Navbar>
        <div className="container">
         <div className="row">

         {character.map(character => {
          console.log(character);
          return <Cards
            clickCount={this.clickCount}
            name={character.name}
            id={character.id}
            key={character.id}
            image={character.image}
            handleClick={this.handleClick}
          />
         })} 
        
           </div>
</div>
{/* 
{character.map(char => {
  console.log(char);
  let {name, image, id} = char;
  return <Cards src={image} name={name} id={id} key={id}/>
})} */}
      </Wrapper>
    );
  }
}


export default App;


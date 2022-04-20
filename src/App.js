import React from 'react';
import Card from "./components/Card";
import Profile  from "./components/Profile";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      name: [],
      move: [],
      image: [],
      searchfield: "",
    }
  }

  componentDidMount() {
      const range = (start, stop, step = 1) =>
      Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
      const indexs = range(0,20,3)
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then(response => response.json())
      .then(data => {
        indexs.forEach((i) => { 
        console.log(data.results[i].url)
        const url = data.results[i].url
          fetch(url)
          .then(response => response.json())
          .then(data => {
            this.state.name.push(data.name)
            this.state.move.push(data.moves[0].move.name)
            this.state.image.push(data.sprites.front_default)
            // console.log("Name: " + data.name)
            // console.log("Move: " + data.moves[0].move.name)
            // console.log("Image: "+ data.sprites.front_default)
            // console.log("...")
            
          })
        })
      })
  }


  render() {
    return (
      <div className="App text-center grid justify-items-center items-center h-screen">
        <Profile image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
        <Card name="Pikachu" move="Lightning-Rod" weight="60"/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Card from "./components/Card";
import Profile  from "./components/Profile";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indx: 0,
      name: [],
      move: [],
      image: [],
      weight: [],
    
    }
  }

  componentDidMount() {
      const range = (start, stop, step = 1) =>
      Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
      const indexs = range(0,20,3)
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then(response => response.json())
      .then(data => {
        let names = []
        let moves = []
        let images = []
        let weights = []
        indexs.forEach((i) => { 
        // console.log(data.results[i].url)
        const url = data.results[i].url
          fetch(url)
          .then(response => response.json())
          .then(data => {
            names.push(data.name)
            moves.push(data.moves[0].move.name)
            images.push(data.sprites.front_default)
            weights.push(data.weight)
            console.log(names)
            // console.log(this.state.name) 
            this.setState({name: names})
            this.setState({move: moves})
            this.setState({image: images})
            this.setState({weight: weights})
          })
        })
      })
  }


  render() {
    return (
      <div className="App text-center grid justify-items-center items-center h-screen">
        <Profile image={this.state.image[this.state.indx]}/>
        <Card name={this.state.name[this.state.indx]} move={this.state.move[this.state.indx]} weight={this.state.weight[this.state.indx]}/>
      </div>
    );
  }
}

export default App;

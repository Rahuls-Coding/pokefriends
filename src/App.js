import React from 'react';
import Card from "./components/Card";
import Profile  from "./components/Profile";
import Vector from './components/Vector.png'
import vector from "./components/vector1.png"
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indx: 99,
      name: [],
      move: [],
      image: [],
      weight: [],
    
    }
  }
  onForward() {
    if (this.state.indx < 100) {
    this.setState({indx: this.state.indx + 1})
    }
  }
  onBackward(){
    if (this.state.indx > 0) {
    this.setState({indx: this.state.indx - 1})
    }
  }
  componentDidMount() {
      const range = (start, stop, step = 1) =>
      Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
      const indexs = range(0,101)
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
        <div className="flex flex-row justify-items-center items-center">
          <button className="p-10" onClick={() => {this.onBackward()}}>
            <img className="w-4 h-4" src={Vector} alt=""/>
          </button>
          <Profile image={this.state.image[this.state.indx]} />
          <button className="p-10" onClick={() => this.onForward()}>
            <img className="w-4 h-4" src={vector} alt=""/>
          </button>
        </div>
        <Card name={this.state.name[this.state.indx]} move={this.state.move[this.state.indx]} weight={this.state.weight[this.state.indx]}/>
      </div>
    );
  }
}

export default App;

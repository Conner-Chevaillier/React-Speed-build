import React, { Component } from 'react';
import Card from './components/Card';
import Field from './components/Field';
import CardInfo from './components/CardInfo';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      resultArray: [],
      displayArray: [],
      displayInput: false,
      loaded: false
    }
  }
  async componentDidMount() {
    let responce = await fetch("https://swapi.co/api/people/")
    let json = await responce.json()
    this.setState({
      resultArray: json.results,
      loaded: true
    })
    console.log(json)
  }
  handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
    var char = this.state.resultArray.filter(randomChar => {
      this.state.displayArray += Math.floor(Math.random() * this.resultArray.results[randomChar])
    })
    console.log(char)
  }
  pushIntoDisplay = () => {
    var selection;
  }
  render() {
    return (
      <div>
        <h1> ALL HAIL LANDO !!</h1>
        <div>
          {this.state.loaded ?
            this.state.resultArray.map((item, index) => {
              return <Card key={index} item={item} handleClick={this.handleClick} />
            })
            : <div></div>
          }
          <Card />
        </div>
        <CardInfo />
        <Field />
      </div >
    )
  }
}



export default App;

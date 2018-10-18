import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class Line extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <td><img src={this.props.celeb.pictureUrl} width="50px"></img></td>
        <td>{this.props.celeb.name}</td>
        <td>{this.props.celeb.popularity}</td>
        <td><button onClick={() => this.props.clickDelete(this.props.celeb.name)}>Delete</button></td>
      </tr>
      )
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    console.log(contacts)
    console.log(contacts.slice(0,5))
    this.state = {listContacts : contacts.slice(0,5)}
  }
  randomPick() {
    this.state.listContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({listContacts: this.state.listContacts})
  }
  sortByName() {
    this.state.listContacts.sort(function(celeb1, celeb2){
      if (celeb1.name > celeb2.name)
        return 1
      else if (celeb1.name < celeb2.name)
        return -1
      else 
        return 0
    })
    this.setState({listContacts: this.state.listContacts})
  }
  sortByPopularity() {
    this.state.listContacts.sort(function(celeb1, celeb2){
      if (celeb1.popularity > celeb2.popularity)
        return 1
      else if (celeb1.popularity < celeb2.popularity)
        return -1
      else 
        return 0
    })
    this.setState({listContacts: this.state.listContacts})
  }

  deleteLine(name) {
    this.state.listContacts = this.state.listContacts.filter(celeb => {
      return celeb.name != name
    })
    this.setState({listContacts: this.state.listContacts})
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.randomPick.bind(this)}>Add Random Contact</button>
      <button onClick={this.sortByName.bind(this)}>Sort By Name</button>
      <button onClick={this.sortByPopularity.bind(this)}>Sort By Popularity</button>
      <table>
      <tr><th>Picture</th><th>Name</th><th>Popularity</th></tr>
      {this.state.listContacts.map( celeb => {
        return (
          <Line celeb={celeb} clickDelete={this.deleteLine.bind(this)} key={celeb.name}></Line>
          );
        })
      }
      </table>
      </div>
    );
  }
}

export default App;

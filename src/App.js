import React, { Component } from 'react';
import CardList from './CardList';
import SearchBots from './Search';
import { robots } from './json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      SearchField: ""
    }
  }
  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value })
  }
 
 componentDidMount(){
  this.setState({robots:robots})
 }

  render() {
    const FilterBots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>Bots</h1>
        <SearchBots SearchChange={this.onSearchChange} />
        <CardList robots={FilterBots} />
      </div>
    )
  }
}

export default App
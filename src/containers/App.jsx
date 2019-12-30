import React, { Fragment, Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/Searchbar';
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value});
  };

  render(){
    const { robots, searchField } = this.state;
    const filteredRobots = robots
    .filter((robot) => {
      return robot.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
    });
    if(!robots.length){
      return <h1>Loading</h1>
    }
    return (
      <Fragment>
        <header>
          <h1 className="title center">robofriends</h1>
        </header>
        <main>
          <SearchBar searchChange = { this.onSearchChange } />
          <Scroll>
            <ErrorBoundry>
              <CardList robots= { filteredRobots }/>
            </ErrorBoundry>
          </Scroll>
        </main>
      </Fragment>
      );
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
}

export default App;
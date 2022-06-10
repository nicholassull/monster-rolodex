import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  // Use this method for API calls. It runs once component is mounted. 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    //Shorthand for reasigning values with the same name in state.
    this.setState({ searchField })
  }

  render() {
    // Casts the different values and method onto variables for ease of use.
    const{ monsters, searchField, } = this.state;
    const { onSearchChange } = this;

    //Filters through monster list by search value.
    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <SearchBox 
        className='search-box'
        onChangeHandler={onSearchChange} placeholder='search monsters'
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;

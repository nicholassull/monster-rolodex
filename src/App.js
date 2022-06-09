import { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('== constructor ==');
  }
  // Use this method for API calls. It runs once component is mounted. 
  componentDidMount() {
    console.log('== componentDidMount ==')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }, () => {
        console.log(this.state);
      }
      ));
  }

  render() {
    console.log('== render ==')
    //Filters through monster list by search value.
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField));

    return (
      <div className="App">
        {/* onChange handler runs every time the value in the search bar changes */}
        <input className='search-box' type='search' placeholder='search monsters' 
        onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(
            () => {
              return { searchField };
            })
        }} 
        />
        {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;

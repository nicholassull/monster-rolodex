import { Component } from "react";

class SearchBox extends Component {

  render() {
    return (
      // onChange handler runs every time the value in the search bar changes
      <input className='search-box' type='search' placeholder='search monsters' 
      onChange={onSearchChange} 
      />
    )
  }
}

export default SearchBox;
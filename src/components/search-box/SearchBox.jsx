import { Component } from "react";
import './SearchBox.styles.css';


class SearchBox extends Component {

  render() {
    return (
      // onChange handler runs every time the value in the search bar changes
      <input 
      type='search'
      className={`search-box ${this.props.className}`}
      placeholder={this.props.placeholder} 
      onChange={this.props.onChangeHandler} 
      />
    )
  }
}

export default SearchBox;
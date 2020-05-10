import React, { Component } from "react";
import '../styles/SearchBox.css'

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.handleSearch(event.target.value);
    }

  render() {
    return (
      <div className="SearchBox">
        <input className="SearchBox-input" type="search" placeholder="Search Robot" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default SearchBox;

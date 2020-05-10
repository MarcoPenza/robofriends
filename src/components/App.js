import React from "react";
import "../styles/App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import robots from "./robots";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      search: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(value) {
      this.setState({
          search: value
      })
        

    console.log("input:" ,value);
  }

  render() {
    const { robots,search } = this.state;
    const filteredRobots =  robots.filter((robot) => robot.name.toLowerCase().includes(search))
    return (
      <div className="container">
        <h1 className="header-style">RoboFriends</h1>
        <SearchBox handleSearch={this.handleSearch} />
        <hr />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import "./App.css";
import CardList from "./component/card-list/CardList";
import SearchBox from "./component/search/SearchBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monstar: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monstar: users };
          }
        )
      );
  }
  searchIterm = (e) => {
    const searchField = e.target.value.toLocaleUpperCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monstar, searchField } = this.state; // state destructuring
    const { searchIterm } = this; // function destructuring
    const filteredMonstar = monstar.filter((monstar) => {
      return monstar.name.toLocaleUpperCase().includes(searchField);
    });

    return (
        <div className="App">
          <h1 className="app-title">40 Youth in Fobes</h1>
         <SearchBox onChangeHandler={searchIterm} inplaceholder="Search User" className='monstar-search-box'/>
          <br />
          <CardList monstar={filteredMonstar} />
        </div>
    );
  }
}

export default App;

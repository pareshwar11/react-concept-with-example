import { Component } from "react";
import '../search/SearchBox.css'

class SearchBox extends Component{
    render(){
        return(
            <input
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.inplaceholder}
            onChange={this.props.onChangeHandler}
          ></input>
        )
    }

}
export default SearchBox;
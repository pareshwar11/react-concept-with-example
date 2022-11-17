import React from "react";
import { Component } from "react";
import CardList from "./card-list/CardList";

class Aprogram extends Component {
    constructor() {
        super();
        this.state = {
            monstar: [],
            searchField:''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monstar: users };
                    },
                    () => {
                        return console.log(this.state);
                    }
                )
            );
    }
    searchIterm=(e) => {
        console.log(e.target.value);
        const searchField=e.target.value.toLocaleUpperCase();
        this.setState(()=>{
            return {searchField};
        })
    }
    render() {
        const {monstar, searchField}=this.state; // state destructuring
        const {searchIterm}=this; // function destructuring 
        const filteredMonstar=monstar.filter((monstar)=>{
            return monstar.name.toLocaleUpperCase().includes(searchField);
        });

        return (
            <>
                <div>
                    <input
                        type="search"
                        placeholder="enter text"
                        onChange={searchIterm}
                    ></input>
                    <br />
                    <CardList monstar={filteredMonstar}/>
                </div>
            </>
        );
    }
}
export default Aprogram;

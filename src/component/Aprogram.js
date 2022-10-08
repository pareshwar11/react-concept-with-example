import React from 'react'
import { Component } from 'react';

class Aprogram extends Component{
    constructor(){
        super();
        this.state={
            line:'dosto'
        }
        this.state={
            monstar:[
                {
                    name:'paresh',
                    id:'1'
                },
                {
                    name:'vivek',
                    id:'2'
                },
                {
                    name:'arun',
                    id:'3'
                }
            ]
        }
    }
    render(){
        return(
            < >
                <h1>Hello {this.state.line}</h1>
                <button onClick={()=>{
                    this.setState({
                        line:'friend'
                    })
                }}>Change Tag</button>
                {
                    this.state.monstar.map((monstars)=>{
                        return <div key={monstars.id}>
                            <h1>{monstars.name}</h1>
                            </div>
                    })
                }
            </>
        )
    }
}
export default Aprogram;
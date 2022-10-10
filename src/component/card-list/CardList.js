import  { Component } from 'react'
import Card from './Card'
import './CardList.css'
class CardList extends Component{
    render(){
        const {monstar}=this.props;
        return(
            <div className='card-list'>
                {monstar.map((monstar) =>{
                    return <Card monstar={monstar} />;
                })}
            </div>
        )
    }
}
export default CardList;
import React, { Component } from 'react'
import Item from './Item';



 class List extends Component {
  
  calculateLength=(arr,index)=> {
    return arr[index].word.split("").filter(el => el === "e").length;
  } 
  render() {
   
    return (
      <div>
        { this.props.arr?(this.props.arr.map((el,i,arr)=>{
      return <Item key={i+1} word={`(${el.num},${this.calculateLength(arr,i)})("${el.word}" has ${this.calculateLength(arr,i)===0?'no':`${this.calculateLength(arr,i)}`} ${this.calculateLength(arr,i)>=2?"'e's":'e'})`}/>
    })):''}
      </div>
    )
  }
}
export default List

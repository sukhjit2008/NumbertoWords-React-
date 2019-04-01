import React, { Component } from 'react'
import InputValues from '../Input/InputValues';

class Dashboard extends Component {
render() {
    return (
      <div>
       <InputValues range={this.range}/>
      </div>
    )
  }
}
export default Dashboard;
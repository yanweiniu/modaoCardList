import React, { Component } from 'react';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 'all'
    }
    this.handleVal = this.handleVal.bind(this);
  }
  handleVal(event){
    let val =  event.target.value
    this.props.onChage(val);
  }
  
  render () {
    const options = [
        { value: 'all', label: '所有项目组' },
        { value: 'lock', label: '锁定' },
        { value: 'private', label: '私密' }
    ];
    return (
      <div>
        <select name="choice" onChange={this.handleVal} style={{backgroundColor: "#e7e7e7", border: "0", margin: '1rem 0', outline: 'none'}}>
            <option value="all" selected>所有项目组</option> 
            <option value="lock" >锁定</option>
            <option value="private">私密</option>
        </select>
      </div>
    );
  }
}

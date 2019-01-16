import React, { Component } from 'react';
import Card from './Card';
import Select from './Select';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  getData(){ //请求数据函数
    let result = [
      {name: '墨刀实验室', color: '#ddd', isPrivate: true, isLock: true, count: 5},
      {name: '墨刀魔法棒团队', color: '#aaf', isPrivate: true, isLock: true, count: 5},
      {name: '超级工作组', color: 'orange', isPrivate: false, isLock: true, count: 5},
      {name: '冷笑客服组', color: '#efe', isPrivate: true, isLock: false, count: 5},
      {name: '设计部门', color: '#aaa', isPrivate: true, isLock: true, count: 5},
      {name: 'Third Reactor', color: '#bff', isPrivate: true, isLock: true, count: 5},
    ]
    this.setState({list: result})
    this.setState({data: result})
  }
  componentWillMount(){
    this.getData()   
  }

  filters(val) {
    let list = this.state.data
    if (val === 'lock') {
      list = list.filter(item => 
        item.isLock === true
      )
    } else if(val === 'private') {
      list = list.filter(item => 
        item.isPrivate === true
      )
    }
    this.setState({list: list})
  }
  create(val) {
    console.log("create card", val);
    alert('新建卡片')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Select onChage = {this.filters.bind(this)}></Select>
        </header>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', gridAutoRows:'minmax(100px, auto)'}}>
          {this.state.list.map(item => <Card key={item.name} name={item.name} color = {item.color} isPrivate = {item.isPrivate} isLock ={item.isLock} count ={item.count}></Card>)} 
          <Card create='true' onClick = {this.create.bind(this)}></Card>
        </div>
      </div>
    );
  }
}

export default App;

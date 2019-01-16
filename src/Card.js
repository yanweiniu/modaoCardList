import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hover: false
      }
  }
  static defaultProps = {
    name: '',
    color: '',
    isLock: false,
    isPrivate: false,
    count: 0,
    create: false,
    prefix: 'card'
  };

  toggleHover = () =>{
    this.setState({hover: !this.state.hover})
  }
  clickHandle= () =>{
    this.props.onClick()
  }
  render() {
    const {
      name,
      color,
      isLock,
      isPrivate,
      count,
      create
    } = this.props;
    let linkStyle;
    if (this.state.hover) {
      linkStyle = {boxShadow: '0 3px 15px rgba(0,0,0,0.3)'}
    }
    return (
      <div style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
        {create?
        <div onClick = {this.clickHandle} style={{height: '100%', background: '#fff', borderRadius: '5px', display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <span style={{ width: '50px', height: '50px', display: 'block', backgroundColor: 'gray', borderRadius:'50%', textAlign: 'center',  color: "#fff", fontSize: '2rem'}}>+</span>
            <span style={{color: 'gray', borderRadius:'50%', textAlign: 'center'}}>新建项目组</span>            
        </div>
        :<div style={{background: '#fff', border: isLock ? '2px solid #ccc':'', borderRadius: '5px', padding: '30px',display:'flex'}}>
            <div style={{flex:1}}>
                <span style={{ width: '40px', height: '40px', display: 'inline-block', backgroundColor: color, borderRadius:'50%'}}>
                </span>        
            </div>
            <div style={{flex:4}}>
                <span>{name}</span>
                <p>
                    { isLock && <span style={{border: '1px solid #ddd', color: "#999", fontSize: '.8rem', padding: '.1rem .2rem', marginRight: '.3rem'}}>锁定</span>}
                    { isPrivate && <span style={{border: '1px solid #ddd', color: "#999", fontSize: '.8rem', padding: '.1rem .2rem'}}>私有</span>}
                </p>
                <span style={{color: "#999", fontSize: '.8rem'}}>{count} 项目</span>
            </div>
        </div>
        }
      </div>
    );
  }
}

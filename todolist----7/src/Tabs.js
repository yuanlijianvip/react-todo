import React, { Component } from 'react';
import './Tabs.css'
export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: [
        {
          key: 'all',
          name: '全部'
        }, {
          key: 'active',
          name: '未完成'
        }, {
          key: 'completed',
          name: '已完成'
        }
      ]
    }
  }
  changeStatus(key){
    this.props.changeStatus(key)
  }
  clearTodoList(){
    this.props.clearTodoList()
  }
  render() {
    let statusArr = this.state.status.map(x => {
      // if (x.key == 'allIn') {
      //   return <span className={['state','seleted', this.props.keys === x.key ? 'actived' : ''].join(" ")} key={x.key} onClick={this.props.selectAll}>{x.name}</span>
      // }
      return <span className={['state', this.props.keys === x.key ? 'actived' : ''].join(" ")} key={x.key} onClick={this.changeStatus.bind(this,x.key)}>{x.name}</span>
    })
    return (
      <div className="helper">
        <span className="left">{this.props.unFinishCount}项未完成</span>
        <span onClick={this.props.selectAll} className={this.props.selectAllStatus ? '' : 'selected actived'}>全选</span>
        <span className="tabs">
          {statusArr}
        </span>
        <span className="clear" onClick={this.clearTodoList.bind(this)}>删除已完成任务</span>
      </div>
    )
  }
}
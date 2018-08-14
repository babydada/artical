import React, { Component } from 'react';
import './animation.css'

class Meau extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meauArr: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五', '菜单六',],
      recommend: [
        {
          title: '这是第1篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '这是第2篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '这是第3篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '这是第4篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '这是第5篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '这是第6篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '这是第7篇推荐阅读',
          content: '这是推荐阅读的简介'
        },
        {
          title: '最后一篇啦',
          content: '这是推荐阅读的简介'
        }

      ],
      meauCurrent: 1,//当前菜单
      x: 0,
      title: ''
    }
  }

  change() {
    if (this.state.recommend.length === 1) {
      return;
    } else {
      this.state.recommend.shift()
      this.setState({
        recommend: this.state.recommend
      })
    }
  }

  render() {
    return (
      <div style={{ marginRight: '100px' }}>
        <div>
          {this.state.meauArr.map((item, i) => (
            <span onClick={(item) => { this.setState({ meauCurrent: this.state.meauCurrent + 1 });}} style={{ display: 'block' }} key={i} className="meau">
              {item}
            </span>
          ))}
        </div>
        <div style={{ marginTop: '100px' }}>
          <span>推荐阅读</span>
          <div>
            <h4>{this.state.recommend[0].title}</h4>
            <p>{this.state.recommend[0].content}</p>
          </div>
          <span onClick={() => this.change()}>换一篇</span>
        </div>
      </div>
    )
  }

}

export default Meau;
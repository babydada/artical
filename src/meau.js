import React, { Component } from 'react';
import './animation.css'

class Meau extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
      visible: true,
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
  toggle() {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    var childNodes;

    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map(function (node, index) {
        return <li key={index}><Meau node={node} /></li>
      })

      let className1 = 'togglable';
      let className2 = this.state.visible ? 'togglable-down' : 'togglable-up';
      var classNameFinal = className1 + ' ' + className2;
    }

    var style;

    if (!this.state.visible) {
      style = { display: "none" };
    }

    return (
      <div style={{ marginRight: '10px'}}>
        <div>
          <h5 onClick={() => { this.toggle() }} className={classNameFinal}>
            {this.props.node.title}
          </h5>
          <ul style={style}>
            {childNodes}
          </ul>
        </div>
      </div>
    )
  }
}

export default Meau;
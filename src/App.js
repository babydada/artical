import React, { Component } from 'react';
import Artical from './artical';
import Meau from './meau';
import PostArtical from './postArtical';
import Header from './header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artical: [
        {
          title: '上海生活馆',
          desc: '上海生活馆是一家..........',
          content: 'first artical'
        },
        {
          title: '好好学习',
          desc: 'good good study',
          content: 'second artical'
        },
        {
          title: '天天向上',
          desc: 'day day up',
          content: 'third artical'
        }
      ],
      searchKey: '',
      search:[]
    }
  }
  handleSubmit = (data) => {
    let newArr = [].concat(this.state.artical);
    newArr.unshift(data);
    this.setState({
      artical: newArr
    })
  }
  handleSearch(key) {
    if (key) {
      var titleArr = [];
      this.state.artical.forEach((item) => {
        if (item.title.search(key) !== -1) {
          titleArr.push(item);
        }
      })
      console.log(titleArr);
      this.setState({
        search: titleArr
      })
    }else{
      this.setState({
        search: []
      })
    }
  }
  render() {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Header filterCallback={this.handleSearch.bind(this)} />
        <PostArtical filterCallback={this.handleSubmit.bind(this)} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', width: '75%', margin: '100px auto' }}>
          <Meau />
          <Artical artical={this.state.search.length>0?this.state.search:this.state.artical} />
        </div>
      </div>
    )
  }
}

export default App;

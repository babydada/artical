import React, { Component } from 'react';
import ArticalItem from './artical-item';

class Artical extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

  }
  render() {
    return (
      <div style={{ width: '75%' }}>
        {this.props.artical.map((item, i) => (
          <ArticalItem title={item.title} desc={item.desc} content={item.content} key={i} />
        ))}
      </div>
    );
  }
}

export default Artical;
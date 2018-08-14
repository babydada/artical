import React, { Component } from 'react'
// import Logo from './logo';
// import Search from './search';
import './animation.css';
import logo from './logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            searchKey: ''
        }
    }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    //网上copy的动画
    focus = () => {
        this.setState((state) => ({ focused: !state.focused }))
    }

    search=(e)=> {
        const { filterCallback } = this.props;
        const key = this.state.searchKey;
        filterCallback(key);
    }
    render() {
        return (
            <div className="header">
                <div
                    style={{ width: '75%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0 auto', alignItems: 'center' }}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="searchWrap">
                        <input
                            type="text"
                            className={['search', this.state.focused && 'search-focused'].join(' ')}
                            placeholder="搜索本页"
                            ref={input => this.input = input}
                            value={this.state.searchKey}
                            onChange={(e) => { this.setState({ searchKey: e.target.value }) }} />
                        <input
                            type="button"
                            className="searchBtn"
                            value="搜索"
                            onClick={this.search} />
                    </div>
                </div>

            </div>
        )
    }
}
export default Header
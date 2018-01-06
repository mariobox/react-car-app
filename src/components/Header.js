import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{this.props.text}</h1>
            </header>
        );
    }
}

export default Header;
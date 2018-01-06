import React, { Component } from 'react';
 
class Car extends Component {
  render() {
    return (
      <div className="car">
        <h2>{ this.props.meta.model }</h2>
      <div><img width="100%" src={ this.props.meta.picture } alt="" /></div>
        <p>{ this.props.meta.blurb }</p>
        <p><strong>{ this.props.meta.engine }</strong></p>
      </div>
    );
  }
}
 
export default Car;
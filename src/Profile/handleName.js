import React, { Component } from 'react';
import Proptypes from 'prop-types';


export class handleName extends Component{
    syaName() {
        alert('Hello!');
        }
    render() {
        return (
        <button onClick={this.props.fullName}>
            Click me!
        </button>
        )
    }
}
handleName.propTypes = {
    todos: Proptypes.object.isRequired
}
export default handleName;
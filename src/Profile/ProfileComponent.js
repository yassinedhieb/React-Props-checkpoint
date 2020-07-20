import React, { Component } from 'react';
import Proptypes from 'prop-types';
import handleName from './handleName';


export class ProfileComponent extends Component{
    render() {
        return (
            <div>
                <h3>fullName:{this.props.fullName}</h3>
                <h3>Bio:{this.props.Bio}</h3>
                <h3>Profession:{this.props.profession}</h3>
                <div className="App">

                <button onClick={()=>this.props.handleName(this.props.fullName)}>
                    Click me!
                </button>            
                </div>
                {this.props.children}

            </div>
        )
    }
}
ProfileComponent.defaultProps={
    fullName:"Yassine",
    Bio:"1995",
    profession:"Engineer"
}
ProfileComponent.propTypes = {
    fullName: Proptypes.string.isRequired,
    Bio: Proptypes.string.isRequired,
    profession: Proptypes.string.isRequired

}
export default ProfileComponent;
import React, { Component } from 'react';
import Spinner from '../Components/UI/Spinner/Spinner';

const loadCheck = (propName) => (WrappedComponent) => {
    return class loadCheck extends Component {
        isEmpty(prop){
            return (
                prop === null || prop === undefined || (prop.hasOwnProperty('length') && prop.length === 0 ) || (prop.constructor === Object && Object.keys(prop).length === 0)
            )
        }
        render() {
            return this.isEmpty(this.props[propName]) ? <Spinner /> : <WrappedComponent {...this.props}/>
        }
    }
}


export default loadCheck;

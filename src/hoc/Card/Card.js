import React from 'react';
import styles from './card.scss';

const Card = (props) => {
    //let isPresenter = props.presenter;
    return (
        <div className={[
          styles['card'], styles[props.bemClass],styles[props.modClass],
          props.presenter ? styles['card--clicked'] : styles[''] ].join(' ')}
          onClick={props.clicked} >
            {props.children}
        </div>
    );
    
}

export default Card;
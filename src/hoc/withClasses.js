import React from 'react';
import styles from '../Components/Persons/Persons.scss';

const withClasses = (props) => (

        <div className={styles['individual']}>
            {props.children}
        </div>
)
export default withClasses;

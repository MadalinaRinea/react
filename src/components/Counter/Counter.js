import React, { useState } from 'react';

import styles from './Counter.module.css';

function Counter() {
    // let count = 400;
    const [count, setCount] =  useState(0);

    function handleClick(diff) {
        setCount(count + diff);
    }

    return( 
        <div className={styles.container}>
            <button onClick={ () => handleClick(1) } className={ styles.btn }>+</button>
            <button onClick={ () => handleClick(-1) } className={ styles.btn }>-</button>
            <strong className={ count >= 0 ? styles['output--positive'] : styles['output--negative'] }>{ count }</strong>
        </div>
    )
}

export default Counter;

// cum functioneaza useState
// function useState(initialValue){
//     let state = intialState;

//     function changeState(newValue){
//         state = newValue;
//         React.render();
//     }

//     return [state, changeState];
// }
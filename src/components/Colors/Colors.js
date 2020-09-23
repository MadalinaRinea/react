import React, { useState } from 'react';

let arrOfColors = ['#cacaca', '#bada55', '#ff0000'];

function Counter() {
    const [color, setColor] =  useState(0);

    function handleChange(col) {
        for (let i = 0; i < arrOfColors.length; i++) {
            setColor((i+1)%3);
        }
        setColor(count + diff);
    }

    return( 
        <div >
            <button onClick={ () => handleChange() }>+</button>
            {/* <strong className={ count >= 0 ? styles['output--positive'] : styles['output--negative'] }>{ count }</strong> */}
        </div>
    )
}

export default Colors;

// cum functioneaza useState
// function useState(initialValue){
//     let state = intialState;

//     function changeState(newValue){
//         state = newValue;
//         React.render();
//     }

//     return [state, changeState];
// }
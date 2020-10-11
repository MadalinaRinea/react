import React, { useState } from 'react';

let arrOfColors = ['#cacaca', '#bada55', '#ff0000'];

function Colors() {
    const [color, setColor] =  useState('');

    function handleChange() {
        for (let i = 0; i < arrOfColors.length; i++) {
            setColor((i+1)%3);
        }
    }

    return( 
        <div >
            <strong className={ arrOfColors[color]}>{ 'Currently Selected Colors:' + color}</strong>
            <button onClick={ () => handleChange() }>Change Color</button>
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
import React from "react";
import './style.css';

function Plus({sinbol}){
    const stl ={
        gridArea:'enter',
    };
    return(
        <button id="plus">
            <span style={stl}>+</span>
        </button>
    );
}

export default Plus;
import React from "react";
import './style.css';

function Plus({sinbol}){
    const stl ={
        gridArea:'enter',
    };
    return(
        <div id="plus">
            <span style={stl}>+</span>
        </div>
    );
}

export default Plus;
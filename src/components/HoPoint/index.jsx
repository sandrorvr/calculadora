import React from "react";
import './style.css';
import Key from '../KeyBoard/UniqueKey'
function HoPoint(){
    return (
        <div className="hoPoint">
            <Key key_label="0"/>
            <Key key_label="."/>
        </div>
    );
}

export default HoPoint;
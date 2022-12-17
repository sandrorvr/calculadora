import React from "react";
import './style.css';
import Key from '../KeyBoard/UniqueKey'
function KeySpecial(){
    return (
        <div className="keySpecial">
            <Key key_label="C"/>
            <Key key_label="/"/>
            <Key key_label="*"/>
            <Key key_label="-"/>
        </div>
    );
}

export default KeySpecial;
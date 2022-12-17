import  React from 'react'
import './style.css'

import Key from './UniqueKey'

function KeyBoard (){
  return (
    <div className="keyBoard">
      <Key key_label="7"/>
      <Key key_label="8"/>
      <Key key_label="9"/>
      <Key key_label="4"/>
      <Key key_label="5"/>
      <Key key_label="6"/>
      <Key key_label="1"/>
      <Key key_label="2"/>
      <Key key_label="3"/>
    </div>
  );
}

export default KeyBoard;

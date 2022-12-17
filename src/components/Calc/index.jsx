import  React from 'react'
import './style.css'

import KeyBoard from '../KeyBoard';
import Enter from '../Enter';
import Plus from '../Plus';

function Calc (){
  return (
    <div id="calc">
      <KeyBoard />
      <Plus sinbol={"+"}/>
      <Enter sinbol={"enter"}/>
    </div>
  );
}

export default Calc;

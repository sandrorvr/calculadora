import  React from 'react'
import './style.css'

import KeyBoard from '../KeyBoard';
import Enter from '../Enter';
import Plus from '../Plus';
import KeySpecial from '../KeySpecial';
import HoPoint from '../HoPoint';
import View from '../View';

function Calc (){
  return (
    <div id="calc">
      <KeyBoard />
      <Plus sinbol={"+"}/>
      <Enter sinbol={"enter"}/>
      <KeySpecial/>
      <HoPoint/>
      <View />
    </div>
  );
}

export default Calc;

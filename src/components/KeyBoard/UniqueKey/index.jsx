import  React from 'react'
import './style.css'

function Key ({key_label}){
  let widthSTL = "6rem";
  if (key_label === "0"){
    widthSTL = "12.8rem";
  }
  return (
    <div className="key" style={{width:widthSTL}}>
      <span>{key_label}</span>
    </div>
  );
}

export default Key;

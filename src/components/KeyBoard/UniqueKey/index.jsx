import  React from 'react'
import './style.css'

function Key ({key_label}){
  let widthSTL = "6rem";
  if (key_label === "0"){
    widthSTL = "12.8rem";
  }
  return (
    <button className="key" style={{width:widthSTL}}>
      <span>{key_label}</span>
    </button>
  );
}

export default Key;

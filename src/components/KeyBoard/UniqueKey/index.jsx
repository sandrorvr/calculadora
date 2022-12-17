import  React from 'react'
import './style.css'

function Key ({key_label}){
  return (
    <div className="key">
      <span>{key_label}</span>
    </div>
  );
}

export default Key;

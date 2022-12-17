import React from 'react'
import ReactDOM from 'react-dom/client'
import Calc from './components/Calc'
import Key from './components/Key'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calc>
      <Key key_label="7" />
      <Key key_label="8" />
      <Key key_label="9" />
      <Key key_label="4" />

    </Calc>
  </React.StrictMode>,
)

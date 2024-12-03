import React from 'react'
import './Err.css'
import errfarid from '../../components/img/errfarid.png'
function Err() {
  return (
    <div className='errpage' >
      <div className="container">
        <div className='errpageWrap'>
          <img src={errfarid} alt="" />
        <h1>404</h1>
        </div>
      </div>
    </div>
  )
}

export default Err
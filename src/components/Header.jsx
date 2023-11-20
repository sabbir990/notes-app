import React, { useState } from 'react'
import '../index.css'

export default function Header({togglebg}) {
    const [blackToggle, setBlackToggle] = useState(true)
    const handleToggleClick = () => {
        setBlackToggle(!blackToggle)
        togglebg(blackToggle)
    }
  return (
    <div className='header-parent'>
        <h1>Notes</h1>
        <button onClick={handleToggleClick}>{blackToggle ? "Enable Dark Mode" : "Disable Dark Mode"}</button>
    </div>
  )
}

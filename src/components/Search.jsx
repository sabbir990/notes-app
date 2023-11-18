import React from 'react'
import {MdSearch} from 'react-icons/md'
import '../index.css'

export default function Search({getSearchedValue}) {
    const handleSearch = (event) => {
        getSearchedValue(event.target.value)
    }
  return (
    <div className='search-parent'>
        <MdSearch size='1.3em'/>
        <input type="text" placeholder='search your task here' onChange={handleSearch}/>
    </div>
  )
}

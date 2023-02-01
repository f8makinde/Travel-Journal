import React from 'react'
import navIcon from '../images/universe.png'
import '../index.css'
export default function Nav(){
    return (
        <div className='nav--section'>
             <img src={navIcon} alt='world-logo' />
             <h4 className='nav-text'>my travel journal</h4>
        </div>
    )
}
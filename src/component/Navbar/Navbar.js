import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon" />
        <nav className="nav"> 		
          <ul className="pt-5">
            <li><a href="#">เกี่ยวกับหมอหมึก</a></li>
            <li><a href="#">บทความ</a></li>
            <li><a href="#">จองคิว</a></li>
          </ul>
        </nav>
    </div>
  )
}

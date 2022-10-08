import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";
import items from "../nav"
const Navbar = ({ handleSearch }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <Link to={"/"}>Crypto Vlog</Link>
                    </div>

                    <ul className={`nav__links ${showMenu && "active"}`}>
                        {items.map((item) => (
                            <li key={item.id}><Link to={`/${item.name}`} key={item.id}>{item.name}</Link></li>
                        ))}
                    </ul>

                    {/* <form className="nav__form" onSubmit={handleSearch}>
                        <input type="text" />
                        <FaSearch />
                    </form> */}
                    <div className={`toggler ${showMenu && "active"}`} onClick={() => setShowMenu(!showMenu)}></div>
                </nav>

            </div>
        </header>
    )
}

export default Navbar
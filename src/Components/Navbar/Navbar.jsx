import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, Navigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext';


 
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="img" />
        <p>Shopper</p>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes className='FaTimes1' /> : <FaBars className='FaBars1' />}
      </div>

      {/* Nav Menu */}
      <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {['shop', 'mens', 'womens', 'jewelery', 'electronics'].map((item) => (
          <li key={item} onClick={() => { setMenu(item); setMobileMenuOpen(false); }}>
            <Link style={{ textDecoration: 'none' }} to={`/${item === 'shop' ? '' : item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && <hr />}
          </li>
        ))}
        {/* Include login and cart in mobile menu */}
        <li className='mobile-login-cart'>
          {user ? (
            <div className='avatar-section' onClick={handleAvatarClick}>
             {(user?.name?.[0] || 'U').toUpperCase()}
              {dropdownOpen && (
                <div className="dropdown">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to='/login'><button>Login</button></Link>
          )}
          <Link to='/cart'><img src={cart_icon} alt="cart" /><span className="nav-cart-count">0</span></Link>
        </li>
      </ul>

      {/* Desktop login/cart */}
      <div className='nav-login-cart'>
        {user ? (
          <div className='avatar-section' onClick={handleAvatarClick}>
           <div className='avatar'>
  {user && user.name ? user.name[0].toUpperCase() : 'U'}
</div>
            {dropdownOpen && (
              <div className="dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{cartItems.length}</div>
      </div>
    </div>
  );
}

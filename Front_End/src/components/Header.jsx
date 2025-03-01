import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/images/LogoFlowerShop.png';
import logInIcon from '../assets/images/login.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/users/current', { withCredentials: true });
        if (response.data) {
          setIsLoggedIn(true);
          setRole(response.data.role);
        }
      } catch (error) {
        setIsLoggedIn(false);
        setRole(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <header>
      <div className='head-menu'>
        <nav>
          <ul className='menu'>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                ⟡ Home ⟡
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink to='/shop' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                  ⟡ Shop ⟡
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to='/contact' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                ⟡ Contact ⟡
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='menu-user'>

          {role === 'admin' && (

            <NavLink to="/allusers" className={({ isActive }) => isActive ? 'menu-item menu-item-admin active' : 'menu-item menu-item-admin'}>
              ⟡ All Users ⟡
            </NavLink>

          )}

        <NavLink to={isLoggedIn ? '/account' : '/login'}>
          <img src={logInIcon} alt="User Icon" className="logIn-logo" />
        </NavLink>
        <img src={logo} alt="store's logo" className="logo-small" />
                </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <MyButton  style ={{background: 'white'}} onClick={logout}>
      Выйти
      </MyButton>
      <div className="navbar__links">
         <MyButton style ={{background: 'white'}} ><Link to ="/about">О сайте</Link></MyButton>
        <MyButton style ={{background: 'white' }} ><Link to ="/posts">Посты</Link></MyButton>
      </div>
    </div>
  );
}

export default Navbar;
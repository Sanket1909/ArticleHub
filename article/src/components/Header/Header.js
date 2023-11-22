import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { ReactComponent as Logo } from '../../assets/react-logo.svg';
import './Header.css';

const Header = () => {
  const user = useSelector(selectUser);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Logo className="header__logoIcon" />
        </div>
        <Link to="/" className="header__text">Sanket Patel Articles</Link>
      </div>

      {user ? (
        <div className="header__right">
          <div className="header__icons">
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>

            <Link>
              <i onClick={signOut} className="fas fa-sign-out-alt" alt="Sign Out"></i>
            </Link>
            <Avatar className="header__avatar" src={user.photo}></Avatar>
          </div>
        </div>
      ) : (
        <Button onClick={signIn} variant="contained" color="secondary">
          Log In
        </Button>
      )}
    </div>
  );
};

export default Header;


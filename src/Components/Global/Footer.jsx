import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <Logo />
        <Link to="/privacypolicy">Privacy policy</Link>
      </div>
    </footer>
  );
}

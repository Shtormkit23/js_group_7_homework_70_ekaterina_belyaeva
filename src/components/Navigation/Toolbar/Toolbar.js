import React from 'react';
import Logo from "../../Logo/Logo";
import './Toolbar.css';

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo />
      </div>
    </header>
  );
};

export default Toolbar;
import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = props => (
  <div
    className="menu-bar"
  >
    <div
      className="left"
    >
      <p>.</p>
    </div>
    <Link
      to="/app"
      className="center"
    >
      <p>Task Sprint</p>
      <img
        src="/imgs/runner.svg"
        alt=""
      />
    </Link>
    <div
      className="right"
    >
      <Link
        to="/help"
      >❔</Link>
    </div>
  </div>
);

export default MenuBar;
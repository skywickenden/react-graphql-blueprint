import React from 'react';
import { Link } from "react-router-dom";

const MainLayout = props => (
  <div>
    <header>
      <h1>React Client Blueprint</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/foo">Foo</Link>
      </nav>
    </header>
    <main>
      {props.children}
    </main>
  </div>
);

export default MainLayout;
import React from 'react';
import { Link } from "react-router-dom";
import { css } from "linaria";

const styles = {
  title: css`
    color: #872258;
    font-size: 30px;
  `
}

const MainLayout = props => (
  <div>
    <header>
      <h1 className={styles.title}>React GraphQL Blueprint</h1>
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
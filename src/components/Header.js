import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to='/WelcomePage'>
        Home
      </Link>
      <Link to='/CharacterList'>
        Characters!
      </Link>
    </header>
  );
}

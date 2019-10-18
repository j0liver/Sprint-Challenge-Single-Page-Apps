import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/WelcomePage' component={WelcomePage} />
      <Route path='/CharacterList' component={CharacterList} />

      {/* // <CharacterList /> */}
    </main>
  );
}

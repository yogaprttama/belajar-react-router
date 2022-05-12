import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import ListGroup from "./ListGroup";
import Card from "./Card";

const App = () => {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListGroup />} />
          <Route path="/post/:id" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
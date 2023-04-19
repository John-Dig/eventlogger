import React from "react";
import Header from "./Header";
import '../App.css';
import SightingsControl from "./SightingsControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <SightingsControl />
    </React.Fragment>
  );
}

export default App;

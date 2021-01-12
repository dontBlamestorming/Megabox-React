import React from "react";

// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Movie from "./components/Movie";
import Event from "./components/Event";
import Opening from "./components/Opening";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Movie />
      <Event />
      <Opening />
      <New />
    </div>
  );
}

export default App;

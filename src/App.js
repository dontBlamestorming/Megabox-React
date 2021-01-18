import React from "react";

// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Movie from "./components/Movie";
import Event from "./components/Event";
import Opening from "./components/Opening";
import New from "./components/New";
import Help from "./components/Help";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Movie />
      <Event />
      <Opening />
      <New />
      <Help />
      <Footer />
    </div>
  );
}

export default App;

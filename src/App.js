import React from "react";

import "./components/style/fonts.scss";
import "./components/style/global.scss";

import Header from "./components/header/header.tsx";
import VideoElementList from "./components/VideoElementList/VideoElementList.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="max-width">
        <VideoElementList />
        <h1>Saved results: {2}</h1>
        <VideoElementList />
      </main>
    </div>
  );
}

export default App;

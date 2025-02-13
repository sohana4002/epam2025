import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="flex-1 flex">
        <Sidebar />
        <Display/>
        <div className="flex-1">
          <h1></h1>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default App;

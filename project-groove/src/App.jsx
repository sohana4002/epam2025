import {React, useContext} from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import {PlayerContext} from "./context/PlayerContext";
import LandingPage from "./components/LandingPage";

const App = () => {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div className="h-full bg-black flex flex-col">
      <div className="flex-1 flex">
        <Sidebar />
        <Display/>
        <div className="h-full bg-black flex-1">
          <h1></h1>
        </div>
        
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
      
    </div>
  );
};

export default App;

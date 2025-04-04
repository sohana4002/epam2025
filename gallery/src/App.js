import React from "react";
import "./App.css";

// Import local images
import photo1 from "./images/photo1.jpeg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import photo4 from "./images/photo4.jpg";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpeg";


const photos = [
  { id: 1, src: photo1, desc: "My Family" },
  { id: 2, src: photo2, desc: "My favourite movie: Harry Potter" },
  { id: 3, src: photo3, desc: "My favourite fictional characters: Spiderman and Deadpool" },
  { id: 4, src: photo4, desc: "My favourite vacation destination: Mountains" },
  { id: 5, src: photo5, desc: "My favourite hobby: Reading books" },
  { id: 6, src: photo6, desc: "The University I currently study in: KL University, Hyderabad" }
];

function App() {
  return (
    <div className="app">
      <div className="gallery">
        {photos.map((photo) => (
          <div className="card" key={photo.id}>
            <img src={photo.src} alt={photo.desc} />
            <p>{photo.desc}</p>
          </div>
        ))}
      </div>
      <div className="scrolling-title">
        <div className="scroll-text">My Gallery: Life, Likes & Little Things</div>
      </div>
    </div>
  );
}

export default App;

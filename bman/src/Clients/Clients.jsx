import React, { useState } from "react";
import "./Clients.css";
import brooke from "../images/brooke-logo.png";
import tibackground from "../images/ti-background.jpg";
import tilogo from "../images/ti-logo.png";
import tividsample from "../videos/tiwz-clip.mp4";
import ticlaymore from "../videos/claymore.mp4";
import xaphora1 from "../videos/xaphora1.mp4";
import xaphora2 from "../videos/xaphora2.mp4";
import xaphora3 from "../videos/xaphora3.mp4";
import zuno1 from "../videos/zuno1.mp4";
import zuno2 from "../videos/zuno2.mp4";
import zuno3 from "../videos/zuno3.mp4";
import brooke1 from "../videos/brooke1.mp4";
import brooke2 from "../videos/brooke2.mp4";
import brooke3 from "../videos/brooke3.mp4";
import queen1 from "../videos/queendee1.mp4";
import queen2 from "../videos/queendee2.mp4";
import queen3 from "../videos/queendee3.mp4";
import kea1 from "../videos/kea1.mp4";
import kea2 from "../videos/kea2.mp4";
import tiunboxing from "../videos/cod-unboxing.mp4";
import xaphoralogo from "../images/xaphora-logo.png";
import zunologo from "../images/zuno-logo.jpg";
import dequeenlogo from "../images/deequeenlogo.png";
import brookelogo from "../images/brooke-logo.png";
import kealogo from "../images/kea-logo.png";

function Clients() {
  const clients = [
    {
      id: 1,
      name: "Client A",
      description: "This is client A's description.",
      image: brooke,
      background: tibackground,
    },
    {
      id: 2,
      name: "Client B",
      description: "This is client B's description.",
      image: "https://via.placeholder.com/150?text=Client+B",
    },
    {
      id: 3,
      name: "Client C",
      description: "This is client C's description.",
      image: "https://via.placeholder.com/150?text=Client+C",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
      setFade(true);
    }, 200);
  };

  const client = clients[currentIndex];

  return (
    <div className="client-container">
      <div className={`client-content ${fade ? "fade-in" : "fade-out"}`}>
        <img src={client.image} alt={client.name} className="client-image" />

        <p>{client.description}</p>
        <img src={client.background} className="background-image" />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Clients;

import React,{useState}  from 'react';
import './Clients.css';
import brooke from '../images/brooke-logo.png';
import tibackground from '../images/ti-background.jpg'


function Clients() {
  const clients = [
    {
      id: 1,
      name: "Client A",
      description: "This is client A's description.",
      image: brooke,
      background: tibackground
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
        <img src={client.image} alt={client.name} className='client-image' />

        <p>{client.description}</p>
        <img src={client.background} className='background-image'/>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Clients

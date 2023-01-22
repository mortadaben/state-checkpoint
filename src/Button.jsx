import React, { useState } from "react";
import { useEffect } from "react";

export default function Button({ shows, setShows }) {
  const toggleShows = () => {
    setShows(!shows);
  };
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <>
      <button onClick={toggleShows}>Toggle</button>
      {console.log(shows)}
      <h2>{timer}</h2>
    </>
  );
}

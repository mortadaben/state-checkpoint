import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./Button";
import img1 from "./assets/react.svg";

function App() {
  const identity = {
    fullName: "samy",
    bio: "dev junior junior",
    imgSrc: img1,
    profession: "dev junior junior",
  };

  const test = "hello";

  const [shows, setShows] = useState(true);
  return (
    <>
      <div>
        <Button shows={shows} setShows={setShows} />
        {shows && (
          <div>
            <h1>{identity.fullName}</h1>
            <h1>{identity.bio}</h1>
            <img src={identity.imgSrc} alt="" />
            <h1>{identity.profession}</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

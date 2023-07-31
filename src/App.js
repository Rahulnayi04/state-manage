import "./styles.css";
import slides from "./constant";
import { useState } from "react";
export default function App() {
  console.log(slides);
  const [index, setIndex] = useState(5);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const restartHandler = () => {
    const newIndex = 0;
    setIndex(newIndex);
    setPrevDisable(true);
    setNextDisable(false);
  };
  const prevHandler = () => {
    if (index === 1) {
      setPrevDisable(true);
      setNextDisable(false);
      const newIndex = 0;
      setIndex(newIndex);
    } else {
      setPrevDisable(false);
      setNextDisable(false);
      const newIndex = index - 1;
      setIndex(newIndex);
    }
  };
  const nextHandler = () => {
    if (index === slides.length - 2) {
      setPrevDisable(false);
      setNextDisable(true);
      const newIndex = slides.length - 1;
      setIndex(newIndex);
    } else {
      setPrevDisable(false);
      setNextDisable(false);
      const newIndex = index + 1;
      setIndex(newIndex);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Slides</h1>
      <div>
        <button onClick={restartHandler}>Restart</button>
        <button onClick={prevHandler} disabled={prevDisable}>
          Prev
        </button>
        <button onClick={nextHandler} disabled={nextDisable}>
          Next
        </button>
      </div>
      <div className="slide-content">
        <p>
          <b>Title:</b> {slides[index].title}
        </p>
        <p>
          <b>Text:</b> {slides[index].text}{" "}
        </p>
      </div>
    </div>
  );
}

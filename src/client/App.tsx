import styles from "./App.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  function handleInspirationalQuote() {
    fetch("/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data);
      });
  }

  function handleFunnyQuote() {
    fetch("/quotes/funny")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data);
      });
  }
  return (
    <div
      className={`d-flex flex-column gap-2 ${styles["main-container"]} ${
        quote.author === "" ? "" : styles.active
      }`}
    >
      <h3 className="text-center ">Which would you like?</h3>
      <div className="d-flex justify-content-between">
        <Button onClick={handleInspirationalQuote}>Inspirational Quote</Button>
        <Button onClick={handleFunnyQuote}>Funny Quote</Button>
      </div>
      {quote.author === "" ? (
        ""
      ) : (
        <>
          <hr className={styles["featurette-divider"]} />
          <div className="text-wrap">{quote.quote}</div>
          <div className="text-end">- {quote.author}</div>
        </>
      )}
    </div>
  );
}

export default App;

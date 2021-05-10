import React from "react";
import useFetch from "./hooks/useFetch";
import Spinner from "./components/Spinner";
import useCounter from "./hooks/useCounter";

function App() {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="text-center font-weight-bold mt-5 hola">
          BreakingBad Quotes
        </h1>
        <div className="line-mf mb-5"></div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="spinner-center">
          <div className="d-flex justify-content-center ">
            <div className="row mt-5">
              <blockquote className="blockquote text-right">
                <p className=" quote"><i class="fas fa-quote-left mr-2"></i>{quote} <i class="fas fa-quote-right ml-2"></i></p>
                <footer className="blockquote-footer color-author">{author}</footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-5 text-center">
            <a href="/#" className="btn-main-cv py-" onClick={increment}>
              Frase siguiente
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

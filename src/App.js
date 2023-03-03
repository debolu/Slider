import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setpeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect (()=> {
    if (index < 0 ) {
      setIndex(people.length - 1)
    }
    if (index > people.length - 1 ) {
      setIndex(0)
    }
  }, [index, people])

  useEffect (()=> {
let slider = setInterval(() => {
  setIndex(index + 1)
}, 3000);
return () => clearInterval(slider);
  }, [index])
  

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let slide = 'nextSlide'
          if ( personIndex === index ) {
            slide = 'activeSlide'
          } if (personIndex === index -1 || (index === 0 && personIndex === people.length - 1)) {
          slide = 'lastSlide'
          }

          return (
            <article className={slide}  key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <div className="icon">
                <FaQuoteRight />
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)} ><FaChevronLeft /></button>
        <button className="next" onClick={() => setIndex(index + 1)} ><FaChevronRight /></button>
      </div>

    </section>
  );
}

export default App;

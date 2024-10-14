import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Wasona</h1>
        <p>A modern website for learning Toki Pona.</p>
      </header>
      <section>
        <h2>About Toki Pona</h2>
        <p>it's a cool little conlang</p>
      </section>
      <section>
        <h2>Getting Started</h2>
        <ul>
          <li>
            <a href="/vocabulary">Practice vocabulary</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

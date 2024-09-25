import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>title</h1>
        <p>testing testing</p>
        <a href="/auth/signup" className="signup-button">
          Sign Up
        </a>
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
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Home;

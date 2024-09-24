import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Toki Pona Learning</h1>
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
            Practice vocabulary: <a href="/vocabulary">Vocabulary</a>
          </li>
        </ul>
      </section>
      <footer>
        <p>Join our community and start learning today!</p>
      </footer>
    </div>
  );
};

export default Home;

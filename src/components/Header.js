import React from "react";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Philippines</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/Booking">
            <button aria-label="Reserve Table">Reserve Table</button>
          </Link>
        </div>
        <div>
          <img src={food1} alt="Delicious Food" />
        </div>
      </section>
    </header>
  );
};

export default Header;

import React from "react";
import Profile from "./Profile";
import styles from "../../Styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.mainDiv}>
      <ul>
        <li> Get the app</li>
        <li> Investors Relation</li>
        <li> Add Restaurant</li>
        <Profile />
      </ul>
      <div>
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt="img"
          style={{ width: "250px" }}
        />
        <h1>Discover the best food & drinks in Kolkata</h1>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.firstchild}>
          <form action="">
            <select name="" id="">
              <option value="">Delhi</option>
              <option value="">Mumbai</option>
              <option value="">Pune</option>
              <option value="">Bangalore</option>
              <option value="">Kolkata</option>
            </select>
          </form>
        </div>
        <div className={styles.secondChild}>
          <input placeholder="Search for restaurant, cuisine or a dish" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <ul>
        <li>Get the app</li>
        <li>Investors Relation</li>
        <li>Add Restaurant</li>
        <li>
          <Profile />
        </li>
      </ul> */
}

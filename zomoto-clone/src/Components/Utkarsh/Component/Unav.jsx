import styles from "./Unav.module.css";
import zomato from "../img/zomatologo.jpg";
import { useState } from "react";

export default function Unav() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <img src={zomato} alt="" />
            </li>
            <li className={styles.Logoheading}>|</li>
            <li className={styles.Logoheading}>Inverstor Relations</li>
          </ul>
        </div>
        <ul className={styles.menu}>
          <li>FINANCIALS</li>
          <li>NEWS & EVENTS</li>
          <li>GOVERNANCE</li>
          <li>ESG INITIATIVES</li>
          <li>RESOURCES</li>
        </ul>

        
          <div  onClick={() => setActive(!active)} className={active?styles.hideburger:styles.burger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        
        {/* {active && (
          <div onClick={() => setActive(!active)} className={styles.hideburger}>
            <div></div>
            <div></div>
          </div>
        )} */}
      </nav>

      <div
        style={{ transform: active ? "translateY(-1px)" : "translateY(-100%)" }}
        className={styles.dropdown}
      >
        <p>FINANCIALS</p>
        <p>NEWS & EVENTS</p>
        <p>GOVERNANCE</p>
        <p>ESG INITIATIVES</p>
        <p>RESOURCES</p>
      </div>
    </>
  );
}
// transform:active?"translateY(-1px)":"translateY(-100%)"

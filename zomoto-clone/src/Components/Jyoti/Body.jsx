import React from "react";
import styles from "../../Styles/Body.module.css";

function Body() {
  return (
    <div>
      <div className={styles.div2}>
        <div>
          <img
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="img1"
            className={styles.imageTag}
          />
          <h3>Order Online</h3>
          <p>Stay home and order to your doorstep</p>
        </div>

        <div>
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="img2"
          />
          <h3>Dining</h3>
          <p>View the city's favourite dining venues</p>
        </div>

        <div>
          <img
            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="img3"
          />
          <h3>Nightlifes and Clubs</h3>
          <p>Explore the city's top nightlife outlets</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Body;

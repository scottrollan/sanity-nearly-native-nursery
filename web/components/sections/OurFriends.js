import React from "react";
import styles from "./OurFriends.module.css";

function OurFriends(props) {
  const { heading, label } = props;

  const gnpsLogo =
    "https://cdn.sanity.io/images/ogg4t6rs/production/f7b71b05d3a33d6753a2ffe1fee4f66294ea5d1f-200x200.png";
  const grnLogo =
    "https://cdn.sanity.io/images/ogg4t6rs/production/e67125dd1334b8952c818da0c928cc39bb4f6af3-397x200.png";
  const rpsLogo =
    "https://cdn.sanity.io/images/ogg4t6rs/production/3cb34b271c3cf11aea8bfaf6b22bff59c5f777ad-385x55.png";
  const buster =
    "https://cdn.sanity.io/images/ogg4t6rs/production/d70fb116762cea99c810065d2fd54658ff5a81af-640x640.jpg";
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        {/* <div className={styles.label}>{label}</div> */}
        <h2 className={styles.heading}>{heading}</h2>{" "}
        <div className={styles.wrapper}>
          <a href="https://gnps.org/" target="_blank">
            <img className={styles.logo} src={gnpsLogo} alt="Georgia Native Plant Society" />
          </a>
          <a href="https://garivers.org/" target="_blank">
            <img className={styles.logo} src={grnLogo} alt="Georgia River Network" />
          </a>
          <a href="https://www.rarepalmseeds.com/" target="_blank">
            <img className={styles.logo} src={rpsLogo} alt="Rare Palm Seeds" />
          </a>
          <figure>
            <figcaption>...and Buster</figcaption>
            <img src={buster} alt="" style={{ width: "200px" }} />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default OurFriends;

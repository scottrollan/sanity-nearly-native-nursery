import React from "react";
import styles from "./OurFriends.module.css";

function OurFriends(props) {
  const { heading, label } = props;

  const ourFriends = [
    {
      name: "Rare Palm Seeds",
      logo:
        "https://cdn.sanity.io/images/ogg4t6rs/production/3cb34b271c3cf11aea8bfaf6b22bff59c5f777ad-385x55.png",
      url: "https://www.rarepalmseeds.com/",
      key: "rarePalmSeeds"
    },
    {
      name: "Georgia Native Plant Society",
      logo:
        "https://cdn.sanity.io/images/ogg4t6rs/production/f7b71b05d3a33d6753a2ffe1fee4f66294ea5d1f-200x200.png",
      url: "https://gnps.org/",
      key: "georgiaNativePlantSociety"
    },
    {
      name: "Georgia River Network",
      logo:
        "https://cdn.sanity.io/images/ogg4t6rs/production/e67125dd1334b8952c818da0c928cc39bb4f6af3-397x200.png",
      url: "https://garivers.org/",
      key: "georgiaRiverNetwork"
    }
  ];
  const buster =
    "https://cdn.sanity.io/images/ogg4t6rs/production/d70fb116762cea99c810065d2fd54658ff5a81af-640x640.jpg";
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        {/* <div className={styles.label}>{label}</div> */}
        <h2 className={styles.heading}>{heading}</h2>{" "}
        <div className={styles.wrapper}>
          {ourFriends.map(friend => (
            <a href={friend.url} target="_blank" key={friend.key}>
              <img className={styles.logo} src={friend.logo} alt={friend.name} />
            </a>
          ))}

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

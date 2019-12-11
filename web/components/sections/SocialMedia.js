import React from "react";
import PropTypes from "prop-types";
import styles from "./SocialMedia.module.css";

function SocialMedia(props) {
  const { heading, label, text } = props;

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        <div style={{ display: "inline" }}>
          <a href="https://www.facebook.com/NearlyNativeNursery/" target="blank">
            <img
              className={styles.socialMediaLogo}
              src="https://cdn.sanity.io/images/ogg4t6rs/production/d938596c901e90d3d12d2d8ae69702b456e9f464-512x512.png"
              alt="facebook"
            ></img>
          </a>
          <a href="https://twitter.com/NNativeNursery" target="blank">
            <img
              className={styles.socialMediaLogo}
              src="https://cdn.sanity.io/images/ogg4t6rs/production/b07713fc06757451e012c29c5091d1c3e0f6e75c-512x512.png"
              alt="twitter"
            ></img>
          </a>
          <a href="https://www.instagram.com/nearlynativenursery/" target="blank">
            <img
              className={styles.socialMediaLogo}
              src="https://cdn.sanity.io/images/ogg4t6rs/production/b476267f35f22949193350c4dea2d89c6d5fcfdb-514x518.png"
              alt="instagram"
            ></img>
          </a>
        </div>
      </section>

      <style jsx>
        {`
          img {
            width: 23.33%;
            margin: 0 5%;
          }
        `}
      </style>
    </div>
  );
}

SocialMedia.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string
};

export default SocialMedia;

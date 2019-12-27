import React from "react";
import PropTypes from "prop-types";
import styles from "./SocialMedia.module.css";

function SocialMedia(props) {
  const { heading, label } = props;

  const media = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/NearlyNativeNursery/",
      logo:
        "https://cdn.sanity.io/images/ogg4t6rs/production/d938596c901e90d3d12d2d8ae69702b456e9f464-512x512.png"
    },
    {
      name: "Twitter",
      url: "https://www.facebook.com/NearlyNativeNursery/",
      logo:
        "https://cdn.sanity.io/images/ogg4t6rs/production/b07713fc06757451e012c29c5091d1c3e0f6e75c-512x512.png"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nearlynativenursery/",
      logo:
        "https://cdn.sanity.io/images/ogg4t6rs/production/b476267f35f22949193350c4dea2d89c6d5fcfdb-514x518.png"
    }
  ];

  const logoWidth = 40 / media.length; //sum of the widths of the logos will equal 75%
  const logoSideMargin = 60 / (2 * media.length); //sum of the widths of side margins will make up the other 25%

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        <div style={{ display: "inline" }}>
          {media.map((m, index) => (
            <a href={m.url} target="blank" key={`logo${index}${m.name.toLowerCase()}`}>
              <img className="logo" src={m.logo} alt={m.name}></img>
            </a>
          ))}
        </div>
      </section>

      <style jsx>
        {`
          .logo {
            width: ${logoWidth}%;
            margin: 0 ${logoSideMargin}%;
            opacity: 0.7;
          }
          .logo:hover {
            opacity: 1;
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

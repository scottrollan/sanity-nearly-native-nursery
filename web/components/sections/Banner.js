import React from "react";

function Banner() {
  return (
    <div className="sticky">
      <img
        src="https://cdn.sanity.io/images/ogg4t6rs/production/b247ef432ca6b9f74b3f3f574aae130973300cd0-1152x132.png"
        alt=""
      />
      <style jsx>
        {`
          .sticky {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            width: 100%;
            background-color: transparent;
            margin: 0;
            padding: 0;
            z-index: 9999;
          }
          img {
            width: 100%;
            padding: 5px 15% 10px;
            box-sizing: border-box;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1.75), rgba(255, 255, 255, 0));
          }
        `}
      </style>
    </div>
  );
}

export default Banner;

import React from "react";

function LandingLogo() {
  return (
    <div className="root">
      <section className="article">
        <div className="inline">
          <img
            src="https://cdn.sanity.io/images/ogg4t6rs/production/2b12c815ff21a7d80b3168e88d000ed5952bffcf-965x771.png"
            alt=""
          />
        </div>
        <div className="inline">
          <div className="label">Proud to be selected as a </div>
          <h2 className="heading">Garden Watchdog Top 5 Company</h2>
          <h4>FIVE years in a row by</h4>
          <h4>
            <a href="https://davesgarden.com/products/gwd/c/759" target="_blank">
              Dave's Garden
            </a>
          </h4>
        </div>
      </section>
      <style jsx>
        {`
          .root {
            padding: 0;
          }
          .article {
            width: 100%;
            
            margin: 0 auto;
            padding: 0;
            box-sizing: border-box;
          }
          .inline {
            display: inline-block;
            margin: 0 5%;
            vertical-align: middle;
          }
          img {
            height: 300px;
          }
          .label {
            font-size: var(--font-micro-size);
            line-height: var(--font-micro-line-height);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 1em;
          }

          .heading {
            font-size: var(--font-title3-size);
            line-height: var(--font-title3-line-height);
          }

          .label + .heading {
            margin-top: 0.25em;
          }
          @media only screen and (max-width: 1024px) {
            .root {
              padding: 4rem 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default LandingLogo;

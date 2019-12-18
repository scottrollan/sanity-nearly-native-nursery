import React from "react";
import styles from './AboutUs.module.css';

const debiJim =
  "https://cdn.sanity.io/images/ogg4t6rs/production/1eaae34a5a783e1a8fd7ed3f3024d725cc4a22e2-576x718.jpg?h=200&fit=max";

function AboutUs(props){
    const { heading, label } = props;

  return (
    <div className="wrapper">
        <section className={styles.article}>
            {/* <div className={styles.label}>{label}</div> */}
            {/* <h2 className={styles.heading}>{heading}</h2> */}
      <p>
        <strong>Nearly Native Nursery</strong> is a specialty nursery that promotes, sells, and propagates
        southeastern native plants for all types of landscapes. We offer a wide variety of native
        southeastern plant life not found in your typical garden center.
      </p>
      <p>
        Native plants offer a tough, verastile and beautiful alternative with lower maintenance to
        the imported , more exotic general nursery stock. Native plants are more suitable to local{" "}
        <span>
          <figure style={{ textAlign: "right", marginRight: 0 }}>
            <img src={debiJim} alt="Debi &amp; Jim Rodgers" style={{ width: '100%' }}/>
            <figcaption>Owners: Debi &amp; Jim Rodgers</figcaption>
          </figure>
        </span>
        water, soil and pest conditions. Many of these native plants also serve as food for beautiful songbirds as well as hosts for many species of butterflies and moths. Once
        established, native plants can tough out drought and water restrictions that many other
        plants are unable to tolerate.
      </p>
      <p>
        There is always a native alternative to an exotic plant, and many times the native species
        will be a much more interesting and spectacular specimen. Specific site requirements, such
        as low, soggy ground, or steep, dry slopes can become beautiful focal points with the right
        native plants in place. Our staff is knowledgeable and eager to discuss native plants with
        all of our customers. If we cannot think of the right native option or options for you
        instantly, we will research your situation and get back to you with a response as soon as
        possible.
      </p>
      <p>
        So, if you are near Atlanta, Georgia, stop by the Nearly Native Nursery’s retail location in
        Fayetteville and check out our dazzling array of gorgeous native plants available for you.
        We hope that you find our site interesting and educational!
      </p>
      </section>
      <style jsx>{`
        .wrapper {
          width: 100%;
          margin: 10px 0;
          text-align: justify;
        }
        figure {
          float: right;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

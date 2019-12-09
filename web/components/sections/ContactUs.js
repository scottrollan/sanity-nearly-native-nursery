import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TextSection.module.css";

class ContactUs extends Component {
  render() {
    return (
      <div className={styles.root}>
        <section className={styles.article}>
          <form name="contactCustom" netlify>
            <div style={{ width: "50%" }}>
              <select name="subject[]" required="required" selected="default">
                <option value="default" disabled>
                  Select...
                </option>
                <option value="Inoformation">Information Request</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Praise/Complaint">Praise/Complaint</option>
                <option value="Website Suggestion">Website Suggestion</option>
              </select>
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                style={{ width: "45%", marginRight: "5%" }}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                style={{ width: "45%" }}
              />
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                style={{ width: "45%", marginRight: "5%" }}
              />
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                id="address1"
                name="address1"
                placeholder="Address line 1"
                style={{ width: "45%", marginRight: "5%" }}
              />
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Address line 2"
                style={{ width: "45%" }}
              />
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                style={{ width: "33%", marginRight: "4%" }}
              />
              <input
                type="text"
                id="st"
                name="st"
                placeholder="State/Province"
                style={{ width: "33%", marginRight: "4%" }}
              />
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Postal Code"
                style={{ width: "20%" }}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message here..."
                style={{ width: "45%" }}
              ></textarea>
            </div>
            {/* <div>
              <label htmlFor="fileUpload">File input</label>
              <input type="file" id="fileUpload" />
            </div>
            <div data-netlify-recaptcha="true" style={{ maxWidth: "75% !important" }}></div> */}

            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>

          <style jsx>
            {`
              div {
                margin-bottom: 1.5vh;
              }

              @media only screen and (max-width: 1024px) {
                .form {
                  margin: 0 4%;
                }
              }
            `}
          </style>
        </section>
      </div>
    );
  }
}

ContactUs.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string
};

export default ContactUs;

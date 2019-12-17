import React from "react";

const ContactUs = () => {
  return (
    <div>
      <form name="contactExperimental" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contactExperimental" />
        <div>
          <select
            name="subject[]"
            required
            selected="default"
            style={{ width: '46%', margin: '12px 0' }}
          >
            <option value="default" disabled>
              Select...
            </option>
            <option value="Information">Information Request</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Praise/Complaint">Praise/Complaint</option>
            <option value="Website Suggestion">Website Suggestion</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            style={{ width: '46%', margin: '12px 0' }}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            style={{ width: '46%', margin: '12px 0' }}
          />
        </div>

        <div>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            style={{ width: '46%', margin: '12px 0' }}
          />
        </div>

        <div>
          <input
            type="text"
            id="address1"
            name="address1"
            placeholder="Address line 1"
            style={{ width: '46%', margin: '12px 0' }}
          />
          <input
            type="text"
            id="address2"
            name="address2"
            placeholder="Address line 2"
            style={{ width: '46%', margin: '12px 0' }}
          />
        </div>

        <div>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            style={{ width: '34%', margin: '12px 0' }}
          />
          <input
            type="text"
            id="st"
            name="st"
            placeholder="State/Province"
            style={{ width: '34%', margin: '12px 0' }}
          />
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="Postal Code"
            style={{ width: '23.6%', margin: '12px 0' }}
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Your message here..."
            style={{ width: '92.4%', margin: '12px 0' }}
          ></textarea>          
        </div>
        <div>
          <label htmlFor="fileUpload">File input</label>
          <input
            type="file"
            id="fileUpload"
            style={{ width: 'auto', margin: '12px 0' }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        form {
          margin: 0 15%;
          width: 70%; 
          padding: 0; 
          box-sizing: border-box;
        }
        div {
          width: 100%;
          box-sizing: border-box;
        }
        input {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;

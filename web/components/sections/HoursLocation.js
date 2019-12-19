import React from "react";

const HoursLocation = () => {
  return (
    <div className="wrapper">
      <a href="/hours">
        <button className="btn">
          Hours
        </button>
      </a>

      <a href="/location">
        <button className="btn">
          Location
        </button>
      </a>
      <style jsx>{`
        .wrapper {
            width: 80%;
            margin: 20px 10%;
            text-align: center;
        }
        .btn {
          text-align: center;
          padding: 15px 0;
          margin: 0 5%;
          box-sizing: border-box;
          width: 38%;
          color: #3e3e3e;
          background-color: transparent;
          border: 1px solid #3e3e3e;
          border-radius: 2vw;
          cursor: pointer;
          font-size: var(--font-title3-size);
          line-height: var(--font-title3-line-height);
        }
        .btn:hover {
            background-color: #1D271B;
            color: white;
        }
      `}</style>
    </div>
  );
};

export default HoursLocation;

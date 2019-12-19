import React, { Component } from "react";

class ScrollToTop extends Component {
  className = "button"; //enter any className, i.e. any Bootstrap classes you want to apply

  scrollUp = () => {
    document.getElementById("resultsArea").scrollIntoView();
  };

  render() {
    return (
      <div id="scrollBtn">
        <button onClick={this.scrollUp} className={this.className} title="Top">
          &#8896;
        </button>
        <style jsx>{`
          .button {
            position: fixed;
            z-index: 9999;
            bottom: 100px;
            right: 2%;
            background-color: #eeeeee;
            width: auto;
            height: auto;
            padding: 5px 10px;
            border-radius: 4px;
          }
          .button:hover {
            background-color: #3e3e3e;
          }
        `}</style>
      </div>
    );
  }
}

export default ScrollToTop;

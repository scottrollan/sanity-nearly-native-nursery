
import React, { Component } from "react";

class ScrollToTop extends Component {

    className = "button"  //enter any className, i.e. any Bootstrap classes you want to apply

    styles = {
        position: 'fixed',
        bottom: '50px',
        right: '20px',
        padding: '3px 10px', 
        backgroundColor: '#AED790',
        zIndex: '9999'
        //enter any more button styling here
    }

    scrollUp = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // scrollFunction = () => {
    //     window.pageYOffset < 750 ?
    //     document.getElementById('scrollBtn').style.display="none" :
    //     document.getElementById('scrollBtn').style.display="inline";  }

    // componentDidMount() {
    //     window.pageYOffset === 0 ?
    //     document.getElementById('scrollBtn').style.display="none" :
    //     document.getElementById('scrollBtn').style.display="inline";
    //     window.addEventListener('scroll', this.scrollFunction);
    // };


    render() {
        return (
            <button
            onClick={this.scrollUp}
            id="scrollBtn"
            className={this.className}
            style={this.styles}
            title="Top"
            >
            Top
            </button>
    );
    }
  
}

export default ScrollToTop;

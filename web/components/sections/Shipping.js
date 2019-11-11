import React, { Component } from 'react';

const wrapper = {
  width: '90%',
  marginLeft: '5%',
  textAlign: 'center',
  justifyContent: 'center',
  padding: "0"
};
const tableHeaderStyle = {
    textAlign: "center",
    margin: "3vh 0 0 0",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "larger",
};
const outlined = {
    display: 'table-cell',
    border: "1px solid #8a8a8a",
    textAlign: "center",
    fontSize: "1.5vw",
    boxSizing: 'border-box',
    padding: '0 2.83vw'
};
const outlined6 = {
    display: 'table-cell',
    border: "1px solid #8a8a8a",
    textAlign: "center",
    fontSize: "1.5vw",
    boxSizing: 'border-box',
    padding: '0 2vw'
};

class Shipping extends Component {
    shipping = document.getElementById('shipping');

    showShipping = () => {
        shipping.style.display='inherit';
        document.getElementById('button').style.display='none';
        document.getElementById('offButton').style.display='inline-block';
    }
    hideShipping = () => {
        shipping.style.display='none';
        document.getElementById('button').style.display='inline-block';
        document.getElementById('offButton').style.display='none';
    }

  render() {
    return (
        <div style={wrapper}>
            <button id="button" onClick={this.showShipping}>See Shipping Costs</button>
            <button id="offButton" onClick={this.hideShipping} style={{ display: 'none' }}>Hide Shipping Costs</button>            
            <div id="shipping">
            <h5 style={{ width: "100%", textAlign: "center"}}><u>
            Total Shipping charges are Base Cost <em><u>plus</u></em> Fuel Surcharge
            </u></h5>

            <h6 style={tableHeaderStyle}>Boxes, Packaging and Shipping <strong>Base Costs</strong></h6>

            <div className='row' style={{ backgroundColor: '#c3c3c3' }}>
                <p style={outlined}>$0 to $10</p>
                <p style={outlined}>$10.01 to $25</p>
                <p style={outlined}>$25.01 to $50</p>
                <p style={outlined}>$50.01 to $75</p>
                <p style={outlined}>$75.01 to $100</p>
                <p style={outlined}>over $100</p>              
            </div>
            <div className='row'>
                <p style={outlined}>$15</p>
                <p style={outlined}>$17</p>
                <p style={outlined}>$19</p>
                <p style={outlined}>$21</p>
                <p style={outlined}>$23</p>
                <p style={outlined}>28%</p>
            </div>

                <h6 style={tableHeaderStyle}>Fuel Surcharge Costs</h6>

            <div className='row' style={{ backgroundColor: '#c3c3c3' }}>
                <p style={outlined6}>Zone 1</p>
                <p style={outlined6}>Zone 2</p>
                <p style={outlined6}>Zone 3</p>
                <p style={outlined6}>Zone 4</p>
                <p style={outlined6}>Zone 5</p>
                <p style={outlined6}>Zone 6</p>              
            </div>
            <div className='row'>
                <p style={outlined6}>base costs <em>plus</em></p>
                <p style={outlined6}>base costs <em>plus</em></p>
                <p style={outlined6}>base costs <em>plus</em></p>
                <p style={outlined6}>base costs <em>plus</em></p>
                <p style={outlined6}>base costs <em>plus</em></p>
                <p style={outlined6}>base costs <em>plus</em></p>
            </div>          
            <div className='row'>
                <p style={outlined6}>0</p>
                <p style={outlined6}>10%</p>
                <p style={outlined6}>20%</p>
                <p style={outlined6}>30%</p>
                <p style={outlined6}>40%</p>
                <p style={outlined6}>50%</p>
            </div>
            </div>
            <style jsx>{`
                button {
                    padding: 15px 32px; 
                    margin: 0 5%; 
                    box-sizing: border-box; 
                    width: 38%; 
                    color: #3e3e3e; 
                    background-color: transparent; 
                    border: 1px solid #3e3e3e; 
                    border-radius: 2vw; cursor: pointer; 
                    font-size: var(--font-title3-size); 
                    line-height: var(--font-title3-line-height);
                    width: 40%;
                }
                .row {
                    display: table-row;
                    width: 100%;
                    margin: 0 auto;
                }
                #shipping {
                    display: none;
                }
                `}
            </style>

      </div>
    );
  }
}

export default Shipping;
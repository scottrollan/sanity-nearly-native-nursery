import React, { Component } from 'react';


class Shipping extends Component {

    shipping = "document.getElementById('shipping')";
    onButton = "document.getElementById('onButton')";
    offButton = "document.getElementById('offButton')";

    showShipping = () => {
        shipping.style.display='inherit';
        onButton.style.display='none';
        offButton.style.display='inline-block';
    }
    hideShipping = () => {
        shipping.style.display='none';
        document.getElementById('onButton').style.display='inline-block';
        document.getElementById('offButton').style.display='none';
    }

  render() {
    return (
        <div className='wrapper'>
            <button id="onButton" onClick={this.showShipping}>See Shipping Costs</button>
            <button id="offButton" onClick={this.hideShipping} style={{ display: 'none' }}>Hide Shipping Costs</button>            
            <div id="shipping">
            <h5 style={{ width: "100%", textAlign: "center"}}><u>
            Total Shipping charges are Base Cost <em><u>plus</u></em> Fuel Surcharge
            </u></h5>

            <h6 className='tableHeader'>Boxes, Packaging and Shipping <strong>Base Costs</strong></h6>

            <div className='row' style={{ backgroundColor: '#c3c3c3' }}>
                <p className='outlined'>$0 to $10</p>
                <p className='outlined'>$10.01 to $25</p>
                <p className='outlined'>$25.01 to $50</p>
                <p className='outlined'>$50.01 to $75</p>
                <p className='outlined'>$75.01 to $100</p>
                <p className='outlined'>over $100</p>              
            </div>
            <div className='row'>
                <p className='outlined'>$15</p>
                <p className='outlined'>$17</p>
                <p className='outlined'>$19</p>
                <p className='outlined'>$21</p>
                <p className='outlined'>$23</p>
                <p className='outlined'>28%</p>
            </div>

                <h6 className='tableHeader'>Fuel Surcharge Costs</h6>

            <div className='row'>
                <p className='outlined6' style={{ backgroundColor: '#ff007f', color: 'white' }}>Zone 1</p>
                <p className='outlined6' style={{ backgroundColor: '#01ffff', color: 'white' }}>Zone 2</p>
                <p className='outlined6' style={{ backgroundColor: '#ff7f02', color: 'white' }}>Zone 3</p>
                <p className='outlined6' style={{ backgroundColor: '#00ff01', color: 'white' }}>Zone 4</p>
                <p className='outlined6' style={{ backgroundColor: '#4e148c', color: 'white' }}>Zone 5</p>
                <p className='outlined6' style={{ backgroundColor: '#1601ff', color: 'white' }}>Zone 6</p>              
            </div>
            <div className='row'>
                <p className='outlined6'>base costs <em>plus</em></p>
                <p className='outlined6'>base costs <em>plus</em></p>
                <p className='outlined6'>base costs <em>plus</em></p>
                <p className='outlined6'>base costs <em>plus</em></p>
                <p className='outlined6'>base costs <em>plus</em></p>
                <p className='outlined6'>base costs <em>plus</em></p>
            </div>          
            <div className='row'>
                <p className='outlined6'>0</p>
                <p className='outlined6'>10%</p>
                <p className='outlined6'>20%</p>
                <p className='outlined6'>30%</p>
                <p className='outlined6'>40%</p>
                <p className='outlined6'>50%</p>
            </div>
            </div>
            <style jsx>{`
                .wrapper {
                    width: 90%;
                    margin-left: 5%;
                    text-align: center;
                    justify-content: center;
                    padding: 0;
                }
                .tableHeader {
                    text-align: center;
                    margin: 3vh 0 0 0;
                    font-weight: bold;
                    font-size: larger;
                }
                .row {
                    display: table-row;
                    width: 100%;
                    margin: 0 auto;
                }
                .outlined {
                    display: table-cell;
                    border: 1px solid #8a8a8a;
                    text-align: center;
                    font-size: 1.5vw;
                    box-sizing: border-box;
                    padding: 0 2.83vw;
                }
                .outlined6 {
                    display: table-cell;
                    border: 1px solid #8a8a8a;
                    text-align: center;
                    font-size: 1.5vw;
                    box-sizing: border-box;
                    padding: 0 2vw;
                }
                button {
                    width:38%; 
                    text-align: center; 
                    padding: 15px 0; 
                    margin: 50px 0;
                    border: 1px solid #3e3e3e; 
                    border-radius: 2vw;
                    box-sizing: border-box; 
                    color: #3e3e3e; 
                    background-color: transparent;  
                    cursor: pointer; 
                    font-size: var(--font-title3-size); 
                    line-height: var(--font-title3-line-height);
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
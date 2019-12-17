import React, { Component } from "react";

class Shipping extends Component {
  shipping = "document.getElementById('shipping')";
  pdf = "document.getElementById('pdf')";
  onInfo = "document.getElementById('onInfo')";
  offInfo = "document.getElementById('offInfo')";
  onPdf = "document.getElementById('onPdf')";
  offPdf = "document.getElementById('offPdf')";

  showInfo = () => {
    shipping.style.display = "inherit";
    onInfo.style.display = "none";
    offInfo.style.display = "inline-block";
  };
  hideInfo = () => {
    shipping.style.display = "none";
    onInfo.style.display = "inline-block";
    offInfo.style.display = "none";
  };
  showPdf = () => {
    pdf.style.display = "inline-block";
    onPdf.style.display = "none";
    offPdf.style.display = "inline-block";
  };
  hidePdf = () => {
    pdf.style.display = "none";
    onPdf.style.display = "inline-block";
    offPdf.style.display = "none";
  };

  render() {
    return (
      <div className="wrapper">
        <button id="onInfo" onClick={this.showInfo}>
          See Shipping Costs
        </button>
        <button id="offInfo" onClick={this.hideInfo} style={{ display: "none" }}>
          Hide Shipping Costs
        </button>
        <button id="onPdf" onClick={this.showPdf}>
          Order Form
        </button>
        <button id="offPdf" onClick={this.hidePdf} style={{ display: "none" }}>
          Hide Oder Form
        </button>
        <div id="shipping">
          <h5 style={{ width: "100%", textAlign: "center" }}>
            <u>
              Total Shipping charges are Base Cost{" "}
              <em>
                <u>plus</u>
              </em>{" "}
              Fuel Surcharge
            </u>
          </h5>

          <h6 className="tableHeader">
            Boxes, Packaging and Shipping <strong>Base Costs</strong>
          </h6>

          <div className="row" style={{ backgroundColor: "#c3c3c3" }}>
            <p className="outlined">$0 to $10</p>
            <p className="outlined">$10.01 to $25</p>
            <p className="outlined">$25.01 to $50</p>
            <p className="outlined">$50.01 to $75</p>
            <p className="outlined">$75.01 to $100</p>
            <p className="outlined">over $100</p>
          </div>
          <div className="row">
            <p className="outlined">$15</p>
            <p className="outlined">$17</p>
            <p className="outlined">$19</p>
            <p className="outlined">$21</p>
            <p className="outlined">$23</p>
            <p className="outlined">28%</p>
          </div>

          <h6 className="tableHeader">Fuel Surcharge Costs</h6>

          <div className="row">
            <p className="outlined6" style={{ backgroundColor: "#FFD124", color: "white" }}>
              Zone 1
            </p>
            <p className="outlined6" style={{ backgroundColor: "#C98400", color: "white" }}>
              Zone 2
            </p>
            <p className="outlined6" style={{ backgroundColor: "#99CC00", color: "white" }}>
              Zone 3
            </p>
            <p className="outlined6" style={{ backgroundColor: "#990000", color: "white" }}>
              Zone 4
            </p>
            <p className="outlined6" style={{ backgroundColor: "#FF6600", color: "white" }}>
              Zone 5
            </p>
            <p className="outlined6" style={{ backgroundColor: "#999999", color: "white" }}>
              Zone 6
            </p>
          </div>
          <div className="row">
            <p className="outlined6">
              base costs <em>plus</em>
            </p>
            <p className="outlined6">
              base costs <em>plus</em>
            </p>
            <p className="outlined6">
              base costs <em>plus</em>
            </p>
            <p className="outlined6">
              base costs <em>plus</em>
            </p>
            <p className="outlined6">
              base costs <em>plus</em>
            </p>
            <p className="outlined6">
              base costs <em>plus</em>
            </p>
          </div>
          <div className="row">
            <p className="outlined6">0</p>
            <p className="outlined6">10%</p>
            <p className="outlined6">20%</p>
            <p className="outlined6">30%</p>
            <p className="outlined6">40%</p>
            <p className="outlined6">50%</p>
          </div>
        </div>
        <div>
        <object
          data="https://cdn.sanity.io/files/ogg4t6rs/production/fb00e959f5eed3fed469f42cf0e01dc008f5150b.pdf"
          type="application/pdf"
          id="pdf"
        >
          <p>Your web browswer doesn't have a PDF plugin. 
              <a href="https://cdn.sanity.io/files/ogg4t6rs/production/fb00e959f5eed3fed469f42cf0e01dc008f5150b.pdf">Click here</a> to download the order form.</p>
        </object>
        </div>

        <style jsx>
          {`
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
              width: 38%;
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
            #pdf,
            #shipping {
              display: none;
              margin: 10px 0;
            }
            #pdf {
                width: 70%;
                min-height: 60vh;
            }
            @media only screen and (max-width: 1024px) {
                #pdf {
                  width: 90%;
                }
              }
          `}
        </style>
      </div>
    );
  }
}

export default Shipping;

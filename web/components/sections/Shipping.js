import React, { Component } from "react";
import styles from "./Shipping.module.css";

class Shipping extends Component {
  state = {
    baseCost: [
      {
        merchandise: "$0 to $10",
        charge: "$15"
      },
      {
        merchandise: "$10.01 to $25",
        charge: "$17"
      },
      {
        merchandise: "$25.01 to $50",
        charge: "$19"
      },
      {
        merchandise: "$50.01 to $75",
        charge: "$21"
      },
      {
        merchandise: "$75.01 to $100",
        charge: "$23"
      },
      {
        merchandise: "over $100",
        charge: "28%"
      }
    ],
    fuelSurcharge: [
      {
        zone: "1",
        percentage: "0",
        backgroundColor: "#FFD124"
      },
      {
        zone: "2",
        percentage: "10",
        backgroundColor: "#C98400"
      },
      {
        zone: "3",
        percentage: "20",
        backgroundColor: "#99CC00"
      },
      {
        zone: "4",
        percentage: "30",
        backgroundColor: "#990000"
      },
      {
        zone: "5",
        percentage: "40",
        backgroundColor: "#FF6600"
      },
      {
        zone: "6",
        percentage: "50",
        backgroundColor: "#999999"
      }
    ]
  };
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
      <div className={styles.wrapper}>
        <button id="onInfo" onClick={this.showInfo}>
          See Shipping Costs
        </button>
        <button id="offInfo" onClick={this.hideInfo} style={{ display: "none" }}>
          Hide Shipping Costs
        </button>
        <button id="onPdf" onClick={this.showPdf}>
          Show Order Form
        </button>
        <button id="offPdf" onClick={this.hidePdf} style={{ display: "none" }}>
          Hide Oder Form
        </button>

        <div className={styles.shipping} id="shipping">
          <h5 style={{ width: "100%", textAlign: "center" }}>
            <u>
              Total Shipping charges are Base Cost
              <em>
                <u>plus</u>
              </em>
              Fuel Surcharge
            </u>
          </h5>

          <h6 className={styles.tableHeader}>
            Boxes, Packaging and Shipping <strong>Base Costs</strong>
          </h6>
          <table cellSpacing={0}>
            <tr className={styles.row} style={{ backgroundColor: "#c3c3c3" }}>
              {this.state.baseCost.map((m, index) => (
                <td className={styles.outlined} key={index}>
                  {m.merchandise}
                </td>
              ))}
            </tr>
            <tr>
              {this.state.baseCost.map((p, index) => (
                <td className={styles.outlined} key={index}>
                  {p.charge}
                </td>
              ))}
            </tr>
          </table>

          <h6 className={styles.tableHeader}>Fuel Surcharge Costs</h6>

          {this.state.fuelSurcharge.map((f, index) => (
            <table cellSpacing={0}>
              <tr key={index}>
                <td className={styles.outlined} style={{ backgroundColor: f.backgroundColor, width: '33.333%' }}>
                  Zone {f.zone}
                </td>
                <td className={styles.outlined} style={{ width: '33.333% !important' }}>
                  base cost <em>plus</em>
                </td>
                <td className={styles.outlined} style={{ width: '33.333%' }}>${f.percentage}</td>
              </tr>
            </table>
          ))}

          <div>
            <fieldset
              style={{
                border: "1px dashed black",
                width: "76%",
                margin: "20px 12%",
                boxSizing: "border-box"
              }}
            >
              <legend>Shipping Cost Example</legend>
              <div style={{ width: "90%", display: "inline-block", margin: "0 5%", padding: "0" }}>
                <p className={styles.leftColumn} style={{ backgroundColor: "#eeeeee" }}>
                  Merchandise
                </p>
                <p className={styles.rightColumn} style={{ backgroundColor: "#eeeeee" }}>
                  {" "}
                  $37.00
                </p>
                <p className={styles.leftColumn}>Base shipping cost</p>
                <p className={styles.rightColumn}>$19.00</p>
                <p className={styles.leftColumn} style={{ backgroundColor: "#eeeeee" }}>
                  Fuel surcharge delivery to <em>Zone 3</em> ($19.00*20%)
                </p>
                <p
                  className={styles.rightColumn}
                  style={{ borderBottom: "2px solid #333333", backgroundColor: "#eeeeee" }}
                >
                  $3.80
                </p>
                <p className={styles.leftColumn}>
                  Total cost, including shippng and fuel surcharge =
                </p>
                <p className={styles.rightColumn}> $59.80</p>
              </div>
            </fieldset>
            <em>
              <p>
                Due to substantial increases in shipping costs, we find it necessary to pass on the
                fuel surcharges that have been levied on us.
              </p>
              <p>
                {" "}
                Because of increased shipping costs, any plant or combination of plants that will
                not fit into a 48" box will automatically incur an additional $11.00 surcharge to
                ship FedEx ground. We are happy to give you an estimated shipping rate when we
                receive your order.
              </p>
            </em>
          </div>
        </div>
        <div>
          <object
            data="https://cdn.sanity.io/files/ogg4t6rs/production/fb00e959f5eed3fed469f42cf0e01dc008f5150b.pdf"
            type="application/pdf"
            id="pdf"
            className={styles.pdf}
          >
            <p>
              Your web browswer doesn't have a PDF plugin.
              <a href="https://cdn.sanity.io/files/ogg4t6rs/production/fb00e959f5eed3fed469f42cf0e01dc008f5150b.pdf">
                Click here
              </a>
              to download the order form.
            </p>
          </object>
        </div>
      </div>
    );
  }
}

export default Shipping;

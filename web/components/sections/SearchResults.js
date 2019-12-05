import React, { Component } from "react";
import ToTopButton from "../ScrollToTop";

class SearchResults extends Component {
  openModal = whichPlantModal => {
    document.getElementById(whichPlantModal).classList.add("showModal");
  };

  closeModal = whichPlantModal => {
    document.getElementById(whichPlantModal).classList.remove("showModal");
  };

  expandDescr = whichDescr => {
    document.getElementById(`short${whichDescr}`).style.display = "none";
    document.getElementById(`long${whichDescr}`).style.display = "inline";
  };

  collapseDescr = whichDescr => {
    document.getElementById(`long${whichDescr}`).style.display = "none";
    document.getElementById(`short${whichDescr}`).style.display = "inline";
  };

  returnToSearch = () => {
    document.getElementById("resultsArea").style.display = "none";
    document.getElementById("searchArea").style.display = "inline";
    location.href = "#searchArea";
  };

  render(props) {
    return (
      <div id="resultsArea" style={{ display: "none" }}>
        <ToTopButton />
        <div className="sticky">
          <button className="returnButton" onClick={this.returnToSearch}>
            Return to Search Page
          </button>
        </div>
        <h5 style={{ textAlign: "center" }}>
          We found {this.props.resultsArray.length} items matching that criteria...
        </h5>

        {this.props.resultsArray === undefined || this.props.resultsArray.length == 0
          ? null
          : this.props.resultsArray.map((d, index) => {
              const imageArray = d.image.asset._ref.split("-"); //splits _ref into an array of length 4
              const file = `${imageArray[1]}-${imageArray[2]}.${imageArray[3]}`; //gives image <image id>-<original size>.<extension>
              const imageUrl = `https://cdn.sanity.io/images/ogg4t6rs/production/${file}`; //gets original image url
              const modalId = d._id;
              const descIntro = d.description
                .split(" ")
                .slice(0, 21)
                .join(" "); //first 20 words
              const descEnding = d.description
                .split(" ")
                .slice(21)
                .join(" "); //21st through the last word
              const description = d.description.split(" ");

              return (
                <div 
                    className="card" 
                    key={d._id} 
                    style={{
                        backgroundColor: index % 2 ==0 ? '#eeeeee' : '#ffffff'
                      }}
                    >
                  <div 
                  className="cardBody"

                  >
                    <h3 className="cardCommon">{d.commonName}</h3>
                    <i>
                      <h4 className="cardBotanical">
                        {d.botanicalName} {d.variety}
                      </h4>
                    </i>
                    {file == "a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188.png" ||
                    file === undefined 
                    ?   null
                      : ( 
                      <a href={`${imageUrl}`} target="_blank">
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 calc(50% - 50px)",
                            backgroundImage: `url("${imageUrl}?w=100&max-h=100")`,
                            backgroundRepeat: "no-repeat"
                          }}
                        ></div>
                      </a>
                    )}

                    <button className="trigger" onClick={() => this.openModal(`${modalId}`)}>
                      See Details
                    </button>


                    {/* MODAL STARTS HERE */}
                    <div className="modal" id={`${modalId}`}>
                      <div className="modalContent">
                        <h4>{d.commonName}</h4>
                        <h5>
                          <i>
                            {d.botanicalName} {d.variety}
                          </i>
                        </h5>
                        {d.regionalName ? <h5>Regional Name: {d.regionalName}</h5> : null}
                        <p>
                          {descIntro}
                          <span id={`short${modalId}`}>
                            ...{" "}
                            <button onClick={() => this.expandDescr(`${modalId}`)}>
                              keep reading
                            </button>
                          </span>
                          <span id={`long${modalId}`} style={{ display: "none" }}>
                            {" "}
                            {descEnding}{" "}
                            <button onClick={() => this.collapseDescr(`${modalId}`)}>
                              see less
                            </button>
                          </span>
                        </p>
                        <p>{d.notes}</p>
                        <p>
                          Thrives from zone {d.lowZone} to zone {d.highZone}.
                        </p>
                        <div className="row" style={{ width: "100%" }}>
                          <div className="oneThirdBlock">
                            <ul>Soil types:</ul>
                            {d.soilType.map((type, index) => (
                              <li key={index}>{type}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            <ul>Soil Ph:</ul>
                            {d.soilPH.map((ph, index) => (
                              <li key={index}>{ph}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            <ul>Water level:</ul>
                            {d.waterLevel.map((water, index) => (
                              <li key={index}>{water}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            <ul>Sun exposure:</ul>
                            {d.sunlightLevel.map((sun, index) => (
                              <li key={index}>{sun}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            <ul>Foliage:</ul>
                            {d.foliage.map((f, index) => (
                              <li key={index}>{f}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            {file == "a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188" ||
                            file === undefined ? ( //if the image is the placeholder image or there is no image, it is not clickable
                              <div
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  margin: "0 calc(50% - 50px)",
                                  backgroundImage: `url("${imageUrl}?w=100&max-h=100")`,
                                  backgroundRepeat: "no-repeat",
                                  clear: "both"
                                }}
                              ></div>
                            ) : (
                              <a href={`${imageUrl}`} target="_blank">
                                <div
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    margin: "0 calc(50% - 50px)",
                                    backgroundImage: `url("${imageUrl}?w=100&max-h=100")`,
                                    backgroundRepeat: "no-repeat",
                                    clear: "both"
                                  }}
                                ></div>
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="row" style={{ width: "100%" }}>
                          <div className="oneThirdBlock">
                            <ul>Container Size</ul>
                            {d.amount.map((p, index) => (
                              <li key={index}>{p.containerSize}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            <ul>Price</ul>
                            {d.amount.map((p, index) => (
                              <li key={index}>${p.price}</li>
                            ))}
                          </div>
                          <div className="oneThirdBlock">
                            <a href={`http://www.google.com/search?q=${d.botanicalName} ${d.variety}&tbm=isch`} target="_blank">
                            <button
                              style={{
                                width: "100px",
                                height: "auto",
                                margin: "0 calc(50% - 50px)",
                              }}
                            >Search for {d.botanicalName} on Google Images</button></a> 
                          </div>

                          <div className="oneThirdBlock">
                            <button
                              className="closeButton"
                              onClick={() => this.closeModal(`${modalId}`)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* end modal content */}
                    </div>
                  </div>
                </div>
              );
            })}
        <style jsx>
          {`
                    div.sticky {
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                        text-align: center;
                        width: 100%;
                        background-color: #ffffff;
                        margin: 0;
                        padding: 0;
                    }
                    button {
                        margin: 10px;
                    }
                    .returnButton {
                        width:38%; 
                        text-align: center; 
                        border: 1px solid #3e3e3e; 
                        padding: 15px;
                        margin: 10px;
                        border-radius: 2vw;
                        box-sizing: border-box; 
                        color: #3e3e3e; 
                        background-color: #ffffff;  
                        cursor: pointer; 
                        font-size: var(--font-title3-size); 
                        line-height: var(--font-title3-line-height);
                    }
                    button:hover {
                        color: #7d62b2;
                        background-color: #e3e3e3;
                    }
                    .card {
                        border: 1px solid #999999;
                        width: 80%;
                        margin: 10px 10%;
                    }
                    .cardBody {
                        padding: 0;
                        text-align: center;
                    }
                    .modal {
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        opacity: 0;
                        visibility: hidden;
                        transform: scale(1.1);
                        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
                        border: 1px solid #767676;
                        box-shadow: 5px 10px 100px #cccccc;
                        z-index: 9999;
                    }
                    .modalContent {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: white;
                        padding: 1rem 1.5rem;
                        width: 90%;
                        max-width: 24rem;
                        max-height: 90%;
                        border-radius: 0.5rem;
                        overflow: hidden;
                        overflow-y: auto
                    }
                    .closeButton {
                        position: absolute;
                        right: 12px;
                        top: 12px;
                        line-height: 1.5rem;
                        padding: 2px 8px;
                        text-align: center;
                        cursor: pointer;
                        border-radius: 0.25rem;
                        background-color: transparent;;
                    }
                    .showModal {
                        opacity: 1;
                        visibility: visible;
                        transform: scale(1.0);
                        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
                    }
                    .oneThirdBlock {
                        display: inline-block;
                        width: 33%;
                        margin: 10px 0;
                        text-align: left;
                        vertical-align: top;
                    }
                    ul{
                        text-align: left;
                        margin: 0;
                        padding: 0;
                        text-decoration: underline;
                    }
                    li {
                        list-style-type: none;
                    }
                    .row:after {
                        content: "";
                        display: table;
                        clear: both;
                    }  

                    }
                        `}
        </style>
      </div>
    );
  }
}

export default SearchResults;

import React, { Component } from "react";
import ToTopButton from "../ScrollToTop";
import styles from "./SearchResults.module.css";

class SearchResults extends Component {
  openModal = whichPlantModal => {
    document.getElementById(whichPlantModal).style.cssText = "opacity: 1; visibility: visible;";
  };

  hideModal = whichPlantModal => {
    document.getElementById(whichPlantModal).style.cssText = "opacity: 0; visibility: hidden;";
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
    document.getElementById("spinner").style.display = "none";
    document.getElementById("searchCondButton").style.display = "inline-block";
  };

  render(props) {
    return (
      <div id="resultsArea" style={{ display: "none", width: "80%" }}>
        <ToTopButton />
        <div className={styles.sticky}>
          <button className={styles.returnButton} onClick={this.returnToSearch}>
            Return to Search Page
          </button>
        </div>
        <h5 style={{ textAlign: "center" }}>
          We found {this.props.resultsArray.length} items matching that criteria...
        </h5>

        {this.props.resultsArray === null || this.props.resultsArray.length == 0
          ? null
          : this.props.resultsArray.map((d, index) => {
              const modalId = d._id;
              const descIntro = d.description
                .split(" ")
                .slice(0, 21)
                .join(" "); //first 20 words
              const descEnding = d.description
                .split(" ")
                .slice(21)
                .join(" "); //21st through the last word
              let imageUrl =
                "https://cdn.sanity.io/images/ogg4t6rs/production/a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188.png";
              let hasUniqueImage = false;
              if (d.image.asset == undefined) {
                null;
              } else if (
                d.image.asset._ref != "image-a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188-png"
              ) {
                hasUniqueImage = true;
                const imageArray = d.image.asset._ref.split("-"); //splits _ref into an array of length 4
                imageUrl = `https://cdn.sanity.io/images/ogg4t6rs/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}`; //gives image <image id>-<original size>.<extension>
              }

              return (
                <div
                  className={styles.card}
                  key={d._id}
                  style={{
                    backgroundColor: index % 2 == 0 ? "#eeeeee" : "#ffffff",
                    WebkitBoxShadow: "10px 10px 10px 1px rgba(0, 0, 0, 0.12)",
                    MozBoxshadow: "10px 10px 10px 1px rgba(0, 0, 0, 0.12)",
                    boxShadow: "10px 10px 10px 1px rgba(0, 0, 0, 0.12)"
                  }}
                >
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardCommon}>{d.commonName}</h3>
                    <i>
                      <h4 className={styles.cardBotanical}>
                        {d.botanicalName} {d.variety}
                      </h4>
                      <p style={{ lineHeight: "1", fontSize: "small" }}>Category: {d.category}</p>
                    </i>
                    {hasUniqueImage == true ? (
                      <a href={`${imageUrl}`} target="_blank">
                        <div
                          style={{
                            width: "100px",
                            height: "110px",
                            margin: "0 calc(50% - 50px)",
                            backgroundImage: `url("${imageUrl}?w=100&fit=scale")`,
                            backgroundRepeat: "no-repeat"
                          }}
                        ></div>
                      </a>
                    ) : null}

                    <button
                      className={styles.trigger}
                      onClick={() => this.openModal(`${modalId}`)}
                      style={{
                        backgroundColor: index % 2 != 0 ? "#eeeeee" : "#ffffff"
                      }}
                    >
                      See Details
                    </button>

                    {/* MODAL STARTS HERE */}
                    <div className={styles.modal} id={`${modalId}`}>
                      <div className={styles.modalContent}>
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            float: "right",
                            border: "1px solid #3e3e3e",
                            borderRadius: "3px",
                            textalign: "center",
                            cursor: 'pointer'
                          }}
                          onClick={() => this.hideModal(`${modalId}`)}
                        >
                          X
                        </span>
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
                            <button
                              className={styles.littleButton}
                              onClick={() => this.expandDescr(`${modalId}`)}
                            >
                              keep reading
                            </button>
                          </span>
                          <span id={`long${modalId}`} style={{ display: "none" }}>
                            {" "}
                            {descEnding}{" "}
                            <button
                              className={styles.littleButton}
                              onClick={() => this.collapseDescr(`${modalId}`)}
                            >
                              see less
                            </button>
                          </span>
                        </p>
                        <p>{d.notes}</p>
                        <p>
                          Thrives from zone {d.lowZone} to zone {d.highZone}.
                        </p>
                        <div className={styles.row} style={{ width: "100%" }}>
                          <div className={styles.oneThirdBlock}>
                            <ul>Soil types:</ul>
                            {d.soilType.map((type, index) => (
                              <li key={index}>{type}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}>
                            <ul>Soil Ph:</ul>
                            {d.soilPH.map((ph, index) => (
                              <li key={index}>{ph}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}>
                            <ul>Water level:</ul>
                            {d.waterLevel.map((water, index) => (
                              <li key={index}>{water}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}>
                            <ul>Sun exposure:</ul>
                            {d.sunlightLevel.map((sun, index) => (
                              <li key={index}>{sun}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}>
                            <ul>Foliage:</ul>
                            {d.foliage.map((f, index) => (
                              <li key={index}>{f}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}>
                            {hasUniqueImage == true ? (
                              //if it has a unique image, it is clickable
                              <a href={`${imageUrl}`} target="_blank">
                                <div
                                  style={{
                                    width: "100px",
                                    height: "110px",
                                    margin: "0 calc(50% - 50px)",
                                    backgroundImage: `url("${imageUrl}?w=100&fit=scale")`,
                                    backgroundRepeat: "no-repeat"
                                  }}
                                ></div>
                              </a>
                            ) : (
                              //if there is a placeholder image, find it on google images
                              <a
                                href={`http://www.google.com/search?q=${d.botanicalName} ${d.variety}&tbm=isch`}
                                target="_blank"
                              >
                                <button
                                  style={{
                                    width: "100px",
                                    height: "auto",
                                    fontSize: "1.5vw",
                                    margin: "0 calc(50% - 50px) 12px"
                                  }}
                                >
                                  {d.botanicalName} on Google Images
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                        <div className={styles.row} style={{ width: "100%" }}>
                          <div className={styles.oneThirdBlock}>
                            <ul>Container Size</ul>
                            {d.amount.map((p, index) => (
                              <li key={index}>{p.containerSize}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}>
                            <ul>Price</ul>
                            {d.amount.map((p, index) => (
                              <li key={index}>${p.price}</li>
                            ))}
                          </div>
                          <div className={styles.oneThirdBlock}></div>
                        </div>
                      </div>
                      {/* end modal content */}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}

export default SearchResults;

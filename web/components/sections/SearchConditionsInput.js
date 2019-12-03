import React, { Component } from "react";

class SearchConditionsInput extends Component {
  state = {
    soilPH_acid: false,
    soilPH_neutral: false,
    soilPH_alkaline: false,
    soilType_clay: false,
    soilType_average: false,
    soilType_sand: false,
    waterLevel_dry: false,
    waterLevel_average: false,
    waterLevel_wet: false,
    sunlightLevel_full: false,
    sunlightLevel_partial: false,
    sunlightLevel_shade: false,
    foliage_evergreen: false,
    foliage_semievergreen: false,
    foliage_deciduous: false,
    zone: "any",
    category: "any",
    conditionsOptions: [
      {
        title: "Soil Ph",
        choice1: "soilPH_acid",
        choice1Name: "acid",
        choice2: "soilPH_neutral",
        choice2Name: "neutral",
        choice3: "soilPH_alkaline",
        choice3Name: "alkaline"
      },
      {
        title: "Soil Type",
        choice1: "soilType_clay",
        choice1Name: "clay",
        choice2: "soilType_average",
        choice2Name: "average",
        choice3: "soilType_sand",
        choice3Name: "sand"
      },
      {
        title: "Water",
        choice1: "waterLevel_dry",
        choice1Name: "dry",
        choice2: "waterLevel_average",
        choice2Name: "average",
        choice3: "waterLevel_wet",
        choice3Name: "wet"
      },
      {
        title: "Sun",
        choice1: "sunlightLevel_full",
        choice1Name: "full",
        choice2: "sunlightLevel_partial",
        choice2Name: "partial",
        choice3: "sunlightLevel_shade",
        choice3Name: "shade"
      },
      {
        title: "Foliage",
        choice1: "foliage_evergreen",
        choice1Name: "evergreen",
        choice2: "foliage_semievergreen",
        choice2Name: "semi-evergreen",
        choice3: "foliage_deciduous",
        choice3Name: "deciduous"
      }
    ]
  };

  handleChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleCheck = event => {
    const field = event.target.name;
    this.setState(prevState => ({
      [field]: !prevState[field]
    }));
  };

  searchByConditions = event => {
    let filters = "";
    let form = [
      { name: "acid", array: "soilPH", value: this.state.soilPH_acid },
      { name: "neutral", array: "soilPH", value: this.state.soilPH_neutral },
      { name: "alkaline", array: "soilPH", value: this.state.soilPH_alkaline },
      { name: "clay", array: "soilType", value: this.state.soilType_clay },
      { name: "average", array: "soilType", value: this.state.soilType_average },
      { name: "sand", array: "soilType", value: this.state.soilType_sand },
      { name: "dry", array: "waterLevel", value: this.state.waterLevel_dry },
      { name: "average", array: "waterLevel", value: this.state.waterLevel_average },
      { name: "wet", array: "waterLevel", value: this.state.waterLevel_wet },
      { name: "full", array: "sunlightLevel", value: this.state.sunlightLevel_full },
      { name: "partial", array: "sunlightLevel", value: this.state.sunlightLevel_partial },
      { name: "shade", array: "sunlightLevel", value: this.state.sunlightLevel_shade },
      { name: "evergreen", array: "foliage", value: this.state.foliage_evergreen },
      { name: "semi-evergreen", array: "foliage", value: this.state.foliage_semievergreen },
      { name: "deciduous", array: "foliage", value: this.state.foliage_deciduous },
      { name: "zone", value: this.state.zone },
      { name: "category", value: this.state.category.toLowerCase() }
    ];

    form.map(cond => {
      if (cond.value === false || cond.value === "any") {
        //ignores all selections not made
        null;
        // } else if (cond.name === "zone" && filters === "") { //deals with numeric "zone" selection as first selection
        //   filters = `lowZone <= ${cond.value} && highZone >= ${cond.value}`;
        // } else if (cond.name === "zone" && filters != "") { //deals with numeric "zone" selection as a subsequent selection
        //   filters = ` && lowZone <= ${cond.value} && highZone >= ${cond.value}`;
      } else if (cond.value === true && filters === "") {
        //the first selected checkbox
        filters = `"${cond.name}" in ${cond.array}`; //ex: "evergreen" in foliage
      } else if (cond.value === true && filters != "") {
        //all subseqent selected checkboxes
        filters = filters.concat(` && "${cond.name}" in ${cond.array}`);
      } else if (filters === "") {
        filters = `${cond.name} == '${cond.value}'`;
      } else {
        filters = filters.concat(` && ${cond.name} == '${cond.value}'`);
      }
      return filters;
    });
    console.log(filters);
    this.props.searchByConditions(filters);
  };

  render() {
    return (
      <section>
        <div id="checkboxDiv">
          {this.state.conditionsOptions.map(c => (
            <div className="adaptiveCol" key={c.title}>
              <div style={{ textDecoration: "underline" }}>{c.title}</div>
              <div>
                <input
                  type="checkbox"
                  name={c.choice1}
                  value={`this.state.${c.choice1}`}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice1}>{c.choice1Name}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name={c.choice2}
                  value={`this.state.${c.choice2}`}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice2}>{c.choice2Name}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name={c.choice3}
                  value={`this.state.${c.choice3}`}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice3}>{c.choice3Name}</label>
              </div>
            </div>
          ))}

          <div className="adaptiveCol">
            <label htmlFor="category">
            <div style={{ textDecoration: "underline" }}>Category</div>
            </label>
            <select
              style={{ margin: "0" }}
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="any">--any--</option>
              <option value="Ferns">Ferns</option>
              <option value="Grasses">Grasses</option>
              <option value="Opuntia">Opuntia</option>
              <option value="Palms">Palms</option>
              <option value="Perennials">Perennials</option>
              <option value="Seeds">Seeds</option>
              <option value="Shrubs">Shrubs</option>
              <option value="Trees">Trees</option>
              <option value="Vines">Vines</option>
              <option value="Yucca">Yucca</option>
            </select>
          </div>
        </div>

  {/* NOT FOR USE UNLESS/UNTIL lowZone and highZone ARE CONVERTED TO NUMBER FIELDS */}
          {/* <div>
            <label htmlFor="zone">
              <h5 style={{ clear: "both" }}>USDA Hardiness Zone</h5>
            </label>
            <select
              type="number"
              name="zone"
              value={this.state.zone}
              onChange={this.handleChange}
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <option value="any">--any--</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <a href="https://garden.org/nga/zipzone/" target="_blank">
              <h6 style={{ display: "inline-block", margin: "0 10px" }}>
                <u>What's My USDA Hardiness Zone?</u>
              </h6>
            </a>
        </div> */}

        <button
          className="condButton"
          onClick={event => this.searchByConditions(event)}
          type="submit"
          id="searchByConditions"
        >
          Find My Plants
        </button>
        <style jsx>
          {`
            h4,
            h5,
            hr {
              margin: 30px 0 10px;
            }
            #checkboxDiv {
              width: 80%;
              margin: 0 10% 1vh;
            }
            .adaptiveCol {
              display: inline-block;
              margin: 15px 0;
              width: 25%;
              text-align: left;
              font-size: calc(12px + .6vw);
              vertical-align: top;
            }
            .condButton {
              width: 38%;
              text-align: center;
              padding: 15px 0;
              margin: 20px 0;
              border: 1px solid #3e3e3e;
              border-radius: 2vw;
              box-sizing: border-box;
              color: #3e3e3e;
              background-color: transparent;
              cursor: pointer;
              font-size: var(--font-title3-size);
              line-height: var(--font-title3-line-height);
            }
            .condButton:hover {
              color: #7d62b2;
              background-color: #e3e3e3;
            }
            @media screen and (max-width: 780px) {
              #checkboxDiv {
                width: 94%;
                margin: 0 3%;
              }
              .adaptiveCol {
                width: 33%;
                font-size: 12px;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default SearchConditionsInput;

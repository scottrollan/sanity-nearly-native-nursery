import React, { Component } from "react";

class SearchPage extends Component {
  state = {
    search_name: "",
    category: "any",
    soil_ph_acid: false,
    soil_ph_neutral: false,
    soil_ph_alkaline: false,
    soil_type_clay: false,
    soil_type_average: false,
    soil_type_sand: false,
    water_dry: false,
    water_average: false,
    water_wet: false,
    sun_full: false,
    sun_partial: false,
    sun_shade: false,
    foliage_evergreen: false,
    foliage_semievergreen: false,
    foliage_deciduous: false,
    zone: 'any'
  };

  handleChange = event => {
    event.preventDefault();
    const field = event.target.id;
    this.setState({ [field]: event.target.value });
    setTimeout(() => console.log(field + ": " + this.state[field]), 1000);
  };

  handleCheck = event => {
    const field = event.target.id;
    this.setState(prevState => ({
      [field]: !prevState[field]
    }));
    setTimeout(() => console.log(field + ": " + this.state[field]), 1000);
  };
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <label htmlFor="search_name">
            <h4>Search Botanical Name or Common Name: &nbsp;</h4>
          </label>
          <input
            type="text"
            id="search_name"
            onChange={this.handleChange}
            style={{ backgroundColor: '#e3e3e3', padding: '0 8px', height: '22px' }}
          ></input>
          <h4>...or by Growing Conditions</h4>

          <div
            className="spacedRow col1"
            style={{
                padding: "0 2vw 1vh",
                boxSizing: "border-box",
                border: "1px solid #cccccc",
                textAlign: "left", 
                fontSize: '1.8vw'
            }}
          >
      <span
        className="spacedRow indent0 col5"
        style={{ display: "inline-block" }}
      >
        <div>Soil Ph</div>
        <div>
          <input
            type="checkbox"
            id="soil_ph_acid"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="soil_ph_acid">acid</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_ph_neutral"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="soil_ph_neutral">neutral</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_ph_alkaline"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="soil_ph_alkaline">alkaline</label>
        </div>
      </span>

      <span className="spacedRow indent20 col5">
        <div>Soil Type</div>
        <div>
          <input
            type="checkbox"
            id="soil_type_clay"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="soil_type_clay">clay</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_type_average"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="soil_type_average">average</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_type_sand"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="soil_type_sand">sand</label>
        </div>
      </span>

      <span className="spacedRow indent40 col5">
        <div>Water</div>
        <div>
          <input
            type="checkbox"
            id="water_wet"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="water_wet">wet</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="water_average"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="water_average">average</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.handleCheck}
            id="water_dry"
          ></input>
          <label htmlFor="water_dry">dry</label>
        </div>
      </span>

      <span className="spacedRow indent60 col5">
        <div>Sun Exposure</div>
        <div>
          <input
            type="checkbox"
            id="sun_full"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="sun_full">full</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sun_partial"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="sun_partial">partial</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sun_shade"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="sun_shade">shade</label>
        </div>
      </span>

      <span className="spacedRow indent80 col5">
        <div>Foliage</div>
        <div>
          <input
            type="checkbox"
            id="foliage_evergreen"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="foliage_evergreen">evergreen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="foliage_semievergreen"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="foliage_semievergreen">semi-evergreen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="foliage_deciduous"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="foliage_deciduous">deciduous</label>
        </div>
      </span>
      </div>

        
         <div>            
              <span><label htmlFor="zone"><h5 style={{ margin: '10px 0 0 0' }}>USDA Hardiness Zone</h5></label>
              <select
                type="number"
                id="zone"
                value={this.state.zone}
                onChange={this.handleChange}
                style={{ display: 'inline-block', margin: '0 10px' }}
              >
                <option value='any'>--any--</option>
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
                <a href="https://garden.org/nga/zipzone/" target="_blank"><h6 style={{ display: 'inline-block', margin: '0 10px' }}><u>What's My USDA Hardiness Zone?</u></h6></a></span>
            
          </div>


          <div style={{ margin: '20px 0 0 0', display: 'block' }}>
            <label htmlFor="category"><h5>Category</h5></label>
            <select
            id="category"
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

          <a href="/search"><button id="plantFind">Find My Plants</button></a>
        </div>
        <style jsx>
          {`
            html {
              font-size: 1.8vw;
            }
            .spacedRow {
              margin-top: 2vh;
            }
            .indent0 {
              position: relative;
              left: 0%;
              width: auto;
            }
            .indent20 {
              position: absolute;
              left: 20%;
              width: auto;
            }
            .indent40 {
              position: absolute;
              left: 40%;
              width: auto;
            }
            .indent60 {
              position: absolute;
              left: 60%;
              width: auto;
            }
            .indent80 {
              position: absolute;
              left: 80%;
            }
            .col1 {
              width: 100%;
            }          
            .col5 {
              width: 20%;
            }
            #plantFind {
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
            #plantFind:hover {
              color: #7d62b2;
            }
          `}
        </style>
      </div>
    );
  }
}

export default SearchPage;

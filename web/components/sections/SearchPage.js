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
    zone: 'any',
    growingConditions: [
      {
        title: 'Soil Ph',
        choice1: 'soil_ph_acid',
        choice1Name: 'acid',
        choice2: 'soil_ph_neutral',
        choice2Name: 'neutral',
        choice3: 'soil_ph_alkaline',
        choice3Name: 'alkaline'
      },
      {
        title: 'Soil Type',
        choice1: 'soil_type_clay',
        choice1Name: 'clay',
        choice2: 'soil_type_average',
        choice2Name: 'average',
        choice3: 'soil_type_sand',
        choice3Name: 'sand'
      },
      {
        title: 'Water',
        choice1: 'water_dry',
        choice1Name: 'dry',
        choice2: 'water_average',
        choice2Name: 'average',
        choice3: 'water_wet',
        choice3Name: 'wet'
      },
      {
        title: 'Sun',
        choice1: 'sun_full',
        choice1Name: 'full',
        choice2: 'sun_partial',
        choice2Name: 'partial',
        choice3: 'sun_shade',
        choice3Name: 'shade'
      },
      {
        title: 'Foliage',
        choice1: 'foliage_evergreen',
        choice1Name: 'evergreen',
        choice2: 'foliage_semievergreen',
        choice2Name: 'semi-evergreen',
        choice3: 'foliage_deciduous',
        choice3Name: 'deciduous'
      }
    ]
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
          <hr />
          <h4>...or by Growing Conditions</h4>

          <div
            id="conditionsDiv"
            // style={{
            //     width: '80%',
            //     margin: "0 10% 1vh",
            //     textAlign: "left", 
            //     fontSize: '1.8vw'
            // }}
          >
          {this.state.growingConditions.map(c => (

            <span
              className="col5Float"
              key={c.title}
            >
              <div style={{ textDecoration: 'underline' }}>{c.title}</div>
              <div>
                <input
                  type="checkbox"
                  id={c.choice1}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice1}>{c.choice1Name}</label>

              </div>
              <div>
                <input
                  type="checkbox"
                  id={c.choice2}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice2}>{c.choice2Name}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id={c.choice3}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice3}>{c.choice3Name}</label>
              </div>
            </span>
          ))}
        </div>

        
        <div>            
          <span><label htmlFor="zone"><h5 style={{ clear: 'both' }}>USDA Hardiness Zone</h5></label>
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


          <div style={{display: 'block' }}>
            <label htmlFor="category"><h5>Category</h5></label>
            <select
            style={{ margin: '0' }}
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
            h4, h5, hr {
              margin: 30px 0 10px;
            }
            #conditionsDiv {
                width: 80%;
                margin: 0 10% 1vh;
                textAlign: left; 
                fontSize: 1.8vw;
            }         
            .col5Float {
              float: left;
              width: 20%;
            }
            #foliage_deciduous::after {
              float: none;
              contenet: " --- does this work?"
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
              background-color: #e3e3e3;
            }
            @media screen and (max-width: 960px) {
              .col5Float {
                margin: 0 0 20px 0;
                float: none;
                display: inline-block;
                width: 33.3330%;
                font-size: 3vw;
              }
            }

          `}
        </style>
      </div>
    );
  }
}

export default SearchPage;

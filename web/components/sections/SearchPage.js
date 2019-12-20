import React, { Component } from "react";
import SearchNameInput from "./SearchNameInput";
import SearchResults from "./SearchResults";
import SearchConditionsInput from "./SearchConditionsInput";

class SearchPage extends Component {
  state = {
    form: []
  };

  compileResults = () => {
    if (this.state.form === undefined || this.state.form.length === 0) {
      document.getElementById("spinner").style.display = "none";
      document.getElementById("searchCondButton").style.display = "inline-block";
      alert("...no plants match those specifications...");
    } else {
      document.getElementById("resultsArea").style.display = "inline";
      document.getElementById("searchArea").style.display = "none";
      location.href = "#resultsArea";
    }
  }

  searchNow = (filters, callback) => {
    this.setState({ form: [] }); //resets state.form for new search
    let form = [];
    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "ogg4t6rs",
      dataset: "production",
      token: "",
      useCdn: true // `false` if you want to ensure fresh data
    });
    const query = `*[${filters}] | order(category asc) | order(botanicalName asc)`;

    client.fetch(query).then(plants => {
      plants.forEach(p => {
        form.push(p);
      });
      this.setState({ form: form });
      callback();
    });
  };

  render() {
    return (
      <div>
        <section id="searchArea">
          <div style={{ textAlign: "center" }}>
            <h1>Search Botanical Name or Common Name: &nbsp;</h1>
            <SearchNameInput searchByName={filters => this.searchNow(filters, this.compileResults)} />
            <hr />
            <h1>...or by Growing Conditions</h1>
            <div>
              <SearchConditionsInput searchByConditions={filters => this.searchNow(filters, this.compileResults)} />
            </div>
          </div>
        </section>
        <SearchResults resultsArray={this.state.form} />

        <style jsx>
          {`
            #searchArea {
              position: relative;
              text-align: center;
            }
            h4,
            h5,
            hr {
              margin: 30px 0 10px;
            }
            .card {
              border: 1px solid #999999;
              width: 80%;
              margin: 10px 10%;
              box-shadow: 5px 10px 5px #888888;
              box-sizing: border-box;
            }
            .card-body {
              padding: 1vh;
              text-align: center;
            }
            @media screen and (max-width: 960px) {
              .card {
                width: 95%;
                margin: 10px 2.5%;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default SearchPage;

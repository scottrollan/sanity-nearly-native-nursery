import React, { Component } from "react";
import SearchNameInput from './SearchNameInput';
import SearchResults from './SearchResults';
import SearchConditionsInput from './SearchConditionsInput';

class SearchPage extends Component {
  state = {
        form:  [],
  };
  searchNow = (filters) => {
    this.setState({ form: [] }); //resets state.form for new search
    let form = [];
    const sanityClient = require('@sanity/client')    
    const client = sanityClient({
        projectId: 'ogg4t6rs',
        dataset: 'production',
        token: '',
        useCdn: true // `false` if you want to ensure fresh data
    })
    const query = 
        `*[${filters}] | order(category asc) | order(botanicalName asc)`

    client.fetch(query).then(plants => {
    plants.forEach(p => {
        form.push(p);
        this.setState({ form: form });
    })  

    if(this.state.form === undefined || this.state.form.length === 0 ) {
      alert('...no plants match those specifications...');
    }else{
      document.getElementById('resultsArea').style.display = 'inline';
      document.getElementById('searchArea').style.display = 'none'; 
      location.href = '#resultsArea';
    }
    });
    console.log(form);
  }

  render() {
    return (
      <div>
      <section id="searchArea">
        <div id="mask"></div>
        <div style={{ textAlign: "center" }}>
            <h4>Search Botanical Name or Common Name: &nbsp;</h4>
          <SearchNameInput
            searchByName={(filters) => this.searchNow(filters)}
          />
          <hr />
          <h4>...or by Growing Conditions</h4>
          <div>
            <SearchConditionsInput
              searchByConditions={(filters) => this.searchNow(filters)}
            />
          </div>
        </div>
        </section>
        <SearchResults 
          resultsArray={this.state.form}
        />

        <style jsx>
          {`
          #searchArea {
            position: relative;
            text-align: center;
          }
          #mask {
            background-image: url("https://cdn.sanity.io/images/ogg4t6rs/production/d481f5ebfea4ba299cdf293b1de95a54dd6b48c1-614x661.png");
            background-repeat: no-repeat;
            background-position: center;  
            opacity: .2;          
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: -1
          }
            h4, h5, hr {
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

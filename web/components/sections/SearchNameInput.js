import React, { Component } from "react";

class searchNameInput extends Component {
  state = {
    search_name: ""
  };

  searchByName = () => {
    event.preventDefault();
    console.log(this.state.search_name);
    let inputText = this.state.search_name.toLowerCase();
    let botanicalInput = inputText.replace(/^\w/, c => c.toUpperCase()); // capitalize first letter of first word only
    let commonInput = inputText
      .split(" ")
      .map(i => i.replace(/^\w/, c => c.toUpperCase())) //capitalize first letter of every word
      .join(" ");
    const filters = `botanicalName == "${botanicalInput}" || commonName == "${commonInput}" || botanicalName match "${botanicalInput}" || commonName match "${commonInput}"`;
    this.props.searchByName(filters);
  };

  handleChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  render(props) {
    return (
      <div>
        <form onSubmit={event => this.searchByName(event)} >
          <input
            type="text"
            name="search_name"
            id="search_name"
            value={this.state.search_name}
            onChange={this.handleChange}
          ></input>
       
        <button
          className="nameButton"
          type="submit"
        >
          Search By Name
        </button>
        </form> 
        <style jsx>
          {`
            input {
              background-color: #e3e3e3;
              padding: 0 8px;
              height: 22px;
              margin: 20px auto;              
              display: inherit;
            }
            .nameButton {
              width: 90%;
              max-width: 300px;
              text-align: center;
              padding: 15px 0;
              margin: 0 auto;
              border: 1px solid #3e3e3e;
              border-radius: 2vw;
              box-sizing: border-box;
              color: #3e3e3e;
              background-color: transparent;
              cursor: pointer;
              font-size: var(--font-title3-size);
              line-height: var(--font-title3-line-height);
              display: inherit;
            }
            .nameButton:hover {
              color: #7d62b2;
              background-color: #c3c3c3;
            }
          `}
        </style>
      </div>
    );
  }
}

export default searchNameInput;

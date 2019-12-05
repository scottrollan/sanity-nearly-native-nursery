import React, { Component } from "react";

class searchNameInput extends Component {
  state = {
    search_name: ""
  };

  searchByName = event => {
    let inputText = event.target.value.toLowerCase();
    let botanicalInput = inputText.replace(/^\w/, c => c.toUpperCase()); // capitalize first letter of first word only
    let commonInput = inputText
      .split(" ")
      .map(i => i.replace(/^\w/, c => c.toUpperCase())) //capitalize first letter of every word
      .join(" ");
    const filters = `botanicalName match "${botanicalInput}" || commonName match "${commonInput}"`;
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
        <div>
          <input
            type="text"
            name="search_name"
            id="search_name"
            value={this.state.search_name}
            onChange={this.handleChange}
            style={{ backgroundColor: "#e3e3e3", padding: "0 8px", height: "22px" }}
          ></input>
        </div>
      
        <button
          className="nameButton"
          onClick={event => this.searchByName(event)}
          type="submit"
          value={this.state.search_name}
        >
          Search By Name
        </button>
        <style jsx>
          {`
            .nameButton {
              width: 38%;
              text-align: center;
              padding: 15px 0;
              margin: 20px 0 0;
              border: 1px solid #3e3e3e;
              border-radius: 2vw;
              box-sizing: border-box;
              color: #3e3e3e;
              background-color: transparent;
              cursor: pointer;
              font-size: var(--font-title3-size);
              line-height: var(--font-title3-line-height);
            }
            .nameButton:hover {
              color: #7d62b2;
              background-color: #e3e3e3;
            }
          `}
        </style>
      </div>
    );
  }
}

export default searchNameInput;

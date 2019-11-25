import React, { Component } from 'react'


const sanityClient = require('@sanity/client')
    
const client = sanityClient({
    projectId: 'ogg4t6rs',
    dataset: 'plant',
    useCdn: true // `false` if you want to ensure fresh data
})
const query = 
`*[_type == "plant" && botanicalName == $keyword] {botanicalName, commonName}`
const params = "{keyword: event.target.value}"

class searchNameFunction extends Component {


    searchNow = (event) => {
        event.preventDefault();
        client.fetch(query, params).then(plant => {
        console.log('Plants that match this search:')
        plant.forEach(plant => {
            console.log(`${plant.botanicalName} a.k.a: "${plant.commonName}"`)
        })
        })
    }
      
    render(_props) {
        
        return (
            <button
            type="text"
            id="search_name"
            value={this.props.value}
            onClick={(event) => this.searchNow(event)}
            type="submit"
            id="searchByName"             >
                 Search By Name
            </button>
        )
    
    }
}

export default searchNameFunction;
import React, { Component } from 'react'

class searchNameFunction extends Component {


    searchNow = (event) => {
        let inputText = event.target.value.toLowerCase();
        let botanicalInput = inputText.replace(/^\w/, c => c.toUpperCase());
        let commonInput = inputText.split(' ').map((i) => i.replace(/^\w/, c => c.toUpperCase())).join(' ');
        const sanityClient = require('@sanity/client')    
        const client = sanityClient({
            projectId: 'ogg4t6rs',
            dataset: 'production',
            token: '',
            useCdn: true // `false` if you want to ensure fresh data
        })
        const query = 
            `*[botanicalName match "${botanicalInput}" || commonName match "${commonInput}"]{botanicalName, variety, commonName} | order(category asc) | order(botanicalName asc)`
        client.fetch(query).then(plants => {
        console.log('Plants that match this search:')
        plants.forEach(p => {
            console.log(`${p.botanicalName} ${p.variety}, a.k.a: "${p.commonName}"`)
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
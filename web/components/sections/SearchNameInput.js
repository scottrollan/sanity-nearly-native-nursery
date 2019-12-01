import React from 'react'

const searchNameInput = (props) => {

    return (
        <button
            id="search_name"
            value={props.value}
            onClick={(event) => props.searchNow(event)}
            type="submit"
            id="searchByName"
            >
            Search By Name
        </button>
        
    )
    
}

export default searchNameInput;
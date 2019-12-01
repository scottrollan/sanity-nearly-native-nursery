import React, { Component } from 'react';

class SearchResults extends Component {

    openModal = (whichPlantModal) => {
        document.getElementById(whichPlantModal).classList.add('showModal')
    }

    closeModal = (whichPlantModal) => {
        document.getElementById(whichPlantModal).classList.remove('showModal')
    }

    expandDescr = (whichDescr) => {
        document.getElementById(`short${whichDescr}`).style.display = 'none';
        document.getElementById(`long${whichDescr}`).style.display = 'inline';
    }    
   
    collapseDescr = (whichDescr) => {
        document.getElementById(`long${whichDescr}`).style.display = 'none';
        document.getElementById(`short${whichDescr}`).style.display = 'inline';
    }

    render(props) {
        return(

            <div id="results" style={{ }}>
            { this.props.resultsArray === undefined || this.props.resultsArray.length == 0
            ?  (<p>No results. Try again.</p>)
            : (
                this.props.resultsArray.map(d => {
                const imageArray = d.image.asset._ref.split("-"); //splits _ref into an array of length 4
                const ext = imageArray[3]; //gives "png" or "jpg" etc
                const file = `${imageArray[1]}-${imageArray[2]}`; //gives image <image id>-<original size>
                const imageUrl = `https://cdn.sanity.io/images/ogg4t6rs/production/${file}.${ext}`; //gets original image url
                const modalId = d._id;
                const descIntro = d.description.split(" ").slice(0, 21).join(" ");
                const descEnding = d.description.split(" ").slice(21).join(" ");
                
                return(
                <div className="card" key={d._id}>
                    <div className="cardBody">
                    <h3 className="cardCommon">{d.commonName}</h3>
                    <i><h4 className="cardBotanical">{d.botanicalName} {d.variety}</h4></i>
                    { file == "a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188" || file === undefined //if the image is the placeholder image or there is no image, then don't show anything
                    ? (null)
                    : (<a href={`${imageUrl}`} target="_blank"><div style={{ width: '100px', height: '100px', margin: '0 calc(50% - 50px)', backgroundImage: `url("${imageUrl}?w=100&max-h=100")`, backgroundRepeat: 'no-repeat' }}></div></a>)
                    }
                    
                    <button className="trigger" onClick={() => this.openModal(`${modalId}`)}>See Details</button>
                    <div className="modal" id={`${modalId}`}>
                        <div className="modalContent">
                            <h4>{d.commonName}</h4>
                            <h5><i>{d.botanicalName} {d.variety}</i></h5>
                            { d.regionalName 
                            ? (<h5>Regional Name: {d.regionalName}</h5>)
                            : (null) }
                            <p>{descIntro}
                            <span id={`short${modalId}`}>... <button onClick={() => this.expandDescr(`${modalId}`)}>keep reading</button></span>
                            <span id={`long${modalId}`} style={{ display: 'none' }}> {descEnding}  <button onClick={() => this.collapseDescr(`${modalId}`)}>see less</button></span></p>
                            <p>{d.notes}</p>
                            <p>Thrives from zone {d.lowZone} to zone {d.highZone}.</p>
                            <div className="row" style={{ width: '100%' }}>
                                <div className="list">
                                <ul>Soil types:</ul>
                                {d.soilType.map((type, index) => (
                                    <li key={index}>{type}</li>
                                ))}   
                                </div>  
                                <div className="list">                           
                                <ul>Soil Ph:</ul>
                                {d.soilPH.map((ph, index) => (
                                    <li key={index}>{ph}</li>
                                ))}  
                                </div>  
                                <div className="list">                                
                                <ul>Water level:</ul>
                                {d.waterLevel.map((water, index) => (
                                    <li key={index}>{water}</li>
                                ))}                                
                                </div>  
                            </div>
                            <div className="row" style={{ width: '100%' }}>
                                <div className="list">                                
                                <ul>Sun exposure:</ul>
                                {d.sunlightLevel.map((sun, index) => (
                                    <li key={index}>{sun}</li>
                                ))}                                
                                </div>  
                                <div className="list">                                  
                                <ul>Foliage:</ul>
                                {d.foliage.map((f, index) => (
                                    <li key={index}>{f}</li>
                                ))}
                                </div>  
                                <div className="list"> 
                                { file == "a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188" || file === undefined //if the image is the placeholder image or there is no image, it is not clickable
                                ? (<div style={{ width: '100px', height: '100px', margin: '0 calc(50% - 50px)', backgroundImage: `url("${imageUrl}?w=100&max-h=100")`, backgroundRepeat: 'no-repeat', clear: 'both' }}></div>)
                                : (<a href={`${imageUrl}`} target="_blank"><div style={{ width: '100px', height: '100px', margin: '0 calc(50% - 50px)', backgroundImage: `url("${imageUrl}?w=100&max-h=100")`, backgroundRepeat: 'no-repeat', clear: 'both' }}></div></a>)
                                }
                                </div>
                            </div>
                            <div className="row" style={{ width: '100%' }}>
                                <div className="list">
                                <ul>Container Size</ul>
                                {d.amount.map((p, index) => (
                                    <li key={index}>{p.containerSize}</li>
                                ))}   
                                </div>  
                                <div className="list">                           
                                <ul>Price</ul>
                                {d.amount.map((p, index) => (
                                    <li key={index}>${p.price}</li>
                                ))}  
                                </div> 
                                <div className="list">
                                    <button className="closeButton" onClick={() =>this.closeModal(`${modalId}`)}>Close</button>
                                </div>
                            </div>
                        </div> 
                        {/* end modal content */}
                    </div>
    
                    </div> 
                </div> )})
                
                )}
                <style jsx>
                    {`

                    .card {
                        border: 1px solid #999999;
                        width: 80%;
                        margin: 10px 10%;
                    }
                    .cardBody {
                        padding: 40px;
                        text-align: center;
                    }
                    .modal {
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        opacity: 0;
                        visibility: hidden;
                        transform: scale(1.1);
                        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
                        border: 1px solid #767676;
                        box-shadow: 5px 10px 100px #cccccc;
                        z-index: 9999;
                    }
                    .modalContent {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: white;
                        padding: 1rem 1.5rem;
                        width: 24rem;
                        max-height: 90%;
                        border-radius: 0.5rem;
                        overflow: hidden;
                        overflow-y: auto
                    }
                    .closeButton {
                        position: absolute;
                        right: 12px;
                        top: 12px;
                        line-height: 1.5rem;
                        padding: 2px 8px;
                        text-align: center;
                        cursor: pointer;
                        border-radius: 0.25rem;
                        background-color: lightgray;;
                    }
                    button:hover {
                        background-color: darkgray;
                    }
                    .showModal {
                        opacity: 1;
                        visibility: visible;
                        transform: scale(1.0);
                        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
                    }
                    .list {
                        text-align: left;
                        float: left;
                        width: 33%;
                        margin: 10px 0;
                    }
                    ul{
                        text-align: left;
                        margin: 0;
                        padding: 0;
                        text-decoration: underline;
                    }
                    li {
                        list-style-type: none;
                    }
                    .row:after {
                        content: "";
                        display: table;
                        clear: both;
                    }
                                        
                    `}
                </style>
            </div>
        );
    }

};

export default SearchResults;
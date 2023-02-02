import React from 'react'

export default function Main(props){
    return (
        <div className='main--section--list'>
            <img src={props.journal.imageUrl} className='travel-img' alt='' />
            <div className='main-text-section'>
                <div className='main-text-flex'><h4 className='location'>{props.journal.location}</h4><a href={props.journal.googleMapsUrl} target='_blank' className='map-link' >View on Google Maps</a></div>
                <h1 className='main-bold'>{props.journal.title}</h1>
                <span className='date-text'><p>{props.journal.startDate}</p><p>{props.journal.endDate}</p></span>
                <p className='main-description'>{props.journal.description}</p>
            </div>
        </div>
    )
}
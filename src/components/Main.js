import React from 'react'

export default function Main(props){
    return (
        <div className='main--section--list'>
            <img src={props.journal.imageUrl} alt='' />
            <div>
                <span><h4>{props.journal.location}</h4><a href=''>View on Google Maps</a></span>
                <h1>{props.journal.title}</h1>
                <span><p>{props.journal.startDate}</p><p>{props.journal.endDate}</p></span>
                <p>{props.journal.description}</p>
            </div>
        </div>
    )
}
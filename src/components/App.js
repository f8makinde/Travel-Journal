import React from 'react'
import Nav from '../components/Nav'
import data from './data'
import Main from './Main'
export default function App(){
  const travel = data.map((journal)=>{
    return <Main journal={journal}/>
  })
    return (
        <div>
          <Nav />
          <section className='main--section'>
             {travel}
          </section>
        
        </div>

    )
}
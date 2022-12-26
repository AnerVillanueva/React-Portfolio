import React from 'react'
import './education.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'

const experience = () => {
    return (
      <section id='education'>
        <h5>What Formation I Have</h5>
        <h2>My Education</h2>
        
        <div className="container education__container">
          <div className="Education">
            <div className='education__main'>
                <FaUniversity className='education__main-icon'/>
                <h3>Engineer degree</h3>
            </div>
            <div className="education__content">
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>X</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Y</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Z</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default experience

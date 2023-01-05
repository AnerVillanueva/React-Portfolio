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
                  <h4>Technical Drawing</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Industrial Computer Science</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Algebra and Calculus</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Statistical Methods of Engineering</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Material Science</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Thermal Engineering</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Applied Mechanics / Fluid Mechanics</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Industry Telecommunications</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Production and Manufacturing Systems / Production and Project Management</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Electrical, Electronic and Environmental technology</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>[ Industrial / Digital / Analogic ] Electronics [ Instrumentation / Systems ]</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Industrial Automation Control and Regulation</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Robotics</h4>
                </div>
              </article>
              <article className='education__details'>
                <BsPatchCheckFill className='education__details-icon'/>
                <div>
                  <h4>Economics and Business Administration</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default experience

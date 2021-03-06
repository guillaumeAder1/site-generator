import React from 'react'
import css from '../../config/style.json'

/**
 * Slideshow 
 * @param {Objec} props - should have 'title' and 'text' properties 
 */
const Slideshow = (props) => (

    <section style={{ backgroundColor: css.style.secBg }}>
        <div className="inner">
            <h2>{props.title}</h2>
            <h5>{props.text}</h5>
        </div>
    </section>

);

export default Slideshow;
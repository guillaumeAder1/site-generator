import React from 'react'
import css from '../../config/style.json'

/**
 * Header component
 * @param {Object} props - should have 'title' and 'text' properties 
 */
const Header = (props) => (

    <section style={{ backgroundColor: css.style.secBg }}>
        <div className="inner">
            <header className="major">
                <h2>{props.params.title}</h2>
            </header>
            <p>{props.params.text}</p>
        </div>
    </section>


);

export default Header;
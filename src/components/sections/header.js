import React from 'react'
import css from '../../config/style.json'


const Header = (props) => (

    <section style={{ backgroundColor: css.style.secBg }}>
        <div className="inner">
            <header className="major">
                <h2>{props.title}</h2>
            </header>
            <p>{props.text}</p>
        </div>
    </section>

);

export default Header;
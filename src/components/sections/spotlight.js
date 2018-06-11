import React from 'react'
import css from '../../config/style.json'



const Spotlight = (props) => (


    <section style={{ backgroundColor: css.style.secBg }}>
        <a href="generic.html" className="image">
            <img
                src="images/pic08.jpg"
                alt=""
                data-position="center center"
            />
        </a>
        <div className="content">
            <div className="inner">
                <header className="major">
                    <h3>{e.title}</h3>
                </header>
                <p>{e.text}</p>
                <ul className="actions">
                    <li>
                        <a href="generic.html" className="button">Learn more</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>





);

export default Spotlight;
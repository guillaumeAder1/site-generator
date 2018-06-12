import React from 'react'
import css from '../../config/style.json'

const item = (props) => (
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
                    <h3>{props.title}</h3>
                </header>
                <p>{props.text}</p>
                <ul className="actions">
                    <li>
                        <a href="generic.html" className="button">Learn more</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

)

const Spotlight = (props) => {

    const build = (data) => (
        <div>HELLO {data.title}</div>
    )

    for (var val in props) {
        return (build(props[val]))
    }

}
export default Spotlight; 
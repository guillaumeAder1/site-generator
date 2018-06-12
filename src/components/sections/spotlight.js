import React from 'react'
import css from '../../config/style.json'

const item = (props, i) => (
    <section key={i} style={{ backgroundColor: css.style.secBg }}>
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

    const build = (e, i) => {
        const display = (i % 2 == 0) ? 'top center' : 'center center';
        const bg = (i % 2 == 0) ? css.style.secBg : css.style.mainBg;
        return (
            <section key={i} style={{ backgroundColor: bg }}>
                <a href="generic.html" className="image">
                    <img
                        src="images/pic08.jpg"
                        alt=""
                        data-position={display}
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
        )
    }

    let list = [];
    for (var val in props) {
        list.push(props[val])
    }

    return list.map((e, i) => <div className="spotlights">{build(e, i)}</div>)

}
export default Spotlight; 
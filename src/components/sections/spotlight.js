import React from 'react'
import css from '../../config/style.json'


/**
 * 
 * @param {Array} props - List of Object, this object should have 'title' and 'text' properties  
 */
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

    // TODO: replace using reduce
    let list = [];
    for (var val in props.params) {
        list.push(props.params[val])
    }

    return (<div className="spotlights">{list.map((e, i) => build(e, i))}</div>)

}
export default Spotlight; 
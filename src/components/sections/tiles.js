import React from 'react'
import css from '../../config/style.json'


/**
 * 
 * @param {Array} props - List of Object, this object should have 'title' and 'text' properties  
 */
const Tiles = (props) => {

    const build = (e, i) => {
        const display = (i % 2 == 0) ? 'top center' : 'center center';
        const bg = (i % 2 == 0) ? css.style.secBg : css.style.mainBg;
        return (
            <article style={{ backgroundImage: "url('./assets/images/pic01.jpg')" }}>
                <span className="image" style={{ display: 'none' }}>
                    <img src="images/pic01.jpg" alt="" />
                </span>
                <header className="major">
                    <h3><a href="landing.html" className="link">Aliquam</a></h3>
                    <p>Ipsum dolor sit amet</p>
                </header>
                <a href="landing.html" className="link primary"></a>
            </article >
        )
    }

    // TODO: replace using reduce
    let list = [];
    for (var val in props) {
        list.push(props[val])
    }

    return (<div className="tiles">{list.map((e, i) => build(e, i))}</div>)

}
export default Tiles; 
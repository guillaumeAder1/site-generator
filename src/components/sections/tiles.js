import React from 'react'
import css from '../../config/style.json'
import { getRoot } from '../../config/const'


/**
 * 
 * @param {Array} props - List of Object, this object should have 'title' and 'text' properties  
 */
const Tiles = (props) => {

    const rand = () => Math.floor(Math.random() * 6) + 1

    const build = (e, i) => {
        // const display = (i % 2 == 0) ? 'top center' : 'center center';
        // const bg = (i % 2 == 0) ? css.style.secBg : css.style.mainBg;
        const imgpath = getRoot(`/assets/images/pic0${rand()}.jpg`)
        const imgpath2 = getRoot(`/asset/images/pic0${rand()}.jpg`)
        return (
            <article key={i} style={{ backgroundImage: `url('${imgpath}')` }}>
                <span className="image" style={{ display: 'none' }}>
                    <img src={imgpath2} alt="" />
                </span>
                <header className="major">
                    <h3><a href="landing.html" className="link">Aliquam</a></h3>
                    <p>Ipsum dolor sit amet</p>
                </header>
                <a href="landing.html" className="link primary"></a>
            </article >
        )
    }

    // TODO: replace using array.reduce()
    let list = [];
    for (var val in props) {
        list.push(props[val])
    }

    return (<div className="tiles">{list.map((e, i) => build(e, i))}</div>)

}
export default Tiles; 
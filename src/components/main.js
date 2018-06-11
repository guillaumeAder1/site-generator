import React, { Component } from 'react'
import css from '../config/style.json'
import Spotlight from './sections/spotlight'
import Slideshow from './sections/slideshow'
import Header from './sections/header'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            html: null
        }
    }

    lookupSpotlight(data) {
        return data.map((e, i) => {
            return <Spotlight key={i} {...e} />
        })
    }

    buildHtml(data) {
        const skeleton = Object.keys(data);
        const tmp = skeleton.map((e, i) => {
            let comp;
            if (e == 'slideshow') {
                comp = <Slideshow key={i} {...data[e]} />
            } else if (e == 'spotlight') {
                //comp = this.lookupSpotlight(data[e])
                comp = <Spotlight key={i} {...data[e]} />
            } else if (e == 'header') {
                comp = <Header key={i} {...data[e]} />
            }
            return comp
        })

        this.setState({
            html: tmp
        })

        console.log(tmp)
    }

    componentDidMount() {
        // url (required), options (optional)
        const url = `../../src/config/${this.props.config}.json`
        fetch(url, { method: 'get' })
            .then(response => response.json())
            .then(data => this.buildHtml(data))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.props.config)
        return (
            <div >
                <span className="title">
                    HELLO PAGE
                </span>

                {this.state.html}

                {/* <section
                    id="two"
                    className="spotlights"
                    style={{ paddingTop: '60px' }}
                    onClick={() => this.resetFilterPosition()}>

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
                                    <h3>Orci maecenas</h3>
                                </header>
                                <p>
                                    Nullam et orci eu lorem consequat tincidunt vivamus et
                                    sagittis magna sed nunc rhoncus condimentum sem. In
                                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a href="generic.html" className="button">
                                            Learn more
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section style={{ backgroundColor: css.style.mainBg }}>
                        <a href="generic.html" className="image">
                            <img src="images/pic09.jpg" alt="" data-position="top center" />
                        </a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Rhoncus magna</h3>
                                </header>
                                <p>
                                    Nullam et orci eu lorem consequat tincidunt vivamus et
                                    sagittis magna sed nunc rhoncus condimentum sem. In
                                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a href="generic.html" className="button">
                                            Learn more
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section style={{ backgroundColor: css.style.secBg }}>
                        <a href="generic.html" className="image">
                            <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
                        </a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>
                                    Nullam et orci eu lorem consequat tincidunt vivamus et
                                    sagittis magna sed nunc rhoncus condimentum sem. In
                                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a href="generic.html" className="button">
                                            Learn more
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>


                </section> */}
            </div>
        )
    }
}

export default Main
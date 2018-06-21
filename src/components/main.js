import React, { Component } from 'react'
import css from '../config/style.json'
import Spotlight from './sections/spotlight'
import Slideshow from './sections/slideshow'
import Header from './sections/header'
import Tiles from './sections/tiles'
import Contact from './sections/contact'
import { URL } from '../config/const'

/**
 * Main component
 * from prop.confif, will load json file, and generate HTML from it.
 * the HTML is a combination of Components defined in 'components/section/<Component>.js'
 * @prop config {String} - path to local json file 
 */
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            html: null
        }
    }
    /**
     * will instanciate Component based on JSON file.
     * evry KEY of json file should be a part of /components/section
     * @param {*Object} data - generated from a json file located in /config
     */
    buildHtml(data) {
        const skeleton = Object.keys(data);
        // const path = skeleton[0]
        // import(`./sections/${path}.js`).then(_module => {
        //     console.log(_module)
        // })
        const tmp = skeleton.map((e, i) => {
            let comp;
            if (e == 'slideshow') {
                comp = <Slideshow key={i} {...data[e]} />
            } else if (e == 'spotlight') {
                comp = <Spotlight key={i} {...data[e]} />
            } else if (e == 'header') {
                comp = <Header key={i} {...data[e]} />
            } else if (e == 'tiles') {
                comp = <Tiles key={i} {...data[e]} />
            } else if (e == 'contact') {
                comp = <Contact key={i} {...data[e]} />
            }
            return comp
        })
        this.setState({ html: tmp })
    }
    /**
     * load json file from props.config 
     */
    componentDidMount() {
        // call page config to generate HTML
        const path = this.props.config || 'page0'
        let url = `config/${path}.json`
        let prev = ''
        if (window.location.hostname !== 'localhost') {
            // url = `${URL}${url}`
            prev = 'https://guillaumeader1.github.io/site-generator/dist/'
        }
        fetch(prev + url, { method: 'get' })
            .then(response => response.json())
            .then(data => this.buildHtml(data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="wrapper">
                {this.state.html}
            </div>
        )
    }
}

export default Main
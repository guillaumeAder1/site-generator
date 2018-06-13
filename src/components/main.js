import React, { Component } from 'react'
import css from '../config/style.json'
import Spotlight from './sections/spotlight'
import Slideshow from './sections/slideshow'
import Header from './sections/header'
import Tiles from './sections/tiles'

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
     * will instanciate Component based on JSON file
     * @param {*Object} data - generated from a json file located in /config
     */
    buildHtml(data) {
        const skeleton = Object.keys(data);
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
        const url = `../../src/config/${this.props.config}.json`
        fetch(url, { method: 'get' })
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
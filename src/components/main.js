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
            <div id="wrapper">
                {this.state.html}
            </div>
        )
    }
}

export default Main
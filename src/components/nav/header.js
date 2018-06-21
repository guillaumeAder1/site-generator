import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config/conf.json'
import css from '../../config/style.json'


class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.body = document.querySelector('body');
    }
    addclassName(toggle) {
        if (toggle) {
            this.body.classList.add('is-menu-visible');
        } else {
            this.body.classList.remove('is-menu-visible');
        }
    };
    render() {
        return (
            <React.Fragment>
                <header id="header" style={{ backgroundColor: css.style.header }}>
                    <a href="" className="logo">
                        <strong>#portfolio</strong> <span>Guillaume Ader</span>
                    </a>
                    <nav>
                        <a onClick={e => this.addclassName(true)}>
                            Menu
                        </a>
                    </nav>
                </header>

                <nav id="menu" style={{ backgroundColor: css.style.mainBg }}>

                    <div className="inner">
                        <ul className="links">
                            {config.routes.map((e, i) => {
                                return <li key={i}><Link key={i} to={"/" + e.path} onClick={e => this.addclassName(false)}> {e.name} </Link></li>
                            })}
                        </ul>
                        <ul className="actions vertical">
                            <li>
                                <a href="" className="button special fit">  Get Started </a>
                            </li>
                            <li>
                                <a href="" className="button fit">Log In</a>
                            </li>
                        </ul>
                    </div>
                    <a className="close" onClick={e => this.addclassName(false)}>
                        Close
                    </a>
                </nav>
            </React.Fragment>

        )
    }
}

export default Section;
import React from 'react'
import { Route } from 'react-router-dom';
import config from '../../config/conf.json'
import Main from '../main'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Def = () => (
    <div>
        default
    </div>
);

const Section = () => (
    <React.Fragment>
        {
            config.routes.map((e, i) => {
                return <Route exact
                    key={i}
                    path={"/" + e.path}
                    render={(props) => <Main {...props} config={e.component} />} />
            })
        }
        {/* <Route exact path="/" component={Def} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" component={Home} /> */}
    </React.Fragment >
)

export default Section;
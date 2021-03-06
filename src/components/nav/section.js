import React from 'react'
import { Router, Route } from 'react-router-dom';
import config from '../../config/conf.json'
import Main from '../main'
import { withRouter } from 'react-router'


const Home = () => (
    <div>
        <h2>Home</h2>
        <h2>Home</h2>
        <h2>Home</h2>
        <h2>Home</h2>
        <h2>Home</h2>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>

    </div>
);

const Def = () => (
    <div>
        default  default default
        default
        default
        default
        default
        default
        default
        default
        default
        default

        default
    </div>
);

const Section = () => {

    return (
        <React.Fragment>
            {

                config.routes.map((e, i) => <Route
                    key={i}
                    path={"/" + e.path}
                    render={(props) => <Main {...props} config={e.component} />}
                />
                )

            }
            {/* <Route exact path="/" component={Def} />
        <Route exact path="/my-about" component={About} />
        <Route exact path="/my-home" component={Home} /> */}
        </React.Fragment >
    )
}

// export default withRouter(Section);
export default Section;
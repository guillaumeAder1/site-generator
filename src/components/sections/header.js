import React from 'react'
import css from '../../config/style.json'


const Header = (props) => (

    <section style={{ backgroundColor: css.style.secBg }}>
        <div className="inner">
            <header className="major">
                <h2>Sed amet aliquam</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
        </div>
    </section>

);

export default Header;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LinkWrapper } from '../../components';
import './Nav.scss';

const Nav = ({ items }) => (
    <nav className="Nav" aria-label="main menu">
        <ul role="menu">
            {items.map(item => (
                <li key={item.id}>
                    <LinkWrapper>
                        {item.link ? (
                            <Link to={item.to} role="menuitem">{item.text}</Link>
                        ) : (
                            <a href={item.to} role="menuitem">{item.text}</a>
                        )}
                    </LinkWrapper>
                </li>
            ))}
        </ul>
    </nav>
);

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            link: PropTypes.bool,
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Nav;

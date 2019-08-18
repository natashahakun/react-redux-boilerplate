import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Flex, LinkWrapper } from '../../components';
import './Footer.scss';

const Footer = ({ items }) => (
    <footer className="Footer">
        <Flex justifyContent="space-between">
            <p>Copyright 2019 Fair</p>
            <ul className="Footer--list">
                {items.map(item => (
                    <li key={item.id}>
                        <LinkWrapper>
                            {item.link ? (
                                <Link to={item.to}>{item.text}</Link>
                            ) : (
                                <a href={item.to}>{item.text}</a>
                            )}
                        </LinkWrapper>
                    </li>
                ))}
            </ul>
        </Flex>
    </footer>
);

Footer.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            link: PropTypes.bool,
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Footer;

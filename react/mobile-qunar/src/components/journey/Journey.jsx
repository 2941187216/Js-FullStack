import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Journey.css';

export default function Journey(props) {
    const { from, to } = props;
    return (
        <div>
            {from} {to}
        </div>
    )
}

Journey.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}
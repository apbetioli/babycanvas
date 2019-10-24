import React from 'react'

import './Quote.scss';

//TODO add a carousel

class Quote extends React.Component {
    render() {
        return (
            <blockquote className="blockquote">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        );
    }
}

export default Quote;
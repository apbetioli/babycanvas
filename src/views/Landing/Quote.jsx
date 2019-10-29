import React from 'react'

import './Quote.scss';

class Quote extends React.Component {
    render() {
        return (
            <blockquote className="blockquote">
                <i className="fa fa-quote-left"></i>
                <p className="blockquote mb-0">Ai que fofo!</p>
                <footer className="blockquote-footer">Mariana, <cite title="Source Title">Mãe do Gabriel</cite></footer>
                <i className="fa fa-quote-right"></i>
            </blockquote>
        );
    }
}

export default Quote;
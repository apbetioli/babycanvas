import React from 'react';

import { Button } from 'reactstrap';

class CreateButton extends React.Component {
    render() {
        let classes = "btn-icon mb-3 mb-sm-0" + (this.props.className || '');
        return (
            <div className="btn-wrapper">
                <Button
                    className={classes}
                    color={this.props.color || 'default'}
                    href="/create">
                    <span className="btn-inner--text">Personalizar o meu quadro</span>
                </Button>
            </div>
        );
    }
}

export default CreateButton;
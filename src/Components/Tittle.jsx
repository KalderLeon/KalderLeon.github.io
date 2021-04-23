import React, { Component } from 'react';

class Tittle extends Component {
    render(props) {
        return (
            <div className="Title">
                <h3>
                    {this.props.title}
                    <span>{this.props.span}</span>
                </h3>
            </div>
        );
    }
}

export default Tittle;

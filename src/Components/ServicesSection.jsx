import React, { Component } from 'react';

class ServicesSection extends Component {
    render(props) {
        return (
            <div className="ServicesSection">
                <div className="service">
                    <div className="service-content">
                        <img src={ this.props.image } alt=""/>
                        <h5 className="s-title">{ this.props.title }</h5>
                        <a className="s-link" href={ this.props.href } target="_blank">
                            { this.props.text}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesSection;

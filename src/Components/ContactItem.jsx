import React, { Component } from 'react';


class ContactItem extends Component {
    render(props) {
        return (
            <div className="contactItem">
                <div className="contact">
                    <div className="img-contact">
                        <img src={ this.props.icon } alt=""/>
                    </div>
                    <div className="right-items">
                        <h6>{ this.props.title }</h6>
                        <p>{this.props.text1}</p>
                        <p>{this.props.text2}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactItem;

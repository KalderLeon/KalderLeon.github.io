import React, { Component } from 'react';
import ContactItem from '../Components/ContactItem';
import Tittle from '../Components/Tittle';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <div className="c-title">
                    <Tittle title={'Контакты'} span={'Contacts'}/>
                </div>
                <div className="ContactPage">
                    <div className="map-section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d570062.8723100248!2d34.83994528688671!3d48.41553271021219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDnipro!5e0!3m2!1sru!2sua!4v1617958258595!5m2!1sru!2sua" width="400" height="300" style={{border:0}} allowFullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="contact-section">
                        <ContactItem icon={phone} text1={'+38(066) 58 70 699'} text2={'+38(097) 55 03 503'} title={'Phone'}/>
                        <ContactItem icon={email} text1={'Levchenko586@gmail.com'} text2={'HabbibC4@gmail.com'} title={'Email'}/>
                        <ContactItem icon={location} text1={'Dnipro city, Ukraine Dnipro city'} title={'Address'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;

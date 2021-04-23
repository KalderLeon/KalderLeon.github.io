import React, { Component } from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        Привет, я
                        <span> HTML Coder (верстальщик)</span>
                    </h1>
                    <p className="h-sub-text"> из Украины, г. Днепр. Создаю сайты с нуля PSD to HTML. Работаю с Figma, Photoshop. Изучаю фреймоворк React. 
                        Хочу найти профиссиональную команду в которой буду расти и развиваться как разработчик. 
                    </p>
                    <div className="icons">
                        <a className="icon-holder" target="_blank" href="https://www.linkedin.com/in/ihor-levchenko-1b024a163/">
                            <FontAwesomeIcon icon={faLinkedinIn} className="icon fb"/>
                        </a>
                        <a className="icon-holder" target="_blank" href="https://github.com/KalderLeon">
                            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </a>
                    </div>
                </header>
            </div>
        );
    }
}

export default HomePage;

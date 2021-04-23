import React, { Component } from 'react';
import avatar from '../img/avatar.jpg';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <nav className="nav">
                    <div className="profile">
                        <img src={avatar} alt=""/>
                    </div>

                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to='/' exact activeClassName="active">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' exact activeClassName="active">Обо мне</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolios' exact activeClassName="active">Портфолио</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' exact activeClassName="active">Связь со мной </NavLink>
                        </li>
                    </ul>
                    <footer className="footer">
                        <p>@2021 Levchenko</p>
                    </footer>
                </nav>
            </div>
        );
    }
}

export default NavBar;

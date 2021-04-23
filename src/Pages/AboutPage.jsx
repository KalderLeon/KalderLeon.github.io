import React, { Component } from 'react';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import SkillsSection from '../Components/SkillsSection';
import Tittle from '../Components/Tittle';
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <Tittle title={'Обо мне'} span={'About me'}/>
                <ImageSection/>
                <Tittle title={'Мои навыки'} span={'My Skills'}/>
                <div className="skillContainer">
                    <SkillsSection skill={'HTML5\\CSS'} progress={'85%'} width={'85%'}/>
                    <SkillsSection skill={'Javascript (Native, DOM)'} progress={'47%'} width={'47%'}/>
                    <SkillsSection skill={'Препроцессоры SCSS\\LESS\\SASS'} progress={'70%'} width={'70%'}/>
                    <SkillsSection skill={'React, react-router'} progress={'45%'} width={'45%'}/>
                    <SkillsSection skill={'GULP'} progress={'45%'} width={'45%'}/>
                    <SkillsSection skill={'Adobe PHOTOSHOP CS6 | FIGMA'} progress={'35%'} width={'35%'}/>
                    <SkillsSection skill={'Building cross-browser and adaptive websites'} progress={'70%'} width={'70%'}/>
                    <SkillsSection skill={'Git'} progress={'45%'} width={'45%'}/>
                </div>
                <div className="serv-title">
                    <Tittle title={'Сервисы'} span={'Services'}/>
                </div>
                <div className="services-container">
                    <ServicesSection image={ design } title={'React'} text={'Official site React.js'} href="https://ru.reactjs.org/"/>
                    <ServicesSection image={ gamedev } title={'Flexbox Froggy'} text={'Flexbox Froggy'} href="https://flexboxfroggy.com/#uk"/>
                    <ServicesSection image={ intelligence } title={'Stackowerflow'} text={'StackOverflow site'} href="https://ru.stackoverflow.com/"/>
                </div>
            </div>
        );
    }
}

export default AboutPage;

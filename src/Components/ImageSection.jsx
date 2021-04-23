import React, { Component } from 'react';
import about from '../img/about.jpg'

class ImageSection extends Component {
    render() {
        return (
            <div className="ImageSection">
                <div className="img">
                    <img src={about} alt=""/>
                </div>
                <div className="about-info">
                    <h4>Я
                        <span> HTML Coder (верстальщик)</span>
                    </h4>
                    <p className="about-text"> 
                        Свой путь в IT начинал с курсов front-end разработки в компании LevelUP. 
                        Курс длился 7,5 месяцев, на котором изучил верстку (html, css), нативный Javascript, Git, Gulp, препроцессоры Less|Sass.
                        Выполнил пару заказов на фрилансе, на данный момент хочу получить коммерческий опыт в компании и вырасти из
                        верстальщика в профи front-end разработчика. 
                    </p>
                    <div className="about-details">
                        <div className="left-section">
                            <p>Full name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                        </div>
                        <div className="right-section">
                            <p>:  Игорь Левченко</p>
                            <p>:  26</p>
                            <p>:  Украинец</p>
                            <p>:  Украинский, Русский, Английский</p>
                            <p>:  Украина, г. Днепр</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSection;

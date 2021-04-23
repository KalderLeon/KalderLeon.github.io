import React, { Component } from 'react';


class SkillsSection extends Component {
    render(props) {
        return (
            <div className="SkillsSection">
                <div className="skills-container">
                    <h5 className="skill-title">{ this.props.skill }</h5>
                    <div className="skill-bar">
                        <p className="skill-text">{ this.props.progress }</p>
                        <div className="skill-progress">
                            <div className="progress">
                                <div className="inner-pregress" style={{width:this.props.width}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsSection;

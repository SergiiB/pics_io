import React from 'react';
import s from './Intro.module.css';

const Intro = () => {
    return (
        <div className={s.introSmall}>
            <div className={s.container}>
                <h1>Pricing Guide</h1>

                <div className={s.introText}>
                    <p>You don’t need a credit card <br/> to start a 14-day free trial</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;

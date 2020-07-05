import React from 'react';
import s from './Cookies.module.css'

const Cookies = () => {
    return (
        <div className={s.cookies} style={{display: 'block'}}>
            <p><span>This site uses cookies.</span> You can read how we use them in our&ensp;
                <a href="#" className={s.cookiesLink} target="_blank" rel="noopener">cookies policy</a>.
            </p>
            <a href="#" className={s.cookiesBtn}>I accept</a>
        </div>
    )
}

export default Cookies;

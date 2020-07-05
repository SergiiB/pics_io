import React from "react";
import s from './Signup.module.css';

const Signup = () => {
    return (
        <div className={s.signupWrapper}>
            <div className={s.signupIntro}>
                <div className={s.signupTitle}>Embrace your digital content</div>
                <div className={s.signupBenefits}>
                    <div className={s.sep}></div>
                    <div>Free 14-day trial</div>
                    <div className={s.sep}></div>
                    <div>No credit card required</div>
                    <div className={s.sep}></div>
                    <div>Set up in 3 minutes or less</div>
                    <div className={s.sep}></div>
                </div>
            </div>
            <form className={s.signupForm} action="/signup" method="post">
                <div className={s.hLoginForm}></div>
                <div className={s.signupFormHolder}>
                    <div className={s.signupRow}>
                        <div className={s.signupInput}>
                            <label htmlFor={s.signupEmail1}>Your email</label>
                            <input className={s.input} type="email" name="email" placeholder="E-mail"
                                   id="signup-email1"/>
                            <div className={s.error__block}>Please enter your email</div>
                        </div>
                        <div className={s.signupInput}>
                            <label htmlFor={s.signupPassword1}>Your password</label>
                            <input type="password" name="password" placeholder="Password"
                                   id="signup-password1"/>
                            <div className={s.error__block}>Please enter your password</div>
                        </div>
                        <div className={s.signupInput}>
                            <button type="submit" className={s.btnPrimary}>Create your free account
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;

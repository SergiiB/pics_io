import React from "react";
import s from './Testimonial.module.css'

const Testimonial = () => {
    return (
        <div className={s.testimonial}>
            <blockquote>
                <q>For somebody getting in touch for the first time with classical dam-services, it is a
                    perfect starter with more than fair pricing and a 24/7 scaling option for all
                    features.</q>
                <cite>
                    <span className={s.author}>
                        <span>Benjamin Frischbier</span><br/>Art Direction<br/>SAE Institute GmbH
                    </span>
                    <span className={s.authorLogo}>
                        <picture>
                            <source srcSet="https://landing-assets.pics.io/img/picsio/client-sae-institute.webp"
                                    type="image/webp"/>
                            <source srcSet="https://landing-assets.pics.io/img/picsio/client-sae-institute.png"
                                    type="image/jpeg"/>
                            <img loading="lazy" src="https://landing-assets.pics.io/img/picsio/client-sae-institute.png"
                                 width="93" height="68" alt="SAE Institute GmbH"/>
                        </picture>
				    </span>
                </cite>
            </blockquote>
        </div>
    )
}

export default Testimonial;

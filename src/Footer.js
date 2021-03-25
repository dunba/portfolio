import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const github = <FontAwesomeIcon icon={faGithub} />


    return (
        <>
            <div className='footer-nav'>

                <div className='los'><h3></h3></div>
                <div className='ros'>
                    <div className='email'><h3 id='h3font'>Email</h3>
                        <span><a href='mailto:hello@dunba.world'>hello@dunba.world</a></span>
                    </div>

                    <div className='socials'>
                        <h3 id='h3font'>Connect</h3>
                        <ul className='icons'>
                            <li id='icongraphics'><a target='_blank' href='https://github.com/dunba'>{github}</a></li>
                            <li id='icongraphics'><a target='_blank' href='https://linkedin.com/in/dunba'>{linkedin}</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )

};
export default Footer;

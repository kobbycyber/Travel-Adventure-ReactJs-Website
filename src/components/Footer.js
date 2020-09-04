import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';
import { Button } from './Button';


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive 
                    to our 
                    best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" 
                        placeholder="Your Email" className="footer-input"></input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
                <div className="footer-links">
                    <div className="footer-link-wrapperr">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of services</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Conatct Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destination</Link>
                            <Link to='/'>Sponsership</Link>
                        </div>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to='/' className="social-logo">
                                TRVL <i className="fab fa-typo3"></i>
                            </Link>
                        </div>
                        <small className='website-rights'>TRVL  &copy;  2020</small>
                        <div className="social-icons">
                            <Link 
                                className="social-icon-link facebook"
                                to="/"
                                target='_blank'
                                arial-label='Facebook'
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link 
                                className="social-icon-link instagram"
                                to="/"
                                target='_blank'
                                arial-label='Instagram'
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link 
                                className="social-icon-link linkedin"
                                to="/"
                                target='_blank'
                                arial-label='LinkedIn'
                            >
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Footer

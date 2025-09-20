import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <Fragment>
            <footer className={`${styles.footerWrapper} `}>




                <div className="position-relative">


                    <Container fluid="xxl" className="px-4 px-md-5">
                        <Row className="pt-5 pb-3 gx-5">
                            <Col xs={6} md={2}>
                                <h5 className={styles.footerTitle}>About Us</h5>
                                <ul className={styles.AboutUl}>
                                    <li>Velit officia aliqua anim in </li>
                                    <li>dolore velit adipisicing </li>
                                    <li>occaecat pariatur dolor </li>
                                    <li>nostrud consequat. Proident</li>
                                    <li>anim consectetur anim dolor</li>
                                    <li>cupidatat dolor. Amet ipsum</li>
                                    <li>proident eu voluptate cillum </li>
                                    <li>deserunt</li>
                                </ul>
                            </Col>

                            <Col xs={6} md={2}>
                                <h5 className={styles.footerTitle}>Start Planning</h5>
                                <ul className={styles.footerList}>
                                    <li>Search By Vendor</li>
                                    <li>Search By City</li>
                                    <li>Top Rated Vendors</li>
                                    <li>Destination Wedding</li>
                                </ul>
                            </Col>

                            <Col xs={6} md={2}>
                                <h5 className={styles.footerTitle}>Categories</h5>
                                <ul className={styles.footerList}>
                                    <li>Photographers</li>
                                    <li>Venue</li>
                                    <li>Bride special</li>
                                    <li>Wedding Planner</li>
                                    <li>Caterers</li>
                                    <li>Make up artists</li>
                                    <li>Music & Entertainment</li>
                                    <li>Mehndi Artists</li>
                                    <li>Jewelry</li>
                                    <li>Rental Dresses</li>
                                </ul>
                            </Col>

                            <Col xs={6} md={2}>
                                <h5 className={styles.footerTitle}>Photo Gallery</h5>
                                <ul className={styles.footerList}>
                                    <li>Bridal Wear</li>
                                    <li>Wedding Jewellery</li>
                                    <li>Bridal Makeup & Hair</li>
                                    <li>Wedding Decor</li>
                                    <li>Wedding Photography</li>
                                    <li>Groom Wear</li>
                                    <li>Invitations & Favors</li>
                                    <li>Wedding Accessories</li>
                                    <li>Mehndi Designs</li>
                                </ul>
                            </Col>

                            <Col xs={6} md={2}>
                                <h5 className={styles.footerTitle}>Home</h5>
                                <ul className={styles.footerList}>
                                    <li>About WedMeGood</li>
                                    <li>Careers</li>
                                    <li>Contact Us</li>
                                    <li>Site Map</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Cancellation Policy</li>
                                </ul>
                            </Col>

                            <Col xs={12} md={2} className="text-md-start">
                                <h5 className={styles.footerTitle}>INSTAGRAM</h5>
                                <div className={styles.instaContainer}>
                                    <div className={styles.instaGrid}>
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <img
                                                key={i}
                                                src={`/Images/insta${i}.png`}
                                                alt={`Insta ${i}`}
                                                width={60}
                                                height={60}
                                                className="img-fluid"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className={styles.footerBottomRow}>
                        <Row>
                            <Col className="text-center">
                                <p className={`${styles.CopyRight} "mb-0 py-2 text-white"`}>
                                    Copyright © 2025 Designed by ThemeFTC. All Rights Reserved.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{ position: "relative" }}>
                    <div className="flower flower-left">
                        <img
                            src="/Images/Beauti_Flower1.png"
                            alt="Side Flower"
                            width={554}
                            height={308}
                            style={{ opacity: "0.17" }}
                        />
                    </div>
                </div>

                <style jsx>{`
            .flower {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 0;
              pointer-events: none;
            }
    
            .flower-left {
              left: -300px;
              transform: rotate(-90deg) translateY(15%) translateX(65%) scaleX(-1);
            }
    
            // .flower-right {
            //   right: -500px;
            //   transform: rotate(-90deg) translateY(-25%) translateX(55%) scaleY(-1);
            // }
    
            @media (max-width: 992px) {
              .card-img-wrapper {
                max-width: 240px;
              }
              .card-desc {
                font-size: 18px;
              }
              .join-btn {
                height: 50px;
                font-size: 16px;
              }
              .flower-left,
              .flower-right {
                display: none;
              }
            }
          `}</style>
            </footer>

        </Fragment>
    );
};

export default Footer;

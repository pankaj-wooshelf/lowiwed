// ExclusiveBenefitsSection.js
import { Container, Row, Col, Button } from 'react-bootstrap';

import styles from '../../styles/Home.module.css';
import styles12 from '../../styles/whyJoinNow.module.css';

const MemberBenifit = () => {
    const cards = [
        {
            id: 1,
            title: 'For Bride/Couples',
            img: '/Images/Queen_Leady.png',
            descLines: [
                '"Pre‑Launch Special Access"',
                '"First 500 Couples Get €100 Booking Credit"',
                '"Early Access to Exclusive Vendor Deals"',
            ],
        },
        {
            id: 2,
            title: 'For Businesses/Vendors',
            img: '/Images/Queen_Leady.png',
            descLines: [
                '"Early Bird Vendor Benefits"',
                '"Free Premium Listing for First 3 Months"',
                '"Join Before Launch – Get Featured Placement"',
            ],
        },
    ];

    return (
        <div className={`${styles.sectionWrapper} mt-5`}>
            <Container className='px-5'>
                <div className={`${styles.benefitsSection} px-5`}>
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={180}
                        height={73}
                    />
                    <h2 className={styles.benefitsTitle}>
                        <span className={styles.line}></span>
                        Exclusive Member Benefits
                        <span className={styles.line}></span>
                    </h2>
                </div>

                <Row className={`${styles.Row1H}justify-content-between`}>
                    {/* Bride/Couples Card */}
                    <Col xs={12} md={6} className="mb-4">
                        <h5 className={styles.cardTitle} style={{ fontSize: "20px" }}>For Bride/Couples</h5>
                        <div className={styles.cardWrapper}>
                            <div className={styles.imageBox}>
                                <img
                                    src="/Images/Queen_Leady.png"
                                    alt="Bride"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.contentBox}>

                                <ul className={styles.benefitsList}>
                                    <li><span className={styles.bgList}></span> Exclusive Access to Vendor Deals</li>
                                    <li><span className={styles.bgList}></span> €100 Booking Credit Giveaways</li>
                                    <li><span className={styles.bgList}></span> Priority Access to New Features</li>
                                </ul>
                                <Button className={styles.registerBtn}>Registered Now</Button>
                            </div>
                        </div>
                    </Col>

                    {/* Businesses/Vendors Card */}
                    <Col md={6} className="mb-4">
                        <h5 className={`${styles.cardTitle}`} style={{ fontSize: "20px" }}>For Businesses/Vendors</h5>
                        <div className={`${styles.cardWrapper}`}>
                            <div className={styles.imageBox}>
                                <img
                                    src="/Images/Queen_Leady.png"
                                    alt="Vendor"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.contentBox}>

                                <ul className={styles.benefitsList}>
                                    <li><span className={styles.bgList}></span> Featured Vendor Opportunities</li>
                                    <li><span className={styles.bgList}></span> Premium Listing Perks</li>
                                    <li><span className={styles.bgList}></span> Priority Access to New Features</li>
                                </ul>
                                <Button className={styles.registerBtn}>Registered Now</Button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className={`justify-content-between ${styles12.cardRow} ${styles.Row2}`}>
                    {cards.map((card, idx) => (
                        <Col
                            key={card.id}
                            xs={12}
                            md={5}
                            className={`d-flex align-items-center justify-content-center mb-4`}
                        >
                            <div className={styles12.cardWrapper}>
                                <div className={styles12.cardBody}>
                                    <h2 className={styles12.cardHeading}>{card.title}</h2>
                                    <div className={styles12.cardImgWrapper}>
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            width={210}
                                            height={250}
                                            className={styles12.cardImage}
                                        />
                                    </div>
                                    {card.descLines.map((line, i) => (
                                        <p key={i} className={styles12.cardDesc}>{line}</p>
                                    ))}
                                    <Button
                                        className={styles12.joinBtn}
                                        onClick={() => setActiveModal(card.id === 1 ? 'individual' : 'vendor')}
                                    >
                                        Registered Now
                                    </Button>
                                </div>
                            </div>
                        </Col>

                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default MemberBenifit;

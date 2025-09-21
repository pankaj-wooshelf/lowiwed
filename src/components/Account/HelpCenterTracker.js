import React from 'react'
import { Row, Col, Card, Button, } from 'react-bootstrap';
import styles from '../../styles/YourAccount/Allorder.module.css';
import stylesM from '../../styles/YourAccount/HelpCenter.module.css'
import { FaStar } from 'react-icons/fa';


const HelpCenterTracker = () => {
    return (
        <>
            <Row>
                <Card className={stylesM.CardForTrackCancel}>
                    <div className='d-flex gap-2 justify-content-center align-items-center'>
                        <img src="/Icons/shopping-bag.png" alt="" width={30} height={30} style={{ objectFit: "cover", color: "#878787" }} />
                        <div className={stylesM.TractContentMain}>
                            <h4 className={stylesM.HeaderNameTrack}>TRACK, CANCEL, RETURN/EXCHANGE</h4>
                            <p className={stylesM.manageYourPurchases}>Manage your purchases</p>
                        </div>
                    </div>


                    <Button className={stylesM.OrdersBtnH}>ORDERS</Button>
                </Card>
            </Row>

            <Row className={`${styles.mainDivForContainerboxN} mt-4`}>
                <Card className={`mb-4 py-2 ${styles.orderCard}`}>
                    <Row>
                        <Row>
                            <div className="d-flex align-items-center mb-2">
                                <span className={styles.statusIcon}></span>
                                <img src="/Icons/package.png" alt="asdf" width={20} height={20} />
                                <div className={styles.DeleverMain}>
                                    <span className={`${styles.statusText} ms-2`}>Delivered</span>
                                    <span className={`${styles.delevermaindata} ms-2`}>On Sat, 7 Jun</span>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col md={7}>
                                <Row className={styles.orderDetaolsMain}>
                                    <Col md="4" className='d-flex align-item-center py-4'>
                                        <img src="/Images/Makeup.jpg" alt="" width={141} height={166} className={stylesM.imageMakeup} />
                                    </Col>
                                    <Col className='text-start'>
                                        <span className={`${styles.forRoseGoldHM} Inter400`}>Rose Gold Bridal Lehenga</span>
                                        <p className={styles.pargraphContent} >
                                            Lorem adipisicing cupidatat aute consectetur sunt sunt mollit ex id esse reprehenderit anim ullamco labore. Aliquip velit ipsum officia ex amet deserunt aute magna magna sint dolor culpa consequat eu. Aute nulla adipisi
                                        </p>
                                        <p className={`${styles.pargraphContent} mb-1`}>Size: 32</p>
                                        <p className={`${styles.pargraphContent2} mb-1`}>Order ID: #ORD20240520</p>
                                        <p className={`${styles.pargraphContent2} mb-1`}>Category: Bridal Dress &gt; Lehenga  </p>
                                        <p className={`${styles.pargraphContent2} mb-1`}>Quantity: 1</p>
                                    </Col>
                                </Row>
                                <p className={styles.vendorLink}>Rate & Review to <span>sun.butterfly coins</span></p>
                            </Col>

                            <Col md={5}>
                                <div className={`${styles.forRightSideContentFixMian2} px-3 py-1`}>

                                    <div className={`${styles.orderDetailC} text-start`}>
                                        <p className="mb-1">Ordered From: Blush Couture (Vendor Name)</p>
                                        <p className="mb-1">Total Paid: <strong>₹750</strong></p>
                                        <p className="mb-1">Status: ✅<span className={styles.statusDelivered}>Delivered</span></p>
                                        <div className={styles.stars}>
                                            <FaStar className={styles.forStarRatingNow} />
                                            <FaStar className={styles.forStarRatingNow} />
                                            <FaStar className={styles.forStarRatingNow} />
                                            <FaStar className={styles.forStarRatingNow} />
                                            <FaStar className={styles.forStarRatingNow} />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <Button variant="link" className={styles.linkBtn}>Return / Exchange</Button>
                                        <Button variant="link" className={styles.linkBtn}>View Details</Button>
                                    </div>

                                </div>
                            </Col>
                            <div className='swiper-button-next-custom2 fs-1'></div>
                        </Row>
                    </Row>
                </Card>
            </Row>

            {/* <Row>
        <div className={stylesM.contactusMainCon}>
            <p className={stylesM.headingContact}>Contact Us <span className={stylesM.paragraphcontactqueries}>
                Contact Us Hi Divya Singh, let us help you with your queries
            </span></p>
            
        </div>
        <div className={stylesM.cardMC}>
            <Card className={stylesM.card1}>Chat with us</Card>
            <Card className={stylesM.card2}>Call Us</Card>
        </div>
        </Row> */}
        </>

    )
}

export default HelpCenterTracker

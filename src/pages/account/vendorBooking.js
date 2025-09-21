import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import styles from '../../styles/YourAccount/Allorder.module.css';
import { BiSearchAlt } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';

// import RactangleImg from '../../../public/Icons/Ractangle'

const VendorBooking = () => {
    return (
        <div className='mt-5'>
            <div className={`${styles.forHeadAndFiterinputMain} mb-3`}>
                <div md={6}>
                    <h4 className={styles.heading}>All Orders</h4>
                </div>
                <div md={6} className="text-md-end d-flex justify-content-end align-items-center gap-2">
                    <div className='d-flex'>
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            className={`${styles.searchInput}`}
                        />
                        <Button className={styles.Searchbtn}><BiSearchAlt />
                        </Button>
                    </div>
                    <Button variant="light" className={styles.filterBtn}>
                        <i className="bi bi-sliders"></i> Filters
                    </Button>
                </div>
                {/* <hr /> */}
            </div>
            <Container className={styles.allOrdersContainer}>
                {/* Header Row */}

                {/* Order Cards */}
                {[1, 2, 3].map((_, index) => (
                    <Card key={index} className={`mb-4 py-2 px-3 ${styles.orderCard}`}>
                        <Row>
                            <Row>
                                <div className="d-flex align-items-center mb-2">
                                    <span className={styles.statusIcon}></span>
                                    <img src="/Icons/package.png" alt="asdf" width={20} height={20} />
                                    <div className={styles.DeleverMain}>
                                        <span className={`${styles.statusText2} ms-2`}>Booking Date</span>
                                        <span className={`${styles.delevermaindata} ms-2`}>12 June 2024</span>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <Row className={styles.orderDetaolsMain}>
                                        <Col md="4">
                                        </Col>
                                        <Col className='text-start'>
                                            <span className={`${styles.forRoseGoldHM} Inter400`}>Lens Story Studios <i className={`${styles.locationHBC} bi bi-geo-fill`}></i>  Amsterdam</span>
                                            <div className={styles.forPargraphMianHBL}>
                                                <span className={styles.pargraphContent} >
                                                    Lorem adipisicing cupidatat aute consectetur sunt sunt mollit ex id esse reprehenderit anim ullamco labore. Aliquip velit ipsum officia ex amet deserunt aute magna magna sint dolor culpa consequat eu. Aute nulla adipisi              </span>
                                                <span className={`${styles.pargraphContent} mb-1`}>Booking ID: #PHO20240612</span>
                                            </div>
                                            <div className={`${styles.forOrderAndLehngaMian} my-1`}>
                                                <span className={`${styles.pargraphContent2} `}>Service Type: Pre-Wedding + Candid Photography</span>
                                                <span className={`${styles.pargraphContent2}`}>Booked For: Bride & Groom Shoot</span>
                                                <span className={`${styles.pargraphContent2}`}>Package: Premium | 2 Days | 500+ Edited Photos</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className={styles.vendorLink}>Rate & Review to <span>sun.butterfly.souls</span></p>
                                </Col>

                                <Col md={5}>
                                    <div className={`${styles.forRightSideContentFixMian} px-3 py-1 mt-2`}>

                                        <div className={`${styles.orderDetailC} text-start`}>
                                            <p className="mb-1">Lens Story Studios <i className={`${styles.locationHBC} bi bi-geo-fill`}></i> Amsterdam  </p>
                                            <p className={`${styles.statusAndO} mb-1`}>Total Paid  : <strong>₹750</strong></p>
                                            <p className={`${styles.statusAndO} mb-1`}>Status : <span className={styles.statusDelivered}> ✅ Completed</span></p>
                                            <div className={styles.stars}>
                                                <FaStar className={styles.forStarRatingNow} />
                                                <FaStar className={styles.forStarRatingNow} />
                                                <FaStar className={styles.forStarRatingNow} />
                                                <FaStar className={styles.forStarRatingNow} />
                                                <FaStar className={styles.forStarRatingNow} />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <Button variant="link" className={styles.linkBtn}>Invoice</Button>
                                            <Button variant="link" className={styles.linkBtn}>View Details</Button>
                                        </div>

                                    </div>
                                </Col>

                                <div className='swiper-button-next-custom2 fs-1'></div>
                            </Row>
                        </Row>
                    </Card>
                ))}

            </Container>
        </div>
    );
};

export default VendorBooking;

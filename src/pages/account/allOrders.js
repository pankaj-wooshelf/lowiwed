import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import styles from '../../styles/YourAccount/Allorder.module.css';
import { BiSearchAlt } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';
import Header from '@/common/Header';
import Navbar from '@/common/Navbar';
import ProfileSidebar from '@/components/Account/ProfileSidebar';

// import RactangleImg from '../../../public/Icons/Ractangle'

const AllOrders = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="d-flex gap-4  px-5">
                {/* Sidebar component */}
                <ProfileSidebar />
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
                                        <div className="d-flex align-items-center mb-1">
                                            <span className={styles.statusIcon}></span>
                                            <img src="/Icons/package.png" alt="asdf" width={20} height={20} />
                                            <div className={styles.DeleverMain}>
                                                <span className={`${styles.statusText} ms-2`}>Delivered</span>
                                                <span className={`${styles.delevermaindata} ms-2`}>On 5th Jul, 7 AM</span>
                                            </div>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col md={7}>
                                            <Row className={styles.orderDetaolsMain}>
                                                <Col md="4">
                                                </Col>
                                                <Col className='text-start'>
                                                    <span className={`${styles.forRoseGoldHM} Inter400`}>Rose Gold Bridal Lehenga</span>
                                                    <div className={styles.forPargraphMianHBL}>
                                                        <span className={styles.pargraphContent} >
                                                            Lorem adipisicing cupidatat aute consectetur sunt sunt mollit ex id esse reprehenderit anim ullamco labore. Aliquip velit ipsum officia ex amet deserunt aute magna magna sint dolor culpa consequat eu. Aute nulla adipisi
                                                        </span>
                                                        <span className={`${styles.pargraphContent}`}>Size: M</span>
                                                    </div>
                                                    <div className={`${styles.forOrderAndLehngaMian} my-1`}>
                                                        <span className={`${styles.pargraphContent3} `}>Order ID: 123456789456</span>
                                                        <span className={`${styles.pargraphContent3} `}>Category: Bridal Dress • Lehenga</span>
                                                        <span className={`${styles.pargraphContent3}`}>Quantity: 1</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className={styles.vendorLink}>Rate & Review to <span>sun.butterfly.souls</span></p>
                                        </Col>

                                        <Col md={5}>
                                            <div className={`${styles.forRightSideContentFixMian} px-3 py-1`}>

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
                        ))}


                    </Container>
                </div>
            </div>
        </>
    );
};

export default AllOrders;

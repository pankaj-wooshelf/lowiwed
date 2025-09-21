import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from '../../styles/VenueSection/Promotion.module.css';
import { LuPyramid } from 'react-icons/lu';
import { FaLocationPin } from 'react-icons/fa6';
import { MdOutlineBoy } from 'react-icons/md';
import { FaCalendarAlt, FaHeart } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import styles123 from '../../styles/VenueSection/herosec.module.css'
import styleHeder from '../../styles/LandingPage.module.css'
import { IoIosStar } from 'react-icons/io';
import { IoCheckboxSharp } from 'react-icons/io5';
import { PiUsersThreeBold } from 'react-icons/pi';

const SimilarWedding = () => {
    const dummyData = Array(3).fill({
        title: "Luxury Resort | Destination Wedding",
        price: "$17k - $40",
        image: "/Images/Venus_Delhi.png",
        vendor: "Royal Orchid Resort, Amsterdam",
        location: "Amsterdam, UK",
        rating: 4.8,
        reviews: 122,
        guests: "25 to 2000",
    });

    return (
        <section className={`${styles.mainContainerPromo}`}>
            <div className={styles.featuredSection}>
                <Container>
                    {/* Header */}
                    <div className={`${styleHeder.benefitsSection}  `}>
                        <img
                            className={styleHeder.flowerImg}
                            src="/Images/Beauti_Flower1.png"
                            alt="Side Flower"
                            width={180}
                            height={70}
                        />
                        <h2
                            className={`${styleHeder.benefitsTitle} ${styles.benefitTitle2} mb-2`}
                            style={{ fontSize: "20px" }}
                        >
                            <span className={styleHeder.line}></span>
                            Find the best place for your wedding
                            <span className={styleHeder.line}></span>
                        </h2>
                    </div>
                    <h2 className={`${styles.heading} Adamina400`}>
                        Brows Similar Wedding Venues
                    </h2>

                    {/* <div className={styles.filtersWrapper}> */}
                    {/* <Button className={`${styles.filterBtn} ${styles.active}`}>California</Button>
          <Button className={styles.filterBtn}>Netherland</Button>
          <Button className={styles.filterBtn}>Singapore</Button>
          <Button className={styles.filterBtn}>India</Button>
          <Button className={styles.filterBtn}>New York</Button> */}

                    {/* </div> */}

                    <Row className='d-flex justify-content-center'>
                        {dummyData.map((item, index) => (
                            <Col key={index} lg={3} md={4} sm={4} xs={12} className="mb-4">
                                <Card className={`${styles123.card} h-100`}>
                                    <div className={`${styles123.badge}`}>
                                        <IoIosStar />
                                        5.0(22)</div>

                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        className={styles123.cardImg}
                                    />
                                    <div className={styles123.heartIcon}>
                                        <FaHeart className={styles123.heartI} />
                                    </div>
                                    <Card.Body className="p-0">
                                        <div className='p-2'>
                                            <Card.Title className={styles123.cardTitle}>
                                                {item.title}
                                            </Card.Title>
                                            <Card.Text className={styles123.price}>
                                                <IoIosStar className={styles123.starHY} />
                                                Rating {item.rating}(<span>{item.reviews} reviews</span>)
                                            </Card.Text>
                                            <Card.Text className={styles123.price}>
                                                <FaCalendarAlt className={styles123.CalenderH} /> Availability Check
                                            </Card.Text>
                                            <Card.Text className={styles123.price}>
                                                <IoCheckboxSharp className={styles123.checkmark} />
                                                Instant Booking
                                            </Card.Text>
                                        </div>

                                        {/* <hr className={styles123.divider} /> */}
                                        <div className={styles123.insideHrline}>
                                            <Card.Text className={styles123.price2}>
                                                <RiMoneyDollarCircleLine className={styles123.dollerIcon} /> {item.price}
                                            </Card.Text>
                                            <Card.Text className={`${styles123.price2} Adamina400`}>
                                                {/* <RiMoneyDollarCircleLine /> */}
                                                <PiUsersThreeBold className={styles123.humanIcon} />
                                                {item.guests}
                                            </Card.Text>
                                        </div>
                                        {/* <hr className={styles123.divider} /> */}

                                        <div className={`${styles123.forShareAndprofileofUser} px-2 py-1`}>

                                            <div className="d-flex gap-2 align-items-center">
                                                <img
                                                    src="/Images/SmileGirl.png"
                                                    alt="Avatar"
                                                    width={32}
                                                    height={32}
                                                    className={`${styles123.ImageProfi} rounded-circle`}
                                                />
                                                <div>
                                                    <div className={styles123.businessName}>
                                                        {item.vendor}
                                                    </div>
                                                    <div className={styles123.location}>
                                                        <span>
                                                            {/* <FaLocationPin /> */}
                                                            <i class="bi bi-geo-alt"></i>
                                                            Amsterdam,
                                                        </span>
                                                        UK
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles123.shareBtn}>
                                                <LuPyramid className={styles123.shareCl} />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>


                </Container>
            </div>
        </section>
    );
};

export default SimilarWedding;

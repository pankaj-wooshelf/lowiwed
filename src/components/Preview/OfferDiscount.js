import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from '../../styles/VenueSection/Promotion.module.css';
import { LuPyramid } from 'react-icons/lu';
import { FaHeart } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import styles123 from '../../styles/VenueSection/herosec.module.css'
import { IoIosStar } from 'react-icons/io';
import { IoCheckboxSharp } from 'react-icons/io5';
import { PiUsersThreeBold } from 'react-icons/pi';
const OfferDiscount = ({ deal }) => {
    const dummyData = Array(1).fill({
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
        <Container>
            <div>
                <h4 className='Adamina400 mb-4' style={{ fontSize: "24px", color: "#9095A0" }}>Offers/Discounts</h4>
            </div>
            <Row className=''>
                {deal.map((item, index) => (
                    <Col key={index} lg={3} md={4} sm={4} xs={12} className="mb-4">
                        <Card className={`${styles123.card} h-100`}>
                            <div className={`${styles123.badge}`}>
                                <IoIosStar />{item?.product?.rating.toFixed(1)} <span>({item?.product?.reviews_count})</span></div>

                            <Card.Img
                                variant="top"
                                src={`https://lowiwed-api.wooshelf.com/${item.
                                    product.images[0].image
                                    }`}
                                className={styles123.cardImg}
                            />
                            <div className={styles.ButtonOffer}>
                                <button className={styles.OfferDetails}>
                                    Exclusive Offer upto {item.discount_percentage} %
                                </button>
                            </div>


                            <div className={styles123.heartIcon}>
                                <FaHeart className={styles123.heartI} />
                            </div>
                            <Card.Body className="p-0">
                                <div className='p-2'>
                                    <Card.Title className={styles123.cardTitle}>
                                        {item.product.product_service_info}
                                    </Card.Title>
                                    <Card.Text className={styles123.price}>
                                        <IoIosStar className={styles123.starHY} />
                                        Rating {item.
                                            product.rating.toFixed(1)}(<span>{item.product.reviews_count} reviews</span>)
                                    </Card.Text>
                                    {/* <Card.Text className={styles123.price}>
                                                             <FaCalendarAlt className={styles123.CalenderH}/> Availability Check 
                                       </Card.Text> */}
                                    <Card.Text className={styles123.price}>
                                        <IoCheckboxSharp className={styles123.checkmark} />
                                        Instant Booking
                                    </Card.Text>
                                </div>

                                {/* <hr className={styles123.divider} /> */}
                                <div className={styles123.insideHrline}>
                                    <Card.Text className={styles123.price2}>
                                        <RiMoneyDollarCircleLine className={styles123.dollerIcon} /> {item.product.price}
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
                                                    {item.location}
                                                </span>

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
    )
}

export default OfferDiscount

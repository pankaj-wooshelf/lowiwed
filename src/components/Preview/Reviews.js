import React, { useState } from "react";
import { Container, Row, Col, Button, ProgressBar, Spinner } from "react-bootstrap";
import styles from "../../styles/VenueDetails/Review.module.css";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviewsD, product, loading }) => {
    const [ratings, setRatings] = useState([
        { label: "Quality of service", value: 4.9 },
        { label: "Average response time", value: 4.9 },
        { label: "Professionalism", value: 4.9 },
        { label: "Value", value: 4.9 },
        { label: "Flexibility", value: 4.9 },
    ]);

    const handleChange = (index, newValue) => {
        const updated = [...ratings];
        updated[index].value = parseFloat(newValue).toFixed(1);
        setRatings(updated);
    };
    return (
        <>
            <Container className="py-5">
                <Row className="mb-2">
                    <div className={styles.Reviewpart}>
                        <p className="my-1 Inter400">Reviews (<span>{product?.product?.rating_count ?? 0}</span>)</p>
                    </div>
                </Row>


                <Row className={`${styles.mainContainerRow} py-4`}>
                    <div className={styles.forRevieButtonWriteMain}>
                        <div>
                            <h5 className={styles.reviewHeading}>Reviews (<span>{product?.product?.rating_count ?? 0}</span> reviews)</h5>
                        </div>

                        <div className="">
                            <Button className={`${styles.writeReviewBtn} Inter400`}>Write a Review</Button>
                        </div>
                    </div>

                    <Row className={styles.RowMainofTheRatingH}>
                        <Col md={3} className={styles.forRatingBoxHB}>
                            <p className={styles.forratingNumberMainH}>
                                <span className={`${styles.RatingNumber} Adamina400`}>{product?.product?.rating.toFixed(1) ?? "0.0"}</span>
                                <span className={`${styles.RatingOutOf} Adamina400`}>
                                    out of 5.0
                                </span>
                            </p>

                            {/* <p
                className={`${styles.RatingRatingsN} Adamina400 d-flex flex-row`}
              >
                <FaStar className={styles.FaStarForRaingN}/>
                <FaStar className={styles.FaStarForRaingN}/>
                <FaStar className={styles.FaStarForRaingN}/>
                <FaStar className={styles.FaStarForRaingN}/>
                <FaStar className={styles.FaStarForRaingNTwo}/>
              </p> */}
                            <p className={`${styles.RatingRatingsN} Adamina400 d-flex flex-row`}>
                                {[...Array(5)].map((_, i) => {
                                    const rating = product?.product?.rating ?? 0; // fallback 0
                                    return (
                                        <FaStar
                                            key={i}
                                            className={
                                                i < Math.floor(rating)
                                                    ? styles.FaStarForRaingN // full star
                                                    : i < Math.round(rating)
                                                        ? styles.FaStarForRaingN // half star ke liye same class ya alag
                                                        : styles.FaStarForRaingNTwo // empty star
                                            }
                                        />
                                    );
                                })}
                            </p>

                        </Col>

                        <Col md={9} className={styles.rightBox}>
                            <p className={styles.recommend}>
                                Recommended by <strong>97% of couples</strong>
                            </p>

                            {/* First Row (3 ratings) */}
                            <Row>
                                {ratings.slice(0, 3).map((item, index) => (
                                    <Col md={4} key={index} className="mb-4">
                                        <div className={styles.ratingItem}>
                                            <span className={styles.label}>{item.label}</span>

                                            <div className={styles.sliderWrapper}>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="5"
                                                    step="0.1"
                                                    value={item.value}
                                                    onChange={(e) => handleChange(index, e.target.value)}
                                                    className={styles.rangeSlider}
                                                    style={{
                                                        background: `linear-gradient(to right, #E7BC73 ${(item.value / 5) * 100
                                                            }%, #CFD2DA ${(item.value / 5) * 100}%)`,
                                                    }}
                                                />

                                                <span className={styles.value}>{item.value}</span>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            {/* Second Row (2 ratings) */}
                            <Row>
                                {ratings.slice(3, 5).map((item, index) => (
                                    <Col md={4} key={index + 3} className="mb-4">
                                        <div className={styles.ratingItem}>
                                            <span className={styles.label}>{item.label}</span>
                                            <div className={styles.sliderWrapper}>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="5"
                                                    step="0.1"
                                                    value={item.value}
                                                    onChange={(e) => handleChange(index + 3, e.target.value)}
                                                    className={styles.rangeSlider}
                                                    style={{
                                                        background: `linear-gradient(to right, #E7BC73 ${(item.value / 5) * 100
                                                            }%, #CFD2DA ${(item.value / 5) * 100}%)`,
                                                    }}
                                                />
                                                <span className={styles.value}>{item.value}</span>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                                {/* Empty col for alignment */}
                                <Col md={4}></Col>
                            </Row>
                        </Col>
                        <div></div>
                    </Row>
                </Row>

            </Container>


            <section>

                {loading && (
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}

                {!loading && reviewsD && reviewsD.length > 0 && (
                    reviewsD.map((review, index) => (
                        <div key={index} className={`${styles.imageForReview} mt-4`}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <img
                                    src={`https://lowiwed-api.wooshelf.com/${review.buyer.profile_picture}`}
                                    alt="Reviewer"
                                    className={styles.reviewerImage}
                                />
                                <span className={`${styles.paulina} mt-3`}>
                                    {review.buyer.full_name || "Anonymous"}
                                </span>
                                <span className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={
                                                i < review.rating
                                                    ? styles.starforpulinSt
                                                    : styles.starforpulinSttwo
                                            }
                                        />
                                    ))}
                                </span>
                            </div>

                            <div className="position-relative d-flex justify-content-center">
                                <p className={`${styles.ReviewComment} mt-4`}>
                                    {review.review}
                                </p>
                            </div>
                        </div>
                    ))
                )}

                {!loading && reviewsD && reviewsD.length === 0 && (
                    <p className="text-center my-4">No reviews yet.</p>
                )}


            </section>
        </>
    );
};

export default Reviews;

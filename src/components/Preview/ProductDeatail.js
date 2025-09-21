import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import styles from "../../styles/VenueDetails/venueDetail.module.css";
import { ImLocation2 } from "react-icons/im";
import { FiShare2 } from "react-icons/fi";
import { FaHeart, FaStar } from "react-icons/fa";
import FAQ from "@/common/FAQ";
import { FaPlateWheat } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";



const ProductDeatail = ({ product, gallery, faq }) => {

    return (
        <Container className={`${styles.venueDetailWrapper} mt-5 px-3`}>
            <Row>
                {/* Left side: large image and right collage */}
                <Col md={7}>
                    <Row>
                        {/* Left large image */}
                        <Col md={7}>
                            <img
                                src="/Images/venueDetail1img.png"
                                alt="Main Venue"
                                className={styles.mainImage}
                            />
                        </Col>

                        {/* Right collage */}
                        <Col md={5} className="position-relative">
                            <div className={styles.heartIcon}>
                                <FaHeart className={styles.heartI} />
                            </div>

                            <div className={styles.ViewAll}>
                                <p className={`${styles.ViewP}`}>View All 36</p>
                            </div>
                            <Row>
                                <Col xs={6} className={styles.rightSmallImageWrapper}>
                                    <img
                                        src="/Images/venueDetail2img.png"
                                        alt="Venue 2"
                                        className={styles.subImage}
                                    />
                                </Col>
                                <Col xs={6} className={styles.rightSmallImageWrapper}>
                                    <img
                                        src="/Images/venueDetail3img.png"
                                        alt="Venue 3"
                                        className={styles.subImage}
                                    />
                                </Col>
                                <Col xs={12} className={styles.rightLargeImageWrapper}>
                                    <img
                                        src="/Images/venueDetail4img.png"
                                        alt="Venue 4"
                                        className={styles.subImage}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/* Right detail section */}
                <Col md={5} className={styles.detailRightCol}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h2 className={`${styles.title} Adamina400`}>{product.seller && product?.seller?.business_name}</h2>

                            <div className={styles.forlocationandNames}>
                                <div className={styles.forlocatioMain}>
                                    <ImLocation2 className={styles.locationIcon} />
                                </div>
                                <div className={`${styles.address} Adamina400`}>
                                    <span>{product?.seller_brand?.city} , {product?.seller_brand?.country} </span>
                                    <span>{product?.seller_brand?.address_line1}</span>
                                </div>
                                {/* <p className={`${styles.location} Adamina400`}>
 Amsterdam, UK</p>
  <p className={`${styles.address} Adamina400 px-3`}>645 West Street, Atlanta, GA 30301</p> */}
                            </div>
                        </div>
                        <div className={`${styles.profileRow} d-flex flex-column`}>
                            <Button className={styles.profileBtn}>
                                <span className={styles.profileIcon}> <img src={`https://lowiwed-api.wooshelf.com/${product?.product?.seller?.profile}`} alt="Profile" className={styles.profileImg} /></span>
                                View Profile
                            </Button>
                            <div className={styles.ratingBox}>
                                <FaStar className={styles.starHb} />{product?.product?.rating.toFixed(1)}(<span>{product?.product?.rating_count}</span>)
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.forHeadingOfOverViewMain} mt-2`}>
                        <h5 className={`${styles.overviewHeading} Adamina400 px-1`}>Overview</h5>
                        <div className={styles.overviewBox}>
                            <div className={styles.ForContentBorder}>
                                <p className="d-flex gap-2 align-items-center">
                                    {/* <i className="bi bi-emoji-smile Adamina400"></i> */}
                                    <FaPlateWheat className={styles.forContentOFPlates} />


                                    Price per plate ₹850 ( Veg )</p>
                            </div>
                            <div className={styles.ForContentBorder}>
                                <p className="d-flex gap-2 align-items-center">

                                    {/* <i className="bi bi-emoji-smile Adamina400"></i> */}
                                    <FaPlateWheat className={styles.forContentOFPlates} />

                                    Price per plate ₹850 ( Non Veg )</p>
                            </div>
                            <div className={styles.ForContentBorder}>
                                <p className="d-flex gap-2 align-items-center">
                                    {/* <i className="bi bi-people Adamina400"></i> */}
                                    <LiaUsersSolid className={styles.forContentOFPlates} />
                                    100 to 1050 Guests
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.actionBtns} mt-2`}>
                        <Button className={`${styles.sendBtn} Adamina400`}>
                            <i className="bi bi-envelope"></i> Send Message
                        </Button>
                        <Button className={styles.availBtn}>
                            <i className="bi bi-calendar-check"></i> Check Availability
                        </Button>
                    </div>
                </Col>
                <Row>


                    <Col md={7}>
                        <div className={styles.navbarsHForDet}>
                            <Nav variant="pills" className={styles.tabs}>
                                <Nav.Item>
                                    <Nav.Link active className={`${styles.tabBtn} Inter400`}>About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={`${styles.tabBtn} Inter400`}>Banquets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={`${styles.tabBtn} Inter400`}>Photos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={`${styles.tabBtn} Inter400`}>FAQ</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={`${styles.tabBtn} Inter400`}>Offers (1)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={`${styles.tabBtn} Inter400`}>Reviews</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className={styles.shareBtnHB}>
                                <FiShare2 className={styles.shareBtnIcon} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Row>




            <Row className="mt-4">
                <Col md={7}>
                    <h5 className={`${styles.AboutUs} Adamina400`}>About</h5>
                    <div className={`${styles.aboutSection} border`}>
                        <div className="p-2">
                            <div className="d-flex justify-content-between">
                                <h4 className={`${styles.AboutUs} Adamina400`}>On Lowed.in since 2024</h4>
                                <h4 className={`${styles.AboutUs} Adamina400`}>Last update: November 2024</h4>
                            </div>

                            <div>
                                <h4 className={`${styles.AboutUs} Adamina400`}>Royal Courtyard Lawns, your venue for the a grand celebration</h4>
                                <p className={`${styles.AboutParagraph} Adamina400`}>
                                    Finding the right wedding venue is essential for turning your dream wedding into reality. Royal Courtyard Lawns in Mumbai is a perfect choice for couples seeking a venue that aligns with their vision of a grand and elegant celebration. With</p>
                            </div>

                            <div>
                                <h4 className={`${styles.AboutUs} Adamina400`}>Know your event space at Royal Courtyard Lawns</h4>
                                <p className={`${styles.AboutParagraph} Adamina400`}>

                                    Royal Courtyard Lawns features a spacious, well-decorated banquet hall that can accommodate up to 1,000 guests, making it ideal for large gatherings. The venue also offers top amenities, including excellent lighting, sound systems, and air-</p>
                            </div>
                            <div>
                                <h4 className={`${styles.AboutUs} Adamina400`}>How to reach Royal Courtyard Lawns</h4>
                                <p className={`${styles.AboutParagraph} Adamina400`}>
                                    The location of Royal Courtyard Lawns is highly convenient for guests. Situated in Gowniwada, Owale, Thane West, Thane, Maharashtra, it is easily accessible for those attending your wedding. The nearest airport is Chhatrapati Shivaji Maharaj International Airport, approximately 35 km away, while the Thane Railway Station is just 10 km from the venue. With its accessibility and scenic beauty, Royal Courtyard Lawns offers an all-in-one solution for couples looking to host their nuptial ceremony without the stress of logistic</p>
                            </div>

                            <div>
                                <h4 className={`${styles.AboutUs} Adamina400`}>Here is a list of services and facilities you can avail of at Royal Courtyard Lawns.</h4>
                                <p className={`${styles.AboutParagraph} Adamina400 d-flex flex-column`}>
                                    <span>Lawn</span>
                                    <span>Bridal dressing room</span>
                                    <span>Parking area</span>
                                    <span>In-house restaurant</span>
                                    <span>Valet parking</span>
                                    <span>Catering</span>
                                    <span>Decoration</span>
                                    <span>DJ</span>
                                </p>
                            </div>

                            <div>
                                <h5 className={`${styles.AboutUs} Adamina400`}>Banquets</h5>
                                <div className={`${styles.AreaAvailable}`}><p className={`${styles.AboutParagraph} Adamina400 my-4 px-3`}>Areas Available (2)</p></div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col>
                    {/* <SoldByCard product = {product}/> */}
                </Col>
            </Row>

            <Row className="mt-1">
                <Col md={7}>
                    <div className={`${styles.forindoreOutDoreMain} px-5`}>

                        <div className="d-flex flex-row align-items-center gap-3">
                            <div className=" ">
                                <img src="/Images/Hall.png" alt="" width={40} height={40} />
                                <p className={styles.HallStyle}>Indore</p>
                            </div>
                            <div>
                                <p className={styles.HallStyle}>300 Seating | 400 Floating</p>
                                <p className={styles.HallStyle}>Hall</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row gap-3">
                            <div className=" ">
                                <img src="/Images/Hall.png" alt="" width={40} height={40} />
                                <p className={styles.HallStyle}>Outdoor</p>
                            </div>
                            <div>
                                <p className={styles.HallStyle}>100 Seating | 150 Floating</p>
                                <p className={styles.HallStyle}>Lawn Area</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* photos Sections  */}
            <Row className="mt-3">
                <Row className="mb-3">
                    <Col>
                        <div className="d-flex flex-row gap-2">
                            <div className={styles.photo1}><p className="px-3 my-2">photo (25)</p></div>
                            <div className={styles.Video}><p className="px-3 my-2">Video (0)</p></div>
                        </div>
                    </Col>
                </Row>

                <Row className="g-3">
                    {gallery.map((img, index) => (
                        <Col key={index} lg={3} md={4} sm={6} xs={12}>
                            <img
                                src={`https://lowiwed-api.wooshelf.com${img.file}`}
                                alt={`Venue ${index + 1}`}
                                className="img-fluid rounded"
                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            />
                        </Col>
                    ))}
                </Row>



            </Row>

            <Row>

                <FAQ faq={faq} />
            </Row>
        </Container>
    );
};

export default ProductDeatail;

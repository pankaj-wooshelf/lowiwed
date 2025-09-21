import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Dropdown,
    Spinner,
} from "react-bootstrap";
import styles from "../../styles/VenueSection/herosec.module.css";
import { LuPyramid } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { Pagination } from "react-bootstrap";
import { IoCheckboxSharp } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CategoriesCards({ productsCat, loading }) {
    const router = useRouter();
    const [selectedGuests, setSelectedGuests] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;

    const filteredData = productsCat.filter((item) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            item.product_service_info?.toLowerCase().includes(searchLower) ||
            item.seller?.business_name?.toLowerCase().includes(searchLower) ||
            item.location?.toLowerCase().includes(searchLower)
        );
    });



    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(filteredData.length / cardsPerPage);


    // const handleGuestSelect = (index, value) => {
    //   setSelectedGuests((prev) => ({ ...prev, [index]: value }));
    // };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const handleNavigation = (productId, categoryId) => {
        router.push(`/preview?productId=${productId}&categoryId=${categoryId}`);
    };

    return (
        <section className="mt-4">
            <Container className={`${styles.promotedSection} px-1`}>
                <Row>
                    <Col lg={3} className="d-none d-lg-block mt-2">
                        <div className="d-flex justify-content-center">
                            <Button className={styles.filterBtn}>Filters</Button>
                        </div>
                    </Col>
                    {/* Sidebar */}
                    <Col lg={9}>
                        <div className={`${styles.headeradds}`}>
                            <div className={styles.forDelhoWedingVenuemain}>
                                <span className={styles.title}>Wedding Venues in Delhi </span>
                                <span className={styles.subtitle}>
                                    Showing {productsCat.length} results{" "}
                                    <span className={styles.ShowingResultHalf}>
                                        as per your search criteria
                                    </span>
                                </span>
                            </div>

                            <div className={styles.searchSectionadd}>
                                <div className={styles.searchBox2}>
                                    <Button variant="light" className={styles.searchBtn}>
                                        <i className="bi bi-search" />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className={styles.searchInput3}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}

                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} className="d-none d-lg-block">
                        <div className={styles.sidebar}>
                            <ul className={styles.filterList}>
                                <li>&gt; Venue Type</li>
                                <li>&gt; Locality</li>
                                <li>&gt; No. Of Guest</li>
                                <li>&gt; Room Count</li>
                                <li>&gt; Space</li>
                                <li>&gt; Budget</li>
                                <li>&gt; Rating</li>
                                <li>&gt; Amenities</li>
                                <li>&gt; Availability</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Main Content */}


                    <Col lg={9} sm={12}>

                        {loading && (
                            <div className="d-flex justify-content-center align-items-center my-5">
                                <Spinner animation="border" role="status" variant="primary">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        )}

                        {!loading && productsCat.length === 0 && (
                            <div className="text-center my-5">
                                <h5>No Data Available</h5>
                            </div>
                        )}

                        {!loading && filteredData.length === 0 && (
                            <div className="text-center my-5">
                                <h5>No Matching Results Found</h5>
                            </div>
                        )}


                        {
                            !loading && productsCat.length > 0 && (
                                <Row>
                                    {currentCards.map((item, index) => {
                                        const guestField = item.sub_category.fields.find(
                                            (f) => f.name === "number_of_guests"
                                        );

                                        // const selected =
                                        //   selectedGuests[index] ||
                                        //   guestField?.default ||
                                        //   guestField?.choices?.[0];

                                        return (
                                            <Col
                                                key={index}
                                                lg={4}
                                                md={4}
                                                sm={4}
                                                xs={12}
                                                className="mb-4"
                                            >
                                                <div

                                                    onClick={() => {
                                                        handleNavigation(item.id, item.category.id);
                                                    }}

                                                    style={{ textDecoration: "none" }}
                                                >
                                                    <Card className={`${styles.card} h-100`}>
                                                        <div className={`${styles.badge}`}>
                                                            <IoIosStar />
                                                            {item.rating.toFixed(1)} (<span>{item.rating_count}</span>)
                                                        </div>
                                                        <Card.Img
                                                            variant="top"
                                                            src={`https://lowiwed-api.wooshelf.com/${item.images[0].image}`}
                                                            className={styles.cardImg}
                                                        />
                                                        <div className={styles.heartIcon}>
                                                            <FaHeart className={styles.heartI} />
                                                        </div>

                                                        <Card.Body className="p-0">
                                                            <div className="p-2">
                                                                <Card.Title className={styles.cardTitle}>
                                                                    {/* {item.category.name} */}
                                                                    {item.product_service_info}
                                                                </Card.Title>
                                                                <Card.Text className={styles.price}>
                                                                    <IoIosStar className={styles.starHY} /> Rating{" "}
                                                                    {item.rating}(
                                                                    <span>{item.rating_count} reviews</span>)
                                                                </Card.Text>
                                                                {/* <Card.Text className={styles.price}>
                     <FaCalendarAlt className={styles.CalenderH}/>
 Availability Check 
                    </Card.Text> */}
                                                                <Card.Text className={styles.price}>
                                                                    <IoCheckboxSharp className={styles.checkmark} />
                                                                    Instant Booking
                                                                </Card.Text>
                                                            </div>

                                                            {/* <hr className={styles.divider} /> */}
                                                            <div className={styles.insideHrline}>
                                                                <Card.Text className={styles.price2}>
                                                                    <RiMoneyDollarCircleLine
                                                                        className={styles.dollerIcon}
                                                                    />{" "}
                                                                    {item.price}
                                                                </Card.Text>
                                                                {/* <Card.Text className={`${styles.price2} Adamina400`}>
                      <PiUsersThreeBold className={styles.humanIcon}/>
                       {item.guests}
                    </Card.Text> */}

                                                                {guestField && (
                                                                    <Dropdown
                                                                        show={selectedGuests[`open-${index}`] || false}
                                                                        onToggle={(isOpen) =>
                                                                            setSelectedGuests((prev) => ({
                                                                                ...prev,
                                                                                [`open-${index}`]: isOpen,
                                                                            }))
                                                                        }
                                                                    >
                                                                        <Dropdown.Toggle
                                                                            as="div"
                                                                            className={`${styles.customGuestToggle} Adamina400 d-flex align-items-center gap-1`}
                                                                            style={{ cursor: "pointer" }}
                                                                            id={`dropdown-${index}`}
                                                                        >
                                                                            <PiUsersThreeBold
                                                                                className={styles.humanIcon}
                                                                            />
                                                                            {selectedGuests[index] ||
                                                                                guestField?.default ||
                                                                                guestField?.choices?.[0]}{" "}
                                                                            Guest
                                                                            {(selectedGuests[index] ||
                                                                                guestField?.default ||
                                                                                guestField?.choices?.[0]) > 1
                                                                                ? "s"
                                                                                : ""}
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu>
                                                                            {guestField.choices.map((num, idx) => (
                                                                                <Dropdown.Item
                                                                                    key={idx}
                                                                                    onClick={() => {
                                                                                        setSelectedGuests((prev) => ({
                                                                                            ...prev,
                                                                                            [index]: num,
                                                                                            [`open-${index}`]: false, // close after selection
                                                                                        }));
                                                                                    }}
                                                                                >
                                                                                    {num} Guest{num > 1 ? "s" : ""}
                                                                                </Dropdown.Item>
                                                                            ))}
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                )}
                                                            </div>

                                                            {/* <hr className={styles.divider} /> */}

                                                            <div
                                                                className={`${styles.forShareAndprofileofUser} px-2 py-1`}
                                                            >
                                                                <div className="d-flex gap-2 align-items-center">
                                                                    <img
                                                                        src="/Images/SmileGirl.png"
                                                                        alt="Avatar"
                                                                        width={32}
                                                                        height={32}
                                                                        className={`${styles.ImageProfi} rounded-circle`}
                                                                    />
                                                                    <div>
                                                                        <div className={styles.businessName}>
                                                                            {item.seller.business_name}
                                                                        </div>
                                                                        <div className={styles.location}>
                                                                            <span>
                                                                                {/* <FaLocationPin /> */}
                                                                                <i class="bi bi-geo-alt"></i>
                                                                                {item.location}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className={styles.shareBtn}>
                                                                    <LuPyramid className={styles.shareCl} />
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            )
                        }
                        {/* Grid */}

                    </Col>
                </Row>

                <Pagination className={`${styles.paginationWrapper} mt-4`}>
                    <Pagination.Prev
                        className={styles.navBtn}
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </Pagination.Prev>
                    {[...Array(totalPages)].map((_, i) => (
                        <Pagination.Item
                            className={`${styles.pageItem} ${i + 1 === currentPage ? styles.activeItem : ""
                                }`}
                            key={i + 1}
                            // active={i + 1 === currentPage}
                            active={false}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </Pagination.Item>
                    ))}

                    <Pagination.Next
                        className={styles.navBtn}
                        onClick={() =>
                            currentPage < totalPages && handlePageChange(currentPage + 1)
                        }
                    >
                        Next
                    </Pagination.Next>
                </Pagination>
            </Container>

            <div className={styles.flower + " " + styles.flowerLeft}>
                <img
                    src="/Images/Beauti_Flower1.png"
                    alt="Left Flower"
                    width={836}
                    height={250}
                />
            </div>
        </section>
    );
}

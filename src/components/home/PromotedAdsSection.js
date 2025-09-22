import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { LuPyramid } from "react-icons/lu";
import { FaLocationPin } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CiCircleList } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useAuth } from "@/common/AuthContext";




const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function PromotedAdsSection() {

    const [productData, setProductData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false)
    const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist } = useAuth();


    useEffect(() => {
        getPublicProductData();
        fetchWishlist();
    }, [])

    const getPublicProductData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${BASE_URL}/public-products/`)

            if (response.status === 200) {
                setProductData(response.data.results.response)
                console.log(response.data.results.response);
            }

        } catch (error) {
            toast.error(error.response?.data?.response)
        } finally {
            setLoading(false)
        }
    }

    const filteredData = productData.filter((item) =>
        item.product_service_info?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.seller?.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className={`${styles.promotedSection} `}>

            <Row className={`${styles.firstRowMianForPromotion} mb-0`}>
                <Col lg={2} className="d-none d-lg-block mt-4">
                    <Button className={styles.filterBtn}>Global Filters</Button>
                </Col>
                {/* Sidebar */}
                <Col lg={10}>
                    <div className={`${styles.headeradds}`}>
                        <div className={styles.mainforTitlpromotion}>
                            <span className={styles.title}>All Promoted Ads</span>
                            <span className={styles.subtitle}>Showing {productData.length} results <span className={styles.ShowingResultHalf}>as per your search criteria</span></span>
                        </div>
                        <div className={styles.searchSectionadd}>
                            <div className={styles.searchBoxForPromo}>
                                <Button variant="light" className={styles.searchBtn}>
                                    <i className="bi bi-search" />
                                    {/* <BiSearchAlt className={styles.btnforSearchPromo} /> */}
                                </Button>
                                <Form.Control type="text" placeholder="Search" className={styles.searchInput3}

                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button className={styles.FilterBtn}><CiCircleList /> Filter</Button>
                            <Button className={styles.viewBtn}>View All</Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={2} className="d-none d-lg-block">
                    <div className={styles.sidebar}>
                        <ul className={styles.filterList}>
                            <li>&gt; Categories</li>
                            <li>&gt; Locality</li>
                            <li>&gt; Budget</li>
                            <li>&gt; Rating</li>
                            <li>&gt; Availability</li>
                        </ul>
                    </div>
                </Col>

                {/* Main Content */}
                <Col lg={10} sm={12}>
                    {/* Grid */}

                    {loading && (
                        <div className="d-flex justify-content-center align-items-center my-5">
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}

                    {!loading && productData.length === 0 && (
                        <p className="text-center my-5">No Data Available Now</p>
                    )}

                    {!loading && productData.length > 0 && (
                        <Row>
                            {
                                filteredData.map((item, index) => {
                                    // const existingItem = wishlist.find(
                                    //   (w) => w?.product_listing?.id === item.id
                                    // );
                                    const existingItem = wishlist.find(
                                        (w) => w.id === item.id
                                    );
                                    const isWishlisted = !!existingItem;


                                    const toggleWishlist = () => {
                                        if (isWishlisted) {
                                            removeFromWishlist(existingItem.id);
                                        } else {
                                            addToWishlist(item.id); // productId se add
                                        }
                                    };




                                    return (
                                        <Col key={index} lg={3} md={4} sm={4} xs={12} className="mb-4">
                                            <Link href={`/venue/${item.id}/${item.category.id}`} style={{ textDecoration: "none" }}>
                                                <Card className={`${styles.card} h-100`}>
                                                    <div className={styles.badge}>{item.status}</div>
                                                    <Card.Img variant="top" src={`https://lowiwed-api.wooshelf.com/${item.images[0].image}`} className={styles.cardImg} />
                                                    <div className={styles.heartIcon}
                                                        onClick={(e) => {
                                                            e.preventDefault(); // link open na ho jab heart click kare
                                                            toggleWishlist();
                                                        }}
                                                    >
                                                        <FaHeart className={`${isWishlisted ? styles.heartI : styles.heartDeactive}`}

                                                        // style={{ color: isWishlisted ? "red" : "gray" }}

                                                        />
                                                    </div>
                                                    <Card.Body className="px-2 py-2">
                                                        <div className={`${styles.forTitleOfAndDollerMoneyMain}`}>
                                                            <Card.Title className={`${styles.cardTitleForpromotionN} px-0`}>{item.product_service_info
                                                            }</Card.Title>
                                                            <Card.Text className={styles.price}><RiMoneyDollarCircleLine className={styles.dollerSignH} /> {item.price}</Card.Text>
                                                        </div>
                                                        <hr className={styles.divider} />

                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <img
                                                                    src={`https://lowiwed-api.wooshelf.com/${item.seller.profile}`}
                                                                    alt="Avatar"
                                                                    width={32}
                                                                    height={32}
                                                                    className={`${styles.ImageProfi} rounded-circle`}
                                                                />
                                                                <div>
                                                                    <div className={styles.businessName}>{item.seller
                                                                        .business_name}</div>
                                                                    <div className={styles.location}>
                                                                        <span>
                                                                            {/* <FaLocationPin /> */}
                                                                            <i class="bi bi-geo-alt"></i>
                                                                            {item.location}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={styles.shareBtn}>
                                                                <LuPyramid className={styles.shareCl} />
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    )
                                })}
                        </Row>
                    )}

                </Col>

            </Row>
        </Container>
    );
}
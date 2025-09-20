import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import styles from "../../styles/LandingPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

// Reusable optimized image component with blur + spinner
function CategoryImage({ src, alt }) {

    const [loading, setLoading] = useState(true);

    return (
        <div className={styles.categoryImageWrapper}>
            {loading && (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "200px", width: "200px" }}
                >
                    <Spinner animation="border" size="sm" />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                width={200}
                height={200}
                className={styles.categoryImage}
                onLoadingComplete={() => setLoading(false)} // hide spinner after load
                placeholder="blur"
                blurDataURL="/Images/placeholder.png" // small lightweight placeholder image
                loading="lazy"
            />
        </div>
    );
}

export default function CategoriesSection() {
    const [categoryD, setCategoryD] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const handleNavigation = (category) => {
        router.push(`/categories/?categoryId=${category}`);
    };


    const fetchCategoryData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/categories-with-products/`);
            if (response.status === 200) {
                setCategoryD(response.data.response);
            } else {
                setError("Failed to Load Category data.");
            }
        } catch (error) {
            setError("Server Error Found...");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategoryData();
    }, []);

    return (
        <section className="categories-section mt-3 py-lg-4">
            <Container>
                <div className={`${styles.benefitsSection} mb-4 p-0`}>
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={190}
                        height={83}
                    />
                    <h2 className={styles.benefitsTitle}>
                        <span className={styles.line}></span>
                        Our Categories
                        <span className={styles.line}></span>
                    </h2>
                </div>

                <Row
                    className="g-3 justify-content-center"
                    style={{ position: "relative", zIndex: "4" }}
                >
                    {loading ? (
                        <div className="text-center my-5">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : error ? (
                        <Alert variant="danger" className="text-center">
                            {error}
                        </Alert>
                    ) : (
                        categoryD.map((category, index) => (
                            <Col
                                key={index}
                                xs={6}
                                sm={4}
                                md={3}
                                lg={2}
                                xl={2}
                                className="d-flex justify-content-center"
                            >
                                <div
                                    className={styles.categoryCard}
                                    onClick={() => handleNavigation(category.id)}
                                >
                                    {/* Optimized Next.js image */}
                                    <CategoryImage
                                        src={`https://lowiwed-api.wooshelf.com${category.image}`}
                                        alt={category.name}
                                    />

                                    <div className="a">
                                        <div className={styles.categoryOverlayPermanent}>
                                            <div className={styles.opacityToLookGood}>
                                                <h6 className={styles.categoryTitle}>
                                                    {category.name}
                                                </h6>
                                                <Button className={`${styles.categoryBtn}`}>
                                                    <span>{category?.product_count}</span>
                                                    {category.name}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>

            {/* Background flowers */}
            <div style={{ position: "relative" }}>
                <div className="flower flower-left">
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={836}
                        height={395}
                        style={{ opacity: "17%", position: "relative", zIndex: "0" }}
                    />
                </div>
                <div className="flower flower-right">
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={836}
                        height={395}
                        style={{ opacity: "17%" }}
                    />
                </div>
            </div>

            {/* Inline CSS for flower decorations */}
            <style jsx>{`
        .flower {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 0;
          pointer-events: none;
        }

        .flower-left {
          left: -500px;
          transform: rotate(-90deg) translateY(15%) translateX(65%) scaleY(-1);
        }

        .flower-right {
          right: -500px;
          transform: rotate(-90deg) translateY(-25%) translateX(55%) scaleY(-1);
        }

        @media (max-width: 992px) {
          .flower-left,
          .flower-right {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}

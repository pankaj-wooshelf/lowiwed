import { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Styles from "../../styles/LandingPage.module.css";
import axios from "axios";

export default function BenefitsSection() {
    const [brideData, setBrideData] = useState([]);
    const [businessData, setBusinessData] = useState([])
    // const [loading,setLoading] = useState(false);
    const [error, setError] = useState([]);

    const fetchData = async () => {
        // setLoading(true);
        try {
            const response = await axios(
                "https://lowiwed-api.wooshelf.com/v1/api/benefits-list/");
            if (response.status === 200) {
                const apiData = response.data.response || [];

                // This Data For Benifit 
                const filteredAndSortedDataBride = [...apiData]
                    .filter((item) => item.benefit_type === "bride")
                    .sort((a, b) => a.id - b.id);

                const filteredAndSortedDataBusiness = [...apiData]
                    .filter((item) => item.benefit_type === "business")
                    .sort((a, b) => a.id - b.id);

                setBrideData(filteredAndSortedDataBride);
                setBusinessData(filteredAndSortedDataBusiness)
                // console.log(filteredAndSortedDataBride );
                // console.log(filteredAndSortedDataBusiness );
            } else {
                setError("Failed to load benefits data.");
            }
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(benifitData);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            <section className="mt-4">
                <Container>
                    <section>
                        {/* Benefits for Brides */}
                        <div className={`${Styles.benefitsSection} mb-4 p-0`}>
                            <img
                                src="/Images/Beauti_Flower1.png"
                                alt="Side Flower"
                                width={180}
                                height={73}
                            />
                            <h2 className={Styles.benefitsTitle}>
                                <span className={Styles.line}></span>
                                Benefits As A Bride
                                <span className={Styles.line}></span>
                            </h2>
                        </div>

                        <Row className="g-2 mb-5 justify-content-center">
                            {
                                brideData.map((benefit, index) => (
                                    <Col
                                        key={index}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        lg={3}
                                        xl
                                        className="d-flex"
                                    >
                                        <Card className={`${Styles.benefitCard} flex-fill`}>
                                            <Card.Body className="d-flex flex-column text-center p-0">
                                                {" "}
                                                {/* p-0 removes padding */}
                                                <div className={`${Styles.benefitHeader}`}>
                                                    {benefit.heading}
                                                </div>
                                                <div className="p-3 d-flex flex-column flex-grow-1">
                                                    {" "}
                                                    {/* wrap rest with padding */}
                                                    <div className={` ${index === 0 ? Styles.specialIcon : Styles.benefitIcon}  mb-2`}>

                                                        <img
                                                            src={`https://lowiwed-api.wooshelf.com/${benefit.image}`}
                                                            alt="...."
                                                            width={59}
                                                            height={54}
                                                            style={{ objectFit: "cover" }}
                                                        />
                                                    </div>
                                                    <h6 className={`${Styles.benefitTitle} mb-2`}>
                                                        {benefit.title}
                                                    </h6>
                                                    <p
                                                        className={`${Styles.benefitDescription} mb-0 flex-grow-1`}
                                                    >
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                        </Row>
                    </section>

                    {/* Benefits for Businesses */}
                    <section>
                        <div className={`${Styles.benefitsSection} mb-4`}>
                            <img
                                src="/Images/Beauti_Flower1.png"
                                alt="Side Flower"
                                width={180}
                                height={70}
                            />
                            <h2 className={Styles.benefitsTitle}>
                                <span className={Styles.line}></span>
                                Benefits for Businesses
                                <span className={Styles.line}></span>
                            </h2>
                        </div>

                        <Row className="g-2 justify-content-center">
                            {businessData.map((benefit, index) => (
                                <Col
                                    key={index}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    xl
                                    className="d-flex"
                                >
                                    <Card className={`${Styles.benefitCard} flex-fill`}>
                                        <Card.Body className="d-flex flex-column text-center p-0">
                                            {" "}
                                            <div className={`${Styles.benefitHeader}`}>
                                                {benefit.heading}
                                            </div>
                                            <div className="p-3 d-flex flex-column flex-grow-1">
                                                {" "}
                                                <div
                                                    className={`${index === 0
                                                            ? Styles.specialIcon
                                                            : Styles.benefitIcon
                                                        } mb-2`}
                                                >
                                                    <img
                                                        src={`https://lowiwed-api.wooshelf.com/${benefit.image}`}
                                                        alt="...."
                                                        width={59}
                                                        height={54}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </div>
                                                <h6 className={`${Styles.benefitTitle} mb-2`}>
                                                    {benefit.title}
                                                </h6>
                                                <p
                                                    className={`${Styles.benefitDescription} mb-0 flex-grow-1`}
                                                >
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Container>
            </section>

            {/* Flower Left and Right  */}
            <div style={{ position: "relative" }}>
                <div className="flower flower-left">
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={836}
                        height={395}
                        style={{ opacity: "17%" }}
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
          transform: rotate(-90deg) translateY(15%) translateX(85%) scaleY(-1);
        }

        .flower-right {
          right: -500px;
          transform: rotate(-90deg) translateY(-25%) translateX(85%) scaleY(-1);
        }

        @media (max-width: 992px) {
          .card-img-wrapper {
            max-width: 240px;
          }
          .card-desc {
            font-size: 18px;
          }
          .join-btn {
            height: 50px;
            font-size: 16px;
          }
          .flower-left,
          .flower-right {
            display: none;
          }
        }
      `}</style>
        </Fragment>
    );
}

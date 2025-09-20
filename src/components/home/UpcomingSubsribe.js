import React, { Fragment } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";

const UpcomingSubsribe = () => {
    return (
        <Fragment>
            {/* Weekly Top Businesses At LowiWed */}
            <section className={`${styles.businessMainsubs} mt-1`}>
                <div className={`${styles.businessesSectionsubs}`}>
                    <div className="container">
                        {/* Header */}
                        <div className={`${styles.benefitsSection}  `}>
                            <img
                                className={styles.flowerImg}
                                src="/Images/Beauti_Flower1.png"
                                alt="Side Flower"
                                width={160}
                                height={70}
                            />
                            <h2
                                className={`${styles.benefitsTitle} mb-2`}
                                style={{ color: "#0A1A35" }}
                            >
                                <span className={styles.line}></span>
                                Be Part of Europe's Upcoming Biggest Wedding Marketplace
                                <span className={styles.line}></span>
                            </h2>
                        </div>

                        <div className={styles.searchWrappersubsc}>
                            <div className={styles.innerContainersubsc}>
                                {/* Input 1 */}
                                <div className={styles.inputSection2subsc}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className={styles.inputField2subsc}
                                    />
                                </div>

                                {/* Button Section */}
                                <div
                                    className={`${styles.inputSection4subsc} ${styles.buttonSection2subsc}`}
                                >
                                    <Button className={styles.buttonText2subsc}>Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default UpcomingSubsribe;

import React, { Fragment, useState } from "react";
import styles from "../../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const UpcomingSubsribe = ({ homeContent }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState("")

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    // const [error, setError] = useState([]);

    const handleSubscribe = async () => {
        try {
            setLoading(true)
            if (!email || !email.includes('@')) {
                toast.error("Please Enter the Valid Email")
                return
            }
            const response = await axios.post(`${BASE_URL}/newsletter/subscribe/`, { email });
            if (response.status === 200) {
                toast.success(response.data.message)
                setEmail("")
            }
        } catch (error) {
            toast.error(error?.response?.data?.response)
        } finally {
            setLoading(false)
        }
    };



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
                                {/* Be Part of Europe's Upcoming Biggest Wedding Marketplace */}
                                {homeContent[0]?.title}
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                {/* Button Section */}
                                <div
                                    className={`${styles.inputSection4subsc} ${styles.buttonSection2subsc}`}
                                >
                                    <Button
                                        className={styles.buttonText2subsc}
                                        onClick={handleSubscribe}
                                        disabled={loading}
                                    >{loading ? "Subscribing..." : "Subscribe"}</Button>
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
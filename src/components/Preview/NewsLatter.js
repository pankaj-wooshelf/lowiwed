import React from 'react'
import { Form, Button } from "react-bootstrap";
import styles12 from "../../styles/VenueSection/WeddingVenues.module.css";
// import { FaPaperPlane } from "react-icons/fa";
import styleHeder from '../../styles/LandingPage.module.css'

const NewsLatter = () => {
    return (
        <>
            <div className={`${styleHeder.benefitsSection}  mt-4`}>
                <img
                    className={styleHeder.flowerImg}
                    src="/Images/Beauti_Flower1.png"
                    alt="Side Flower"
                    width={180}
                    height={70}
                />
                <h2
                    className={`${styleHeder.benefitsTitle} ${styles12.benefitTitle2} mb-2`}
                    style={{ fontSize: "20px", color: "#0A1A35" }}
                >
                    <span className={styleHeder.line}></span>
                    SIGN UP NEWSLETTER
                    <span className={styleHeder.line}></span>
                </h2>
            </div>

            <Form className={styles12.newsletterForm}>
                <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    className={`${styles12.emailInput} Inter400`}
                />
                <Button className={styles12.subscribeButton}>Subscribe</Button>
            </Form>
        </>
    )
}

export default NewsLatter

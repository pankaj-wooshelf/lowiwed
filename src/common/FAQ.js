import { Accordion } from "react-bootstrap";
import styles from "../styles/VenueDetails/FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const FAQ = ({ faq }) => {
    const faqs = [
        {
            question: "How much time does it take to complete the website development?",
            answer:
                "We take web development to the next level by integrating cutting-edge technologies, future-proof frameworks, and creative innovation into every project. Our mission is to empower businesses by delivering high-performing, secure, and user-centric digital experiences that resonate with their target audience. Leveraging state-of-the-art tools and methodologies such as AI-powered automation, blockchain for enhanced security, and cloud-native architectures, startups looking to make their mark."
        },
        {
            question: "What technologies do you use for development?",
            answer: "We use React, Next.js, Node.js, and other modern frameworks."
        },
        {
            question: "Do you offer maintenance services?",
            answer: "Yes, we offer comprehensive maintenance and support services."
        },
        {
            question: "Can you help with SEO optimization?",
            answer: "Yes! We integrate SEO best practices during development."
        }
    ];

    return (
        <div className="container py-4">
            <h3 className="Adamina400" style={{ color: "#9095A0", fontWeight: "400", fontSize: "18px" }}>FAQs</h3>
            <Accordion defaultActiveKey="0" style={{ border: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {faq.map((fa, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index} className={`${styles.accordionItem} border-0 roubded`}>
                        <Accordion.Header>
                            <div className="d-flex gap-3">
                                <span className={styles.number}>{index + 1}</span>
                                <span>{fa.question}</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="px-5 roubded border">
                            {fa.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;

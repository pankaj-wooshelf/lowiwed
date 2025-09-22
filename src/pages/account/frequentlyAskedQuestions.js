import {
    Container,
    Tab,
    Nav,
    Row,
    Col,
    Card,
    Button,
    Form,
    Spinner,
} from "react-bootstrap";
import styles from "../../styles/YourAccount/Allorder.module.css";
import stylesM from "../../styles/YourAccount/FrequentlyAskedQuestions.module.css";
import stylesF from "../../styles/VenueDetails/FAQ.module.css";

import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
// import HelpCenterTracker from "./HelpCenterTracker";
import NonOrderRelatedHelpCenter from "@/components/Account/NonOrderRelatedHelpCenter";
import RecentIssues from "@/components/Account/RecentIssues";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
// import { IoIosStarOutline } from "react-icons/io";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// import FAQ from "../VenueDetail/FAQ";


// import HelpCenterSidebar from './HelpCenterSidebar';

// ... repeat as needed

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const FrequentlyAskedQuestions = () => {


    // const [activeKey, setActiveKey] = useState("Queries");
    const [categories, setCategories] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [activeKey, setActiveKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");


    const fetchFaqData = async () => {

        const token = Cookies.get("access_token")
        try {
            const response = await axios.get(`${BASE_URL}/faq-categories-list/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (response.status === 200) {
                const sortedCategories = [...response.data.response].sort((a, b) => a.id - b.id)
                setCategories(sortedCategories);

                if (sortedCategories.length > 0) {
                    const firstCategory = sortedCategories[0];
                    setActiveKey(firstCategory.id.toString());
                    fetchFaqs(firstCategory.id);
                }
            }
        } catch (error) {
            toast.error("Some thing went wrong...")
        }
    }

    useEffect(() => {
        fetchFaqData();
    }, [])


    const fetchFaqs = async (categoryId) => {
        setLoading(true);
        const token = Cookies.get("access_token");
        try {
            const response = await axios.get(`${BASE_URL}/faq-list/?category_id=${categoryId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (response.status === 200) {
                setFaqs(response.data.response || []);

            }
        } catch (error) {
            setFaqs([]);
        }
        setLoading(false);
    }

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-5">
            {/* Header Row */}
            {/* <div className="container"> */}
            <Row className="align-items-center justify-content-between">
                <Col md={6}>
                    <h4 className={styles.heading}>Frequently Asked Questions</h4>
                </Col>
                <Col
                    md={6}
                    className="text-md-end d-flex justify-content-end align-items-center gap-2"
                >
                    <div className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={`${styles.searchInput}`}
                        />
                        <Button className={styles.Searchbtn}>
                            <BiSearchAlt />
                        </Button>
                    </div>
                    {/* <Button variant="light" className={styles.filterBtn}>
            <i className="bi bi-sliders"></i> Filters
          </Button> */}
                </Col>
                <hr />
            </Row>
            {/* </div> */}
            <Row>
                <Container fluid>

                    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)} >
                        <Row>
                            {/* Left Sidebar Tabs */}
                            <Col
                                md={3}
                                //   style={{ borderRight: "1px solid #ccc" }}
                                className={`${stylesM.HelpSidebar} px-0`}
                            >

                                <Nav
                                    variant="pills"
                                    className={`${stylesM.maincontainerNav} flex-column`}
                                >
                                    {categories.map((cat) => {
                                        const isActive = activeKey === cat.id.toString();
                                        return (<Nav.Item key={cat.id}>
                                            <Nav.Link
                                                eventKey={cat.id.toString()}
                                                active={activeKey === cat.id.toString()}
                                                onClick={() => {
                                                    setActiveKey(cat.id.toString());
                                                    fetchFaqs(cat.id);
                                                }}
                                                className={`${stylesM.NavTitle} ${isActive ? stylesM.activeTab : ""}`}
                                            >
                                                <span className={stylesM.startColor}>
                                                    {isActive ? <IoStarSharp /> : <IoStarOutline />}
                                                </span>{cat.category_name}
                                            </Nav.Link>
                                        </Nav.Item>)
                                    })}
                                </Nav>

                            </Col>


                            <Col md={9}>
                                {loading ? (
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                                        <Spinner animation="border" role="status" />
                                    </div>
                                ) : filteredFaqs.length > 0 ? (
                                    <Accordion
                                        defaultActiveKey="0"
                                        style={{
                                            border: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        {filteredFaqs.map((faq, index) => (
                                            <Accordion.Item
                                                eventKey={index.toString()}
                                                key={index}
                                                className={`${stylesF.accordionItem} border-0 rounded`}
                                            >
                                                <Accordion.Header>
                                                    <div className="d-flex gap-3">
                                                        <span className={stylesF.number}>{index + 1}</span>
                                                        <span>{faq.question}</span>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body className="px-5 rounded border">
                                                    {faq.answer}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                ) : (
                                    <p>No FAQs available for this category.</p>
                                )}
                            </Col>
                        </Row>
                    </Tab.Container>

                </Container>
            </Row>
        </div>
    );
};

export default FrequentlyAskedQuestions;

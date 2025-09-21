// import styles from '../../styles/YourAccount/Allorder.module.css';
import { HiUsers } from "react-icons/hi2";
import stylesM from "../../styles/YourAccount/HelpCenter.module.css";
import {
    Container,
    Row,
    Col,
    Card,
    Accordion,
    Button,
    Form,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { AiOutlineClose, AiOutlineIssuesClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { MdDevicesOther } from "react-icons/md";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const NonOrderRelatedHelpCenter = () => {
    const [typeH, setTypeH] = useState("account");
    const [nonOrderData, setNonOrderData] = useState([]);
    const [showQuery, setShowQuery] = useState(false);
    const [message, setMessage] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("account");
    const [loading, setLoading] = useState(false);

    const token = Cookies.get("access_token");

    // const [topic,setTopic] = useState({});
    // const [chat,setChat] = useState([])

    const handleClickValueAccount = (value) => {
        setTypeH(value);
    };

    useEffect(() => {

        getNonorderData();
    }, []);

    const getNonorderData = async () => {
        const token = Cookies.get("access_token");
        try {
            const response = await axios.get(`${BASE_URL}/help-non-order-related/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setNonOrderData(response.data.response);
                console.log(response.data.response);
            }
        } catch (error) { }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        try {
            setLoading(true);
            const response = await axios.post(
                `${BASE_URL}/help-non-order-related/`,
                {
                    topic: selectedTopic,
                    chat: [{ message }],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                toast.success(response.data.message);
                setMessage("");
                setShowQuery(false);
                getNonorderData();
            }
        } catch (error) {
            toast.error(error.response?.data?.response);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Container className={`${stylesM.helpContainer} px-5`}>
                <div className={stylesM.AddButtonMain}>
                    <Button
                        className={`${stylesM.newIssuesButton} Inter400`}
                        onClick={() => setShowQuery(true)}
                    >
                        <AiOutlineIssuesClose />
                        New Issues
                    </Button>
                </div>

                {/* <div className='px-4 py-2'> */}
                {showQuery && (
                    <Card className={stylesM.cardForForm}>
                        <Card.Header className={stylesM.formHeaderIssues}>
                            <h5 className={stylesM.NewAddressFormHeading}>New Issues</h5>
                            <AiOutlineClose
                                style={{ cursor: "pointer", fontSize: "20px" }}
                                onClick={() => setShowQuery(false)}
                                className={stylesM.CloseButtonFormAddress}
                            />
                        </Card.Header>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-2">
                                <Form.Label className={stylesM.LabelName}>
                                    Select Topic
                                </Form.Label>
                                <Form.Select
                                    aria-label="Select topic"
                                    value={selectedTopic}
                                    onChange={(e) => setSelectedTopic(e.target.value)}
                                    className={stylesM.formFillMainCon}
                                >
                                    <option value="account">Account</option>
                                    <option value="technical">Technical Support"</option>
                                    <option value="butterfly">
                                        Lowiwed Butterly Insider
                                    </option>
                                    <option value="offer">Offers</option>
                                    <option value="payment">Payment Issue</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label className={stylesM.LabelName}>
                                    Your Query
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your query here..."
                                    required
                                    className={stylesM.formFillMainCon}
                                />
                            </Form.Group>

                            <div className="text-center mt-3">
                                <Button
                                    type="submit"
                                    className={stylesM.submitBtnForSave}
                                    disabled={loading}
                                >
                                    {loading ? "Saving..." : "Save"}
                                </Button>
                            </div>
                        </Form>
                    </Card>
                )}
                {/* </div> */}

                {/* Top Tabs */}
                <Row className="justify-content-center text-center mb-4 px-4">
                    <Col xs={6} md={2}>
                        <div
                            className={`${stylesM.tabIcon} ${stylesM.tabIcon2}`}
                            onClick={() => handleClickValueAccount("account")}
                        >
                            <img src="/Icons/users.png" alt="Account" />
                        </div>
                        <p className={stylesM.cAccountBtnName}>Account</p>
                    </Col>
                    <Col xs={6} md={2}>
                        <div
                            className={`${stylesM.tabIcon} ${stylesM.tabIcon3}`}
                            onClick={() => handleClickValueAccount("technical")}
                        >
                            <img src="/Icons/undo-2.png" alt="Returns & Exchanges" />
                        </div>
                        <div className={stylesM.cAccountBtnName}>Technical Support</div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div
                            className={`${stylesM.tabIcon} ${stylesM.tabIcon4}`}
                            onClick={() => handleClickValueAccount("lowiwedInsider")}
                        >
                            <img src="/Icons/crown.png" alt="Lowiwed Insider" />
                        </div>
                        <div className={stylesM.cAccountBtnName}>
                            Butterfly Insider
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div
                            className={`${stylesM.tabIcon} ${stylesM.tabIcon2}`}
                            onClick={() => handleClickValueAccount("offers")}
                        >
                            <img src="/Icons/tag.png" alt="Offers" />
                        </div>
                        <div className={stylesM.cAccountBtnName}>Offers</div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div
                            className={`${stylesM.tabIcon} ${stylesM.tabIcon2}`}
                            onClick={() => handleClickValueAccount("payment")}
                        >
                            <img src="/Icons/credit-card.png" alt="Payments" />
                        </div>
                        <div className={stylesM.cAccountBtnName}>Payments</div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div
                            className={`${stylesM.tabIcon} ${stylesM.tabIcon2}`}
                            onClick={() => handleClickValueAccount("other")}
                        >
                            {/* <img src="/Icons/archive.png" alt="Other..." /> */}
                            <MdDevicesOther style={{ color: "#FA9083", fontSize: "24px" }} />
                        </div>
                        <div className={stylesM.cAccountBtnName}>
                            Other
                        </div>
                    </Col>
                </Row>

                {/* Content Card */}

                <Card className={stylesM.helpCard}>
                    {[
                        "account",
                        "technical",
                        "lowiwedInsider",
                        "offers",
                        "payment",
                        "other",
                    ].map(
                        (tab) =>
                            typeH === tab && (
                                <Card.Body key={tab} className="py-1 px-1">
                                    <div className={`${stylesM.headingAccount} mb-2`}>
                                        <HiUsers className={stylesM.iconForAccountNow} />
                                        <span className={stylesM.AccounttextNow}>
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </span>
                                    </div>

                                    {/* Description Text */}
                                    <p className={stylesM.description}>
                                        Showing queries for {tab}.
                                    </p>

                                    {/* Accordion */}
                                    <div className={stylesM.AccordianContainer}>
                                        {nonOrderData.filter((item) => item.topic === tab).length > 0 ? (<Accordion flush className="help-accordion">
                                            {nonOrderData
                                                .filter((item) => item.topic === tab)
                                                .map((item, idx) => (
                                                    <Accordion.Item eventKey={idx.toString()} key={idx}>
                                                        <Accordion.Header>
                                                            {item.chat[0]?.message}
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            {item.chat.map((c, i) => (
                                                                <p key={i}>
                                                                    <b>{c.sender}:</b> {c.message}
                                                                </p>
                                                            ))}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                ))}
                                        </Accordion>) : (<div className="d-flex flex-column align-items-center justify-content-center py-5 text-muted">
                                            <AiOutlineIssuesClose size={60} style={{ color: "#E8618C" }} />
                                            <p className="mt-2 mb-0 Inter400" style={{ fontSize: "20px", color: "#9095A0" }}>No Issues found</p>
                                        </div>)}

                                    </div>
                                </Card.Body>
                            )
                    )}
                </Card>

                {/* Footer */}
                <div className={stylesM.footerNote}>
                    <div className="text-start">
                        <p className={stylesM.queris30}>
                            {" "}
                            Queries from Last 30 Days CHANGE
                        </p>
                        <p className={stylesM.mainPOfQuries}>
                            {" "}
                            <span>No queries found</span>
                            <span>There were no queries raised in Last 30 Days</span>
                            <span>Search queries from Different dates</span>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default NonOrderRelatedHelpCenter;

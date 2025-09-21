import { Container, Tab, Nav, Row, Col, Card, Button, Form } from 'react-bootstrap';
import styles from '../../styles/YourAccount/Allorder.module.css';
import stylesM from '../../styles/YourAccount/HelpCenter.module.css'
import { BiSearchAlt } from "react-icons/bi";
import { useState } from 'react';
import HelpCenterTracker from '@/components/Account/HelpCenterTracker';
import NonOrderRelatedHelpCenter from '@/components/Account/NonOrderRelatedHelpCenter';
import RecentIssues from '@/components/Account/RecentIssues';
import Header from '@/common/Header';
import Navbar from '@/common/Navbar';
import ProfileSidebar from '@/components/Account/ProfileSidebar';
// import HelpCenterSidebar from './HelpCenterSidebar';


// ... repeat as needed
;

const HelpCenter = () => {
    const [activeKey, setActiveKey] = useState('order');

    return (
        <>
            <Header />
            <Navbar />
            <div className="d-flex gap-4  px-5">
                {/* Sidebar component */}
                <ProfileSidebar />


                <div className='mt-5'>
                    {/* Header Row */}
                    <Row className="align-items-center justify-content-between mb-3">
                        <Col md={6}>
                            <h4 className={styles.heading}>Help Centre</h4>
                        </Col>
                        <Col md={6} className="text-md-end d-flex justify-content-end align-items-center gap-2">
                            <div className='d-flex'>
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    className={`${styles.searchInput}`}
                                />
                                <Button className={styles.Searchbtn}><BiSearchAlt />
                                </Button>
                            </div>
                            <Button variant="light" className={styles.filterBtn}>
                                <i className="bi bi-sliders"></i> Filters
                            </Button>
                        </Col>
                        <hr />
                    </Row>

                    <Row >

                        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                            <Row>

                                <Col md={3}>
                                    <div className={stylesM.HelpSidebar}>

                                        <div className={stylesM.MainTitleContain}>
                                            <h2 className={stylesM.HelpTitle}>HELP CENTER</h2>
                                            <p className={stylesM.helpP}>We are here to help you</p>
                                        </div>

                                        <h4 className={stylesM.selectQT}>SELECT QUERY TYPE</h4>
                                        {/* <Nav variant="pills" className="flex-column"  > */}
                                        <div className={stylesM.contentsH}>
                                            {/* <p className={stylesM.OrderBtn}>Order Related Queries </p> */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="order"

                                                    className={`${stylesM.OrderBtn} ${activeKey === "order" ? stylesM.activeTab : ""}`}
                                                >
                                                    Order Related Queries
                                                </Nav.Link>
                                            </Nav.Item>
                                            <span className={stylesM.rightArrow}></span>
                                        </div>

                                        <div className={stylesM.contentsH}>
                                            {/* <p  onClick={()=>Router.push()}>Non-order Related Issues</p> */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="nonorder"
                                                    className={`${stylesM.OrderBtn} ${activeKey === "nonorder" ? stylesM.activeTab : ""}`}
                                                >Non-order Related Issues</Nav.Link>
                                            </Nav.Item>
                                            <span className={stylesM.rightArrow}></span>
                                        </div>
                                        <div className={stylesM.contentsH}>
                                            <Nav.Item>
                                                <Nav.Link eventKey="recent"
                                                    className={`${stylesM.OrderBtn} ${activeKey === "recent" ? stylesM.activeTab : ""}`}

                                                >Recent Issues</Nav.Link>
                                            </Nav.Item>
                                            <span className={stylesM.rightArrow}></span>
                                        </div>
                                        <br />

                                        <div className={stylesM.contentsH}>

                                            {/* <Nav.Item> 
              <Nav.Link eventKey="faq"
              className={`${stylesM.OrderBtn} ${activeKey === "faq" ? stylesM.activeTab : ""}`}
              >Frequently Asked Questions</Nav.Link>
            </Nav.Item>
              <span className={stylesM.rightArrow}></span> */}
                                        </div>
                                        {/* </Nav> */}
                                    </div>
                                </Col>

                                {/* Right Content Area */}
                                <Col md={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="order">
                                            <HelpCenterTracker />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="nonorder">
                                            <NonOrderRelatedHelpCenter />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="recent">
                                            <RecentIssues />
                                        </Tab.Pane>

                                        {/* <Tab.Pane eventKey="faq">
              <Card className="p-3">
                <h5>FAQs</h5>
                <p>Common questions related to Lowiwed services.</p>
              </Card>
            </Tab.Pane> */}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </Row>
                </div>
            </div>
        </>
    );
};

export default HelpCenter;

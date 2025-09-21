import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../../styles/YourAccount/Allorder.module.css';
import { BiSearchAlt } from "react-icons/bi";
import styles12 from "../../styles/YourAccount/wishList.module.css";
// import styles from "../../styles/VenueSection/herosec.module.css";

import { FaCheckSquare, FaHeart, FaUsers } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { FaLocationPin } from 'react-icons/fa6';
import { LuPyramid } from 'react-icons/lu';
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineBoy } from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import Header from '@/common/Header';
import Navbar from '@/common/Navbar';
import ProfileSidebar from '@/components/Account/ProfileSidebar';


// import RactangleImg from '../../../public/Icons/Ractangle'


const dummyData = Array(3).fill({
    title: "Customized Golden Lehenga",
    price: "$17k",
    image: "/images/Queen_Leady.png",
    status: "Used",
    vendor: "Hina Bridal Collection",
    location: "Amsterdam, UK",
})

const dummyData2 = Array(3).fill({
    title: "Luxury Resort | Destination Wedding",
    price: "$17k - $40",
    image: "/Images/Venus_Delhi.png",
    vendor: "Royal Orchid Resort, Amsterdam",
    location: "Amsterdam, UK",
    rating: 4.8,
    reviews: 122,
    guests: "25 to 2000",
});
// ... repeat as needed
;

const Wishlist = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="d-flex gap-4  px-5">
                {/* Sidebar component */}
                <ProfileSidebar />
                <div className='mt-5'>
                    <Row className="align-items-center justify-content-between mb-3">
                        <Col md={6}>
                            <h4 className={styles.heading}>All Orders</h4>
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

                    <Container className={styles.allOrdersContainer}>
                        {/* Header Row */}


                        <Row>
                            <Col lg={12} md={12}>
                                <Row>
                                    {dummyData.map((item, index) => (
                                        <Col key={index} md={4} sm={4} xs={12} className="mb-4">
                                            <Card className={`${styles12.card} h-100`}>
                                                {/* <div className={styles12.badge}>{item.status}</div> */}
                                                <Card.Img variant="top" src={item.image} className={styles12.cardImg} />
                                                <div className={styles12.heartIcon}>
                                                    <AiOutlineClose className={styles12.heartI} />
                                                </div>
                                                <Card.Body className='m-0 px-1 py-1'>
                                                    <div className={styles12.bodyContents}>
                                                        <div className={styles.forTextMoneyDollerCen}>
                                                            <Card.Title className={`${styles12.cardTitle} py-0`}>{item.title}</Card.Title>
                                                            <Card.Text className={`${styles12.price} py-0`}><RiMoneyDollarCircleLine className={styles12.doller} />
                                                                {item.price}</Card.Text>
                                                        </div>
                                                        <hr className={styles12.divider} />
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex gap-2 align-items-center">
                                                                {/* <img
                src="/Images/SmileGirl.png"
                alt="Avatar"
                width={32}
                height={32}
                className={`${styles12.ImageProfi} rounded-circle`}
              /> */}
                                                                <div>
                                                                    <div className={`${styles12.businessName} px-5`}>{item.vendor}</div>
                                                                    <div className={`${styles12.location} px-5`}>
                                                                        <span>
                                                                            {/* <FaLocationPin /> */}
                                                                            <i class="bi bi-geo-alt"></i>
                                                                            Amsterdam,</span>UK
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={styles12.shareBtn}>
                                                                <LuPyramid className={styles12.shareCl} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Card.Body>
                                                <div className={`${styles12.OrderNowMain} mt-2`}>
                                                    <p className='pt-3'>Order Now</p>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>


                            <Col>
                                <Row>
                                    {dummyData2.map((item, index) => (
                                        <Col key={index} lg={4} md={4} sm={4} xs={12} className="mb-4">
                                            <Card className={`${styles12.card2} h-100 p-0`}>
                                                <div className={`${styles12.badge2}`}><IoIosStar />
                                                    5.0(22)</div>
                                                <Card.Img
                                                    variant="top"
                                                    src={item.image}
                                                    className={styles12.cardImg2}
                                                />
                                                <div className={styles12.heartIcon}>
                                                    <AiOutlineClose className={styles12.heartI} />
                                                </div>
                                                <Card.Body className='py-0 p-0'>

                                                    <div className={`${styles.forTitlesMain} p-2`}>
                                                        <Card.Title className={styles12.cardTitle2}>
                                                            {item.title}
                                                        </Card.Title>
                                                        <Card.Text className={styles12.textsHForCarts}>
                                                            <IoIosStar className={styles12.starHY2} /> Rating {item.rating}(<span>{item.reviews} reviews</span>)
                                                        </Card.Text>
                                                        <Card.Text className={styles12.textsHForCarts}>
                                                            <SlCalender />
                                                            Availability Check
                                                        </Card.Text>
                                                        <Card.Text className={styles12.textsHForCarts}>
                                                            <FaCheckSquare />
                                                            Instant Booking
                                                        </Card.Text>
                                                    </div>

                                                    {/* <hr className={styles12.divider2} /> */}
                                                    <div className={styles12.insideHrline}>
                                                        <Card.Text className={styles12.price2}>
                                                            <RiMoneyDollarCircleLine className={styles12.dollerIcon} /> {item.price}
                                                        </Card.Text>
                                                        <Card.Text className={`${styles12.price2} Adamina400`}>
                                                            {/* <RiMoneyDollarCircleLine /> */}
                                                            <FaUsers className={styles12.humanIcon} />
                                                            {item.guests}
                                                        </Card.Text>
                                                    </div>

                                                    {/* <hr className={styles12.divider} /> */}

                                                    <div className="d-flex justify-content-between align-items-center px-2 py-1">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <Image
                                                                src="/Images/SmileGirl.png"
                                                                alt="Avatar"
                                                                width={32}
                                                                height={32}
                                                                className={`${styles12.ImageProfi} rounded-circle`}
                                                            />
                                                            <div>
                                                                <div className={styles12.businessName2}>
                                                                    {item.vendor}
                                                                </div>
                                                                <div className={styles12.location2}>
                                                                    <span>
                                                                        {/* <FaLocationPin /> */}
                                                                        <i class="bi bi-geo-alt"></i>
                                                                        Amsterdam,
                                                                    </span>
                                                                    UK
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles12.shareBtn2}>
                                                            <LuPyramid className={styles12.shareCl2} />
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                <div className={`${styles12.OrderNowMain} mt-1`}>
                                                    <p className='pt-3'>Order Now</p>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            {/* <Row></Row> */}
                        </Row>


                    </Container>
                </div>
            </div>
        </>

    );
};

export default Wishlist;

import React, { useEffect, useState } from "react";
import {
    Container,
    Form,
    Button,
    NavDropdown,
    Nav,
    Dropdown,
    Offcanvas,
} from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import stylesN from "../styles/Navbar.module.css"
import styles from "../styles/Home.module.css";
import { CiCircleList } from "react-icons/ci";
import {
    BiSolidBellRing,
    BiSolidMessageRounded,
    BiSolidHeart,
} from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import SignUp from "./SignUp";
import Login from "./Login";
import WeddingNav from "@/components/Landing/WeddingNav";
import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";
import { HiMiniUserPlus, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineClearAll } from "react-icons/md";
import RegisterSellerModal from "./RegisterSellerModal";

const Navbar = () => {
    const router = useRouter();
    const [modalType, setModalType] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showSellerModal, setShowSellerModal] = useState(false);
    const { user, token, logout } = useAuth();
    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);
    function maskPhone(phone) {
        if (phone.length <= 5) {
            return "*".repeat(phone.length);
        }
        const visiblePart = phone.slice(0, -5);
        const maskedPart = "*".repeat(5);
        return visiblePart + maskedPart;
    }

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // ya loader
    }

    return (
        <>
            <div className={`${styles.navWrapper} px-lg-5`}>
                <Container fluid className=" py-3">

                    <div className={styles.RowContainer}>
                        {/* Logo Section */}
                        <div className="d-flex align-items-center gap-md-4">
                            <div className={styles.mainForlogo}>
                                <Button className={styles.wedinglastbtn} onClick={handleShow}>
                                    <FaBars className={styles.wadinglastbtnIcon} />
                                </Button>
                                <div
                                    className="d-flex justify-content-center align-items-center cursor-pointer"
                                    onClick={() => router.push("/")}
                                >
                                    <img
                                        src="/Images/ButterF.png"
                                        alt="Logo"
                                        className={styles.butterflyLogo}
                                    />
                                    <span className={`${styles.brandText}`}>LowiWed</span>
                                </div>
                            </div>

                            <div className={`${styles.searchCata}`}>

                                {/* <div className={`${styles.catalogBtn} bg-white`}>
                                    <div className={styles.catalogIcon}>
                                        <CiCircleList />
                                    </div>

                                    <NavDropdown
                                        title={
                                            <span>
                                                Catalog <span className="divider"></span>
                                            </span>
                                        }
                                        className={`customDropdown ${stylesN.catalogIcon}`}
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item>Budget Planner</NavDropdown.Item>
                                        <NavDropdown.Item>Checklists</NavDropdown.Item>
                                        <NavDropdown.Item>Vendors</NavDropdown.Item>
                                    </NavDropdown>
                                </div> */}
                                <div className={styles.searchBox}>

                                    <div className={styles.catalogIcon}>
                                        {" "}
                                        <span className={styles.spanforSearch}>
                                            <i className="bi bi-search" />
                                        </span>
                                    </div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search for Items"
                                        className={styles.searchInput}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Icons and buttons */}
                        <div
                            // xs="5"
                            className={`${styles.IconsContPart} d-flex justify-content-lg-start align-items-center justify-content-sm-start gap-md-3`}
                        >
                            <div className={styles.mainrightSideContent}>
                                <BiSolidBellRing className={styles.icon} />
                                <BiSolidMessageRounded className={styles.icon} />
                                <BiSolidHeart className={styles.icon} />
                                {mounted && token && user?.role === "buyer" ? (
                                    <Dropdown className={`${stylesN.accountDropdown} border-0`}>
                                        <Dropdown.Toggle
                                            variant="light"
                                            className={`${styles.accountBtn} ${stylesN.noCaret}`}
                                        >
                                            <PersonCircle />{" "}
                                            <span>{user?.full_name || "Your Account"}</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className={`${stylesN.dropdownMenu} py-3`}>
                                            <div
                                                className={stylesN.userInfo}
                                                onClick={() => router.push("account/profile")}
                                            >
                                                <Dropdown.Item>Hello, {user?.full_name}</Dropdown.Item>
                                                <Dropdown.Item className={stylesN.pforphoneNumber}>
                                                    <HiOutlineDevicePhoneMobile />
                                                    {user?.phone_number
                                                        ? maskPhone(user.phone_number)
                                                        : ""}
                                                </Dropdown.Item>
                                            </div>
                                            <Dropdown.Divider />

                                            <div className={stylesN.dropdownSection}>
                                                <strong>Orders & Bookings</strong>
                                                <Dropdown.Item onClick={() => router.push('profileDetail/my-order')}>My Orders</Dropdown.Item>
                                                <Dropdown.Item>My Vendor Bookings</Dropdown.Item>
                                                <Dropdown.Item>Customization Requests</Dropdown.Item>
                                            </div>

                                            <Dropdown.Divider />

                                            <div className={stylesN.dropdownSection}>
                                                <strong>Saved & Wishlists</strong>
                                                <Dropdown.Item onClick={() => router.push('profileDetail/wishlist')}>My Wishlist</Dropdown.Item>
                                                <Dropdown.Item>Gift Cards & Coupons</Dropdown.Item>
                                            </div>

                                            <Dropdown.Divider />

                                            <div className={stylesN.dropdownSection}>
                                                <strong>Account & Payment Info</strong>
                                                <Dropdown.Item>Saved Addresses</Dropdown.Item>
                                                <Dropdown.Item>Saved Cards & UPI (VPA)</Dropdown.Item>
                                                <Dropdown.Item>Edit Profile</Dropdown.Item>
                                            </div>

                                            <Dropdown.Divider />

                                            <div className={stylesN.dropdownSection}>
                                                <strong>Support & Logout</strong>
                                                <Dropdown.Item>Contact Us / Chat Support</Dropdown.Item>
                                                <Dropdown.Item>Report</Dropdown.Item>
                                                <Dropdown.Item>Feedback</Dropdown.Item>
                                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <>
                                        <Dropdown className={`${stylesN.accountDropdown} border-0`}>
                                            <Dropdown.Toggle
                                                variant="light"
                                                className={`${stylesN.forloginborder} ${stylesN.noCaret} Inter400`}
                                            >
                                                Log in
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className={`${stylesN.dropdownMenuone} p-0 `}>
                                                <Dropdown.Item
                                                    onClick={() => setModalType("loginBuyer")}
                                                    className={`${stylesN.dropdownitemone} py-2`}

                                                >
                                                    Login as Buyer
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={() => setShowSellerModal(true)}
                                                    className={`${stylesN.dropdownitemone} py-2`}
                                                >
                                                    Login as Seller
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </>

                                )}

                                {/* <Button
                                    variant="light"
                                    className={styles.sellBtn}
                                    onClick={() => router.push("/venue")}
                                >
                                    Sell Now
                                </Button> */}
                                <div className={`${styles.dropboxforlanmain}`}>
                                    <div className="langtextHB">EN</div>
                                    <Dropdown className={`${stylesN.langBtn} customDropdown`}>
                                        <Dropdown.Toggle
                                            variant="light"
                                            style={{ background: "transparent", border: "none" }}
                                        ></Dropdown.Toggle>
                                    </Dropdown>
                                </div>
                                <div className={styles.ForfaqmainIcon}>

                                    <span className={styles.mainContforBisoliMessageRouP}>
                                        <i className="bi bi-question-circle-fill"></i>
                                    </span>
                                </div>

                                <span className="d-inline d-md-none" onClick={() => setModalType('login')}>
                                    <HiMiniUserPlus className={stylesN.SmallScProgileIcon} />
                                </span>
                            </div>
                        </div>
                    </div>
                    {modalType === "loginBuyer" && (
                        <Login
                            modalVisible={true}
                            setModalVisible={() => setModalType(null)}
                            switchToSignUp={() => setModalType("signup")}
                        />
                    )}

                    {modalType === "loginSeller" && (
                        <SignUp
                            modalVisible={true}
                            setModalVisible={() => setModalType(null)}
                            switchToLogin={() => setModalType("login")}
                        />
                    )}
                    {showSellerModal && (
                        <RegisterSellerModal
                            show={showSellerModal}
                            onHide={() => setShowSellerModal(false)}
                        />
                    )}

                </Container>
                <Offcanvas show={showMenu} onHide={handleClose} placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Weading Nav</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <NavDropdown title="Wedding Planning" className={stylesN.navItem}>
                                <NavDropdown.Item>Budget Planner</NavDropdown.Item>
                                <NavDropdown.Item>Checklists</NavDropdown.Item>
                                <NavDropdown.Item>Vendors</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Before Wedding" className={stylesN.navItem}>
                                <NavDropdown.Item>Engagement</NavDropdown.Item>
                                <NavDropdown.Item>Photoshoot</NavDropdown.Item>
                                <NavDropdown.Item>Bridal Wear</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Ceremony & Decorations"
                                className={stylesN.navItem}
                            >
                                <NavDropdown.Item>Decor Themes</NavDropdown.Item>
                                <NavDropdown.Item>Venue Styling</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Photography & Prints"
                                className={stylesN.navItem}
                            >
                                <NavDropdown.Item>Photographers</NavDropdown.Item>
                                <NavDropdown.Item>Photo Albums</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Destination & Locations"
                                className={stylesN.navItem}
                            >
                                <NavDropdown.Item>Beach Wedding</NavDropdown.Item>
                                <NavDropdown.Item>Hill Station</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Party & Entertainment"
                                className={stylesN.navItem}
                            >
                                <NavDropdown.Item>Music</NavDropdown.Item>
                                <NavDropdown.Item>Games</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Food & Drinks" className={stylesN.navItem}>
                                <NavDropdown.Item>Menu</NavDropdown.Item>
                                <NavDropdown.Item>Caterers</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="After Wedding" className={stylesN.navItem}>
                                <NavDropdown.Item>Honeymoon</NavDropdown.Item>
                                <NavDropdown.Item>Thank You Cards</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav.Item className="mt-3">
                            <div className={styles.clearWrapper}>
                                <MdOutlineClearAll className={styles.ClearAllWedingNav} />
                            </div>
                        </Nav.Item>
                    </Offcanvas.Body>
                </Offcanvas>

            </div>
            <WeddingNav />
        </>
    );
};

export default Navbar;

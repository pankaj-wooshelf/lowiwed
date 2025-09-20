import { Modal, Row, Col, Form, Button, Container } from 'react-bootstrap';
import styles from '../styles/LoginRegister/LoginRegister.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import { useAuth } from './AuthContext';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SignUp = ({ modalVisible, setModalVisible, switchToLogin }) => {
    const [step, setStep] = useState("1");
    const [userValue, setUserValue] = useState({
        email: "",
        full_name: "",
        password: "",
        phone_number: ""
    })
    const [otp, setOtp] = useState("");
    const [registeredEmail, setRegisteredEmail] = useState("");


    const { login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem("auth_step", step);
        if (registeredEmail) {
            localStorage.setItem("registered_email", registeredEmail);
        }
    }, [step, registeredEmail]);

    // Navbar.js ya AuthProvider.js (jahaan modal ka control hai)
    useEffect(() => {
        const savedStep = localStorage.getItem("auth_step");
        if (savedStep === "2") {
            setModalType("signup");   // modal type = signup
            setModalVisible(true);    // modal force open
        }
    }, []);


    const handleChangeUserDetail = (e) => {
        const { name, value } = e.target;

        setUserValue((prev) => ({ ...prev, [name]: value }))
    }


    const handleRegistrationUser = async (e) => {
        e.preventDefault()
        if (!userValue.full_name || !userValue.email || !userValue.phone_number || !userValue.password) {
            toast.error("all fields are required")
            return;
        }
        try {
            const response = await axios.post(`${BASE_URL}/register/`, userValue);

            if (response.status === 200) {
                toast.success(response.data.message);
                setRegisteredEmail(userValue.email);
                setStep("2");
                setUserValue({
                    email: "",
                    full_name: "",
                    password: "",
                    phone_number: ""
                })

            }
        } catch (error) {
            toast.error("failed to register...")
        }
    }


    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        try {
            const res = await axios.post(
                `${BASE_URL}/confirm-otp/`,
                {
                    email: registeredEmail,
                    otp,
                }
            );

            if (res.status === 200) {

                const accessToken = res.data.response.access;

                if (accessToken) {
                    // Cookies.set("access_token",accessToken,{
                    //   expires:7,
                    //   secure:true,
                    //   sameSite:"strict",
                    // })
                    login(accessToken);
                }
            }
            toast.success(res.data.message)
            // setStep("1");
            localStorage.removeItem("auth_step");
            localStorage.removeItem("registered_email"); // clear storage
            setModalVisible(false);
            router.push('/home')
        } catch (err) {
            toast.error(err.response?.data?.message || "OTP verification failed");
        }
    };


    return (
        <>
            <Modal
                show={modalVisible}
                onHide={() => {
                    if (step !== "2") setModalVisible(false);
                }

                }
                size="lg"
                centered
                className={styles.modalWrapper}
                backdrop={step === "2" ? "static" : true}
                keyboard={step === "2" ? false : true}
            >
                {/* <div className={styles.decorTopRight}></div>
        <div className={styles.decorBottomLeft}></div> */}

                <Modal.Body className="p-5">
                    {step === "1" && (
                        <Button
                            variant="link"
                            onClick={() => setModalVisible(false)}
                            className={styles.closeBtn}
                            aria-label="Close"
                        >
                            &times;
                        </Button>
                    )}
                    <Row>
                        <h4 className={`${styles.headingForm} fw-bold mb-4 text-center`}>
                            <u>Customer Sign-Up</u>
                        </h4>
                        {/* Left Image */}
                        <Col md={6} className="text-center d-none d-md-block">
                            <div className={styles.imageWrap}>
                            </div>
                            <img src="/Images/Queen_Leady.png" alt="Bride" className={styles.girlImg} />
                        </Col>

                        {/* Form */}
                        {step === "1" &&
                            <Col md={6} className='mt-3'>

                                <h2 className={styles.SignUpHeading}>Customer Signup</h2>
                                <form>
                                    <div className='mb-2'>
                                        {/* <label className={styles.inputHeading}>Name</label> */}
                                        <input type="text" className={`form-control ${styles.formInput}`} placeholder="Name *"
                                            name='full_name'
                                            value={userValue.full_name}
                                            onChange={handleChangeUserDetail}
                                        />
                                    </div>

                                    <div className="mb-2">
                                        {/* <label className={styles.inputHeading}>Business Name</label> */}
                                        <input type="text" className={`form-control ${styles.formInput}`} placeholder="Email Id *"
                                            name='email'
                                            value={userValue.email}
                                            onChange={handleChangeUserDetail}
                                        />
                                    </div>

                                    <div className="mb-2">
                                        {/* <label className={styles.inputHeading}>Email Address</label> */}
                                        <input type="text" className={`form-control ${styles.formInput}`} placeholder="Mobile No. *"
                                            name='phone_number'
                                            value={userValue.phone_number}
                                            onChange={handleChangeUserDetail}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        {/* <label className={styles.inputHeading}>Email Address</label> */}
                                        <input type="text" className={`form-control ${styles.formInput}`} placeholder=" password *"
                                            name='password'
                                            value={userValue.password}
                                            onChange={handleChangeUserDetail}
                                        />
                                    </div>

                                    <button type="submit" className={`${styles.registerBtn} btn`} onClick={handleRegistrationUser}>
                                        Submit
                                    </button>
                                    <div className={styles.AlreadyAcount}>
                                        <p className='Inter400'>Already have an account <span onClick={switchToLogin}>Sign In Now</span></p>

                                    </div>
                                </form>
                                <div className={styles.contnueWithMain}>
                                    <h2 className={styles.contnueWithMainHeader}>Continue With</h2>
                                    <div className={styles.GoogleMain}>
                                        <img src="/Images/Google.png" alt="" className={styles.imageGoo} />
                                        <h3 className={styles.headingGoogle}>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        }


                        {
                            step === "2" && <Col md={6} className='mt-5 pt-5'>
                                <div className={styles.otpMainDivStyle}>
                                    <h2 className={styles.SignUpHeading}>Customer Otp</h2>
                                    <form>
                                        <div className='mb-2'>
                                            {/* <label className={styles.inputHeading}>Name</label> */}
                                            <input type="text" className={`form-control ${styles.formInput}`} placeholder="Enter Your Otp *"
                                                // name='full_name'
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                        </div>


                                        <button type="submit" className={`${styles.registerBtn} btn`} onClick={handleVerifyOtp}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </Col>
                        }
                    </Row>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default SignUp;

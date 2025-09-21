import { Modal, Row, Col, Form, Button, Container } from 'react-bootstrap';
import styles from '../styles/LoginRegister/LoginRegister.module.css'
import SignUp from './SignUp';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAuth } from './AuthContext';



const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Login = ({ modalVisible, setModalVisible, switchToSignUp }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const { login } = useAuth();
    const validateFormForLogin = () => {
        let newErrors = {}
        if (!email) {
            newErrors.email = "Email / Mobile No. is required"
        } else if (!/\S+@\S+\.\S+/.test(email) && !/^[0-9]{10}$/.test(email)) {
            newErrors.email = "Enter valid Email or 10-digit Mobile No.";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const handleSubmitLoginBtn = async (e) => {
        e.preventDefault();
        if (!validateFormForLogin()) return;
        try {
            setLoading(true)
            const response = await axios.post(`${BASE_URL}/login/`, { email, password });

            // console.log(response.data);
            if (response.status === 200) {
                login(response.data.access);
                // Cookies.set("access_token",response.data.access,{
                //   expires:7,
                //   secure:true,
                //   sameSite:"strict",
                // });
                Cookies.set("role", response.data.user_profile.role, { expires: 1, secure: true })
                // toast.success("Login successful!");
                toast.success(`${response.data.response}`);
                setModalVisible(false);

                if (response.data.user_profile.role === "seller") {
                    router.push('/seller/dashboard/d');
                }
                if (response.data.user_profile.role === "buyer") {
                    router.push('/');
                }
                setEmail("");
                setPassword("");
                setErrors({});
            }
        } catch (error) {
            toast.error(error.response?.data?.response || "Login failed! Check your credentials.");
        } finally {
            setLoading(false)
        }
    }



    return (
        <>
            <Modal
                show={modalVisible}
                onHide={() => setModalVisible(false)}
                size="lg"
                centered
                className={styles.modalWrapper}
            >

                <Modal.Body className="p-5">
                    <Button
                        variant="link"
                        onClick={() => setModalVisible(false)}
                        className={styles.closeBtn}
                        aria-label="Close"
                    >
                        &times;
                    </Button>
                    <Row>
                        <h4 className={`${styles.headingForm} fw-bold mb-4 text-center`}>
                            <u>Customer Login</u>
                        </h4>
                        {/* Left Image */}
                        <Col md={6} className="text-center d-none d-md-block">
                            <div className={styles.imageWrap}>
                            </div>
                            <img src="/Images/Queen_Leady.png" alt="Bride" className={styles.girlImg} />
                        </Col>

                        {/* Form */}
                        <Col md={6} className='mt-4'>

                            {/* <div className={styles.LoginCustomerheadCon}> */}
                            <h2 className={`${styles.LoginCustomer} mb-4`}>Customer Log-in  <span>To Generate OTP, Type Your Mobile No:</span></h2>

                            {/* </div> */}
                            <form>
                                <div className='mb-2'>
                                    <label className={styles.formLabalLogin}>Registered / Email Id / Mobile No.</label>
                                    <input type="email" className={`form-control ${styles.formInput} ${errors.email ? "is-invalid" : ""}`} placeholder="Registered Email id / Mobile No."
                                        name='email'
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (errors.email) validateFormForLogin();
                                        }}
                                        required

                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className='mb-2'>
                                    <label className={styles.formLabalLogin}>Password</label>
                                    <input type="password" className={`form-control ${styles.formInput}`} placeholder="Enter Your Registered password"
                                        name='password'
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (errors.password) validateFormForLogin();
                                        }}
                                        required
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>

                                <button type="submit" className={`${styles.registerBtn} btn`} onClick={handleSubmitLoginBtn} disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                                <div className={styles.AlreadyAcount}>
                                    <p className='Inter400'>Don't have an account with Lowiwed.com <span onClick={switchToSignUp}>Sign Up</span> Now</p>
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
                    </Row>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default Login;

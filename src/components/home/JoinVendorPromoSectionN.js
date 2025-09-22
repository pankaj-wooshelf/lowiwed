import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { Col, Container, Row, Button, Modal, Form } from "react-bootstrap";
import stylesM from "../../styles/SellerForm/sellerForm.module.css";
import stylesT from "../../styles/Form.module.css";

import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import CategorySelect from "./CategorySelect";
import { toast } from "react-toastify";

const howDidYouHearOptions = [
    "Input text", // Default placeholder
    "Instagram",
    "Facebook",
    "Google Search",
    "Friend/Colleague",
    "Wedding Fair",
    "Online Ad",
    "Other",
];

const cityAndState = [
    "Mumbai, Maharashtra , India, 486684",
    "Delhi, Delhi ,  India, 486684",
    "Bengaluru, Karnataka, India, 486684",
    "Kolkata, West Bengal, India, 486684",
    "Chennai, Tamil Nadu, India, 486684 ",
    "Hyderabad, Telangana, India, 486684",
    "Pune, Maharashtra, India, 486684",
    "Ahmedabad, Gujarat, India, 486684",
    "Jaipur, Rajasthan, India, 486684",
    "Lucknow, Uttar Pradesh, India, 486684",
];

const sellerTyle = ["public", "private"];

const offerS = [
    "Website Development",
    "Mobile App Development",
    "Graphic Design",
    "Video Editing",
    "Content Writing",
    "SEO Optimization",
    "Social Media Management",
    "Digital Marketing",
    "E-commerce Solutions",
    "Data Analysis",
];

const JoinVendorPromoSection = ({ banner }) => {
    const [activeModal, setActiveModal] = useState(false);

    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState("");
    const [errors, setErrors] = useState({});
    const [categorieData, setCategorieData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        // Step 1 fields
        name: "",
        email: "",
        phone: "",
        cityState: "",
        sellerType: "",
        offer: "",
        category: [],
        hearAbout: "",
    });
    const [formData2, setFormData2] = useState({
        logo: "",
        description: "",
        website: "",
        gst: "",
        experience: "",
        portfolio: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const router = useRouter();

    useEffect(() => {
        const savedData = localStorage.getItem("vendorForm");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Save data to localStorage when form changes
    useEffect(() => {
        localStorage.setItem("vendorForm", JSON.stringify(formData));
    }, [formData]);

    //calling the data and useEffecect for categories
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const fetchDataFromCategory = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/categories-with-products/`);
            if (response.status === 200) {
                setCategorieData(response.data.response);
            }
        } catch (error) {
            setErrors(error);
        }
    };

    useEffect(() => {
        fetchDataFromCategory();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let updatedValue = type === "checkbox" ? checked : value;
        if (name === "phone") {
            updatedValue = value.replace(/\D/g, "");
        }
        setFormData((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));

        // Live validate the single field
        setErrors((prev) => {
            const newErrors = { ...prev };
            const error = validateField(name, updatedValue);
            if (error) {
                newErrors[name] = error;
            } else {
                delete newErrors[name];
            }
            return newErrors;
        });
    };

    const handleChangeForm2 = (e) => {
        const { name, value, type, checked, files } = e.target;

        let updatedValue;
        if (type === "checkbox") {
            updatedValue = checked;
        } else if (type === "file") {
            updatedValue = files && files.length > 0 ? files[0] : null;
        } else {
            updatedValue = value;
        }

        setFormData2((prev) => ({
            ...prev,
            [name]: updatedValue,
            // if file, also store preview URL
            ...(type === "file" && updatedValue
                ? { [`${name}Preview`]: URL.createObjectURL(updatedValue) }
                : {}),
        }));

        setErrors((prev) => {
            const newErrors = { ...prev };
            if (!updatedValue) {
                newErrors[name] = `${name} is required`;
            } else {
                delete newErrors[name];
            }
            return newErrors;
        });
    };

    //  validation Fields
    const validateField = (name, value) => {
        switch (name) {
            case "name":
                return value.trim() === "" ? "Name is required" : "";

            case "email":
                if (value.trim() === "") return "Email is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? "Invalid email address" : "";

            case "phone":
                if (!value) return "Phone is required";
                return value.length < 10
                    ? "Phone number must be at least 10 digits"
                    : "";

            case "cityState":
                return value.trim() === "" ? "City & State required" : "";

            case "sellerType":
                return value.trim() === "" ? "Seller type required" : "";

            case "offer":
                return value.trim() === "" ? "Offer required" : "";

            // case "category":
            //   return value.trim() === "" ? "Category required" : "";

            case "category":
                return formData.category.length === 0
                    ? "At least one category required"
                    : "";

            case "hearAbout":
                return value.trim() === "" ? "This field is required" : "";

            default:
                return "";
        }
    };

    // Validate Step 1
    const validateStep1 = () => {
        let temp = {};
        Object.keys(formData).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) temp[field] = error;
        });
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };
    // Validate Step 2
    const validateStep2 = () => {
        let temp = {};
        if (!formData2.logo) temp.logo = "Logo/Profile is required";
        if (!formData2.description) temp.description = "Description required";
        if (!formData2.website) temp.website = "Website/Instagram required";
        if (!formData2.password) temp.password = "Password required";
        if (formData2.password !== formData2.confirmPassword)
            temp.confirmPassword = "Passwords do not match";
        if (!formData2.terms) temp.terms = "You must accept Terms & Conditions";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleNextFromStep1 = (e) => {
        e.preventDefault();
        if (validateStep1()) {
            setErrors({});
            setStep(2);
        }
    };

    // for the Form MultipartData handle here

    const handleRegisterFromStep2 = async (e) => {
        e.preventDefault();
        if (validateStep2()) {
            setErrors({});
            setLoading(true); // start loading

            try {
                const formDataToSend = new FormData();
                const [city, state, country, pincode] = formData.cityState
                    .split(",")
                    .map((s) => s.trim());

                console.log("Sending category_id:", JSON.stringify(formData.category));

                formDataToSend.append("full_name", formData.name);
                formDataToSend.append("email", formData.email);
                formDataToSend.append("phone_number", formData.phone);
                formDataToSend.append("city", city);
                formDataToSend.append("state", state);
                formDataToSend.append("country", country);
                formDataToSend.append("pincode", pincode);
                formDataToSend.append("seller_type", formData.sellerType);

                formDataToSend.append("category_id", JSON.stringify(formData.category));

                //         formData.category.forEach((cat) => {
                //   formDataToSend.append("category_id", cat);
                // });

                formDataToSend.append("profile_picture", formData2.logo);
                formDataToSend.append("website_link", formData2.website);

                formDataToSend.append("year_of_exp", formData2.experience);
                formDataToSend.append("password", formData2.password);
                formDataToSend.append("confirm_password", formData2.confirmPassword);
                formDataToSend.append("gst_document", formData2.gst);

                console.log([...formDataToSend]);

                for (let pair of formDataToSend.entries()) {
                    console.log(pair[0], pair[1]);
                }

                //  seller-registration

                const res = await axios.post(
                    "https://lowiwed-api.wooshelf.com/v1/api/seller-registation/",
                    formDataToSend,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
                console.log("SUCCESS:", res.data);

                if (res.status === 200) {
                    setStep(3);
                }
            } catch (error) {
                toast.error("Failed to user Register");
            } finally {
                setLoading(false); // stop loading no matter what
            }
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        try {
            const res = await axios.post(`${BASE_URL}/confirm-otp/`, {
                email: formData.email,
                otp,
            });

            if (res.status === 200) {
                const accessToken = res.data?.response?.access;

                if (accessToken) {
                    Cookies.set("access_token", accessToken, {
                        expires: 7,
                        secure: true,
                        sameSite: "strict",
                    });
                }

                localStorage.removeItem("vendorForm");
                setStep(4);
            } else {
                alert(res.data?.message || "Invalid OTP, please try again");
            }
        } catch (err) {
            alert(err.response?.data?.message || "OTP verification failed");
        }
    };


    return (
        <>
            {
                banner.map((ban, index) => {
                    return <div className={`${styles.mainContainer} mt-5`}
                        style={{
                            backgroundImage: `url(https://lowiwed-api.wooshelf.com/${ban?.image})`,

                        }}
                        key={ban.id}
                    >
                        <Container fluid="lg">
                            <Row className="align-items-center">
                                <Col lg={6} className={styles.leftContent}>
                                    <h2 className={styles.heading}>
                                        {/* <span className={styles.bold}>Resell </span>
                <span className={styles.or}>or </span>
                <span className={styles.bold}>Promote </span>
                Your Wedding <br /> Services & Products Here! */}
                                        {ban?.title}
                                    </h2>
                                    <p className={styles.description}>
                                        {/* Join our platform to list bridal outfits, jewelry, or wedding{" "}
                <br /> services. Reach thousands of brides-to-be. */}
                                        {ban.description}
                                    </p>
                                    <Button
                                        onClick={() => {
                                            setActiveModal(true);
                                        }}
                                        className={styles.ctaButton}
                                    >
                                        Registered as a Vendor
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                })
            }


            <Modal
                show={activeModal}
                onHide={() => {
                    if (step !== 3 && step !== 4) {
                        setActiveModal(false);
                    }
                }}
                size="lg"
                centered
                className={stylesM.modalWrapper}
                backdrop={step === 3 || step === 4 ? "static" : true}
                keyboard={!(step === 3 || step === 4)}
            >
                <Modal.Body className={`${stylesM.FormMainContainer} p-3`}>
                    {step !== 3 && step !== 4 && (
                        <Button
                            variant="link"
                            onClick={() => setActiveModal(false)}
                            className={stylesT.closeBtn}
                            aria-label="Close"
                        >
                            &times;
                        </Button>
                    )}
                    {/* here step 1  */}
                    {step === 1 && (
                        <div className={`${stylesM.FormMainContainer2Wraper} p-5`}>
                            <div
                                className={`${stylesM.logoOfBirdLowiwed} d-flex justify-content-start align-items-center cursor-pointer`}
                            >
                                <img
                                    src="/Images/ButterF.png"
                                    alt="Logo"
                                    className={stylesT.butterflyLogo}
                                    width={59}
                                    height={42}
                                    style={{ objectFit: "cover" }}
                                />
                                <span className={`${stylesM.brandTextF}`}>LowiWed</span>
                            </div>

                            <Row>
                                <h4
                                    className={`${styles.headingForm} fw-bold mb-4 text-center`}
                                >
                                    <u
                                        className="Archivo700"
                                        style={{
                                            color: "#8B8F9A",
                                            fontSize: "28px",
                                            lineHeight: "38px",
                                        }}
                                    >
                                        Join as a Vendor
                                    </u>
                                </h4>
                                <Col>
                                    <Form>
                                        <Form.Group className={`${errors.name ? "mb-0" : "mb-2"}`}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Your Name"
                                                className={`form-controll ${stylesM.formInput}`}
                                                // defaultValue={"Ankit"}
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            // isInvalid={!!errors.name}
                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback> */}
                                            {errors.name && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    {errors.name}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group className={`${errors.email ? "mb-0" : "mb-2"}`}>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                className={stylesM.formInput}
                                                required
                                            />
                                            {errors.email && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    {errors.email}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group className={`${errors.phone ? "mb-0" : "mb-2"}`}>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Mobile Number"
                                                className={stylesM.formInput}
                                                required
                                            />
                                            {errors.phone && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    {errors.phone}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group
                                            className={`${errors.cityState ? "mb-0" : "mb-2"}`}
                                        >
                                            <Form.Select
                                                className={stylesT.formInput2}
                                                name="cityState"
                                                value={formData.cityState}
                                                onChange={handleChange}
                                                // value={formData.country}
                                                // onChange={handleChange}
                                                required
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <option value="">City & State</option>
                                                {cityAndState.map((option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option === "Input text" ? "" : option}
                                                        disabled={option === "Input text"}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            {errors.cityState && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    {errors.cityState}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group
                                            className={`${errors.sellerType ? "mb-0" : "mb-2"}`}
                                        >
                                            <Form.Select
                                                className={stylesT.formInput2}
                                                name="sellerType"
                                                value={formData.sellerType}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <option value="">Seller Type</option>
                                                {sellerTyle.map((option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option === "Input text" ? "" : option}
                                                        disabled={option === "Input text"}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            {errors.sellerType && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    {errors.sellerType}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group className={`${errors.offer ? "mb-0" : "mb-2"}`}>
                                            <Form.Select
                                                className={stylesT.formInput2}
                                                name="offer"
                                                value={formData.offer}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <option value="">What do you offer</option>
                                                {offerS.map((option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option === "Input text" ? "" : option}
                                                        disabled={option === "Input text"}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            {errors.offer && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px", lineHeight: "0px" }}
                                                >
                                                    {errors.offer}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group
                                            className={`${errors.category ? "mb-0" : "mb-2"}`}
                                        >
                                            {/* <Form.Select
                        className={stylesT.formInput2}
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        style={{ backgroundColor: "transparent" }}
                      >
                        <option value="">Select Category</option>
                        {categorieData.map((op, Index) => (
                          <option key={op.Index} value={op.id}>
                            {op.name}
                          </option>
                        ))}
                      </Form.Select> */}
                                            <CategorySelect
                                                categorieData={categorieData}
                                                formData={formData}
                                                setFormData={setFormData}
                                                errors={errors}
                                            />

                                            {errors.category && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px", lineHeight: "0px" }}
                                                >
                                                    {errors.category}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <Form.Group
                                            className={`${errors.category ? "mb-0" : "mb-2"}`}
                                        >
                                            <Form.Select
                                                className={stylesT.formInput2}
                                                name="hearAbout"
                                                value={formData.hearAbout}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: "transparent" }}
                                            >
                                                <option value="">
                                                    From where do you here about us
                                                </option>
                                                {howDidYouHearOptions.map((option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option === "Input text" ? "" : option}
                                                        disabled={option === "Input text"}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            {errors.hearAbout && (
                                                <small
                                                    className="text-danger"
                                                    style={{ fontSize: "10px", lineHeight: "0px" }}
                                                >
                                                    {errors.hearAbout}
                                                </small>
                                            )}
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <button
                                                onClick={handleNextFromStep1}
                                                type="submit"
                                                className={`${stylesM.registerBtn} btn`}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    )}
                    {/* here step 2  */}
                    {step === 2 && (
                        <div className={`${stylesM.FormMainContainer2Wraper} p-5`}>
                            <div
                                className={`${stylesM.logoOfBirdLowiwed} d-flex justify-content-start align-items-center cursor-pointer`}
                            >
                                <img
                                    src="/Images/ButterF.png"
                                    alt="Logo"
                                    className={stylesT.butterflyLogo}
                                    width={59}
                                    height={42}
                                    style={{ objectFit: "cover" }}
                                />
                                <span className={`${stylesM.brandTextF}`}>LowiWed</span>
                            </div>

                            <Row>
                                <h4
                                    className={`${styles.headingForm} fw-bold mb-4 text-center`}
                                >
                                    <u
                                        className="Archivo700"
                                        style={{
                                            color: "#8B8F9A",
                                            fontSize: "28px",
                                            lineHeight: "38px",
                                        }}
                                    >
                                        Join as a Vendor
                                    </u>
                                </h4>
                                <Col>
                                    <form>
                                        <div className="mb-2">
                                            {/* {formData2.logoPreview && (
                        <div className="mt-2">
                          <img
                            src={formData2.logoPreview}
                            alt="Logo Preview"
                            style={{
                              width: "30px",
                              height: "30px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      )} */}
                                            <input
                                                type="file"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Upload logo / Profile Photo"
                                                name="logo"
                                                accept="image/*"
                                                onChange={handleChangeForm2}
                                            />
                                        </div>

                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Description/ About You"
                                                name="description"
                                                value={formData2.description}
                                                onChange={handleChangeForm2}
                                            />
                                            {errors.description && (
                                                <small className="text-danger">
                                                    {errors.description}
                                                </small>
                                            )}
                                        </div>

                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Website or Instagram url"
                                                name="website"
                                                value={formData2.website}
                                                onChange={handleChangeForm2}
                                            />
                                            {errors.website && (
                                                <small className="text-danger">{errors.website}</small>
                                            )}
                                        </div>

                                        <div className="mb-2">
                                            <input
                                                type="file"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="GST Number / Business reg. ( If applicable )"
                                                name="gst"
                                                // value={formData2.gst}
                                                onChange={handleChangeForm2}
                                            //  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                            />
                                            {errors.gst && (
                                                <small className="text-danger">{errors.gst}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Year of Experience"
                                                name="experience"
                                                value={formData2.experience}
                                                onChange={handleChangeForm2}
                                            />
                                            {errors.experience && (
                                                <small className="text-danger">
                                                    {errors.experience}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Portfolio or Sample Work"
                                                name="portfolio"
                                                value={formData2.portfolio}
                                                onChange={handleChangeForm2}
                                            />
                                            {errors.portfolio && (
                                                <small className="text-danger">
                                                    {errors.portfolio}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="password"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Password"
                                                name="password"
                                                value={formData2.password}
                                                onChange={handleChangeForm2}
                                            />
                                            {errors.password && (
                                                <small className="text-danger">{errors.password}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="password"
                                                className={`form-control ${stylesM.formInput}`}
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                                value={formData2.confirmPassword}
                                                onChange={handleChangeForm2}
                                            />
                                            {errors.confirmPassword && (
                                                <small className="text-danger">
                                                    {errors.confirmPassword}
                                                </small>
                                            )}
                                        </div>

                                        <div className={`${stylesM.termCondition} mb-2`}>
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                checked={formData2.terms}
                                                onChange={handleChangeForm2}
                                                className={stylesM.checkboxH}
                                            />
                                            <span className={stylesM.SpanForTermCondition}>
                                                I accept the term & privacy policy{" "}
                                            </span>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-center mt-2">
                                            {/* <button  className={`${stylesM.BackBtn} btn cursor-pointer`}>
        Back
      </button> */}
                                            <button
                                                type="submit"
                                                className={`${stylesM.PreviewBtn} btn`}
                                                onClick={() => setStep(1)}
                                                disabled={loading}
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                onClick={handleRegisterFromStep2}
                                                className={`${stylesM.RegisterBtn} btn`}
                                                disabled={loading}
                                            >
                                                {loading ? "Loading..." : "Register"}
                                            </button>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </div>
                    )}

                    {/* here step 3  */}
                    {step == 3 && (
                        <div className={`${stylesM.FormMainContainer2Wraper2} p-5`}>
                            <div
                                className={`${stylesM.logoOfBirdLowiwed} d-flex justify-content-start align-items-center cursor-pointer p-2`}
                            >
                                <img
                                    src="/Images/ButterF.png"
                                    alt="Logo"
                                    className={stylesT.butterflyLogo}
                                    width={69}
                                    height={42}
                                    style={{ objectFit: "cover" }}
                                />
                                {/* <span className={`${stylesM.brandTextF}`}>LowiWed</span> */}
                            </div>

                            <Row>
                                <form action="">
                                    <div className="mb-2">
                                        <h4
                                            style={{
                                                color: "#8B8F9A",
                                                fontSize: "24px",
                                                lineHeight: "38px",
                                                fontFamily: "Inter",
                                            }}
                                        >
                                            Enter Your Otp
                                        </h4>
                                        <input
                                            type="text"
                                            className={`form-control ${stylesM.formInput}`}
                                            placeholder="Enter Your Otp here..."
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="submit"
                                            className={`${stylesM.RegisterBtn} btn tex-end`}
                                            onClick={handleVerifyOtp}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </Row>
                        </div>
                    )}

                    {/* here step 4  */}
                    {step === 4 && (
                        <div className={`${stylesM.FormMainContainer2Wraper2} p-5`}>
                            <div
                                className={`${stylesM.logoOfBirdLowiwed} d-flex justify-content-start align-items-center cursor-pointer p-2`}
                            >
                                <img
                                    src="/Images/ButterF.png"
                                    alt="Logo"
                                    className={stylesT.butterflyLogo}
                                    width={69}
                                    height={42}
                                    style={{ objectFit: "cover" }}
                                />
                                <span className={`${stylesM.brandTextF}`}>LowiWed</span>
                            </div>

                            <Row>
                                {/* Form */}
                                <div className="text-center mt-5">
                                    <img src="/Images/Write.png" alt="" width={63} height={63} />
                                    <h1 className={stylesM.headingSuccessMessage}>
                                        Registration Submitted Successfully!
                                    </h1>
                                    <p className={stylesM.paragraphThankYou}>
                                        Thank you for registering as a vendor on LoWiwed
                                    </p>

                                    <div>
                                        <p className={stylesM.teamsMessage}>
                                            Our team is reviewing your application. You will <br />{" "}
                                            recieve an update via email once your account <br />
                                            is approved and activated.
                                        </p>
                                    </div>

                                    <div className="d-flex gap-3 justify-content-center mt-3 pt-4">
                                        <button
                                            type="submit"
                                            className={`${stylesM.GoToHomePage} btn`}
                                            onClick={() => router.push("/seller/dashboard/d")}
                                        >
                                            Go to Homepage
                                        </button>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    )}
                    {/* </div> */}
                </Modal.Body>

                <div>
                    <div className="flower">
                        <img
                            src="/Images/Beauti_Flower1.png"
                            alt="Left Flower"
                            width={230}
                            height={102}
                            className="flower1"
                        />
                        <img
                            src="/Images/Beauti_Flower1.png"
                            alt="Left Flower"
                            width={230}
                            height={102}
                            className="flower2"
                        />
                    </div>

                    {/* Right Flower */}
                    <div className="flower">
                        <img
                            src="/Images/Beauti_Flower1.png"
                            alt="Right Flower"
                            width={230}
                            height={102}
                            className="flower3"
                        />
                        <img
                            src="/Images/Beauti_Flower1.png"
                            alt="Right Flower"
                            width={230}
                            height={102}
                            className="flower4"
                        />
                    </div>
                </div>

                <style jsx>{`
          // Groth Section

          .flower {
            opacity: 0.69;
            z-index: 1000;
          }

          .flower1 {
            position: absolute;
            left: -90px;
            bottom: 30px;
            transform: rotate(-90deg) scale(-1, 1);
          }
          .flower2 {
            position: absolute;
            left: -20px;
            bottom: -30px;
            transform: rotate(0deg) scale(-1);
          }

          .flower3 {
            position: absolute;
            right: -90px;
            top: 30px;
            transform: rotate(-90deg) scaleY(-1);
          }
          .flower4 {
            position: absolute;
            right: -20px;
            top: -30px;
            transform: rotate(0deg) scaleY(1);
          }
        `}</style>
            </Modal>

            {/* step Two Modal  */}
        </>
    );
};

export default JoinVendorPromoSection;
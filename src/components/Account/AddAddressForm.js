import React, { useEffect, useState } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import stylesM from "../../styles/YourAccount/Addresses.module.css";

const AddAddressForm = ({
    handleClose,
    refreshAddresses,
    mode = "add",
    editData = null,
}) => {
    const [formData, setFormData] = useState({
        full_name: "",
        address_line1: "",
        city: "",
        state: "",
        pin_code: "",
        mobile_number: "",
        is_default: false,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const token = Cookies.get("access_token");
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        if (mode === "edit" && editData) {
            setFormData(editData);
        }
    }, [editData, mode]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "mobile_number") {
            const numericValue = value.replace(/\D/g, ""); // remove non-digits
            setFormData((prev) => ({
                ...prev,
                [name]: numericValue,
            }));
        } else if (name === "pin_code") {
            const numericValue = value.replace(/\D/g, "");
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
        }
        else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };


    const validate = () => {
        let newErrors = {};

        if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
        if (!formData.address_line1.trim()) newErrors.address_line1 = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state.trim()) newErrors.state = "State is required";

        if (!/^\d{6}$/.test(formData.pin_code)) newErrors.pin_code = "Pincode must be 6 digits";
        if (!/^\d{10}$/.test(formData.mobile_number)) newErrors.mobile_number = "Mobile number must be 10 digits";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;
        setLoading(true);

        try {
            if (mode === "add") {
                const response = await axios.post(`${BASE_URL}/addresses/`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (response.status === 200) {
                    toast.success(response.data.message);
                    refreshAddresses();
                    handleClose();
                }
            } else if (mode === "edit" && editData?.id) {
                const response = await axios.put(
                    `${BASE_URL}/addresses/${editData.id}/`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                if (response.status === 200) {
                    toast.success(response.data.message);
                    refreshAddresses();
                    handleClose();
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.response || "Failed to add address");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className={`${stylesM.formCard} mb-3`}>
            <Card.Header className={stylesM.formHeaderAddress}>
                <h5 className={stylesM.NewAddressFormHeading}>
                    {" "}
                    {mode === "edit" ? "Edit Address" : "Add New Address"}
                </h5>
                <AiOutlineClose
                    style={{ cursor: "pointer", fontSize: "20px" }}
                    onClick={handleClose}
                    className={stylesM.CloseButtonFormAddress}
                />
            </Card.Header>

            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2">
                        <Form.Label className={stylesM.LabelName}>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="full_name"
                            placeholder="Enter Your Name"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                            className={stylesM.formFillMainCon}
                            isInvalid={!!errors.full_name}
                        />
                        <Form.Control.Feedback type="invalid">{errors.full_name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label className={stylesM.LabelName}>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address_line1"
                            placeholder="Enter Address..."
                            value={formData.address_line1}
                            onChange={handleChange}
                            required
                            className={stylesM.formFillMainCon}
                            isInvalid={!!errors.address_line1}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address_line1}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label className={stylesM.LabelName}>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            placeholder="Enter City..."
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className={stylesM.formFillMainCon}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label className={stylesM.LabelName}>State</Form.Label>
                        <Form.Control
                            type="text"
                            name="state"
                            placeholder="Enter State Name..."
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className={stylesM.formFillMainCon}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label className={stylesM.LabelName}>Pincode</Form.Label>
                        <Form.Control
                            type="text"
                            name="pin_code"
                            value={formData.pin_code}
                            onChange={handleChange}
                            placeholder="Enter PinCode Number.."
                            required
                            className={stylesM.formFillMainCon}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label className={stylesM.LabelName}>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="mobile_number"
                            placeholder="Enter Mobile Number"
                            value={formData.mobile_number}
                            onChange={handleChange}
                            required
                            className={stylesM.formFillMainCon}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        label="Set as Default Address"
                        name="is_default"
                        checked={formData.is_default}
                        onChange={handleChange}
                        className={stylesM.customCheckbox}
                    />

                    <div className="text-center mt-3">
                        <Button
                            type="submit"
                            className={stylesM.submitBtnForSave}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    {" "}
                                    <Spinner animation="border" size="sm" className="me-2" />{" "}
                                    Saving...
                                </>
                            ) : mode === "edit" ? (
                                "Update Address"
                            ) : (
                                "Save Address"
                            )}
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddAddressForm;

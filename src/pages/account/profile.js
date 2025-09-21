import React, { useEffect, useState } from "react";
import styles from "../../styles/YourAccount/profileDetail.module.css";
import { Container, Button, Table, Spinner, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAuth } from "@/common/AuthContext";
import ProfileSidebar from "@/components/Account/ProfileSidebar";
import Header from "@/common/Header";
import Navbar from "@/common/Navbar";

const profile = () => {
    const {
        userData,
        message,
        updateUser,
        tempProfilePicFile,
        resetTempProfilePic,
    } = useAuth();

    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState(userData || {});

    //  Update form fields when userData changes
    useEffect(() => {
        if (userData) {
            setFormData(userData);
        }
    }, [userData]);


    //  Handle input change
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleUpdate = async () => {
        setLoading(true);
        try {
            let payload = new FormData();

            // append all text fields
            Object.keys(formData).forEach((key) => {
                if (
                    key !== "profile_picture" && // skip profile_picture string path
                    formData[key] !== undefined &&
                    formData[key] !== null
                ) {
                    payload.append(key, formData[key]);
                }
            });


            // append image only if selected
            if (tempProfilePicFile) {
                payload.append("profile_picture", tempProfilePicFile);
            }



            const res = await updateUser(payload);
            toast.success(message);
            resetTempProfilePic();
            setEditMode(false);
        } catch (err) {
            console.error(err);
            // toast.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };


    //  Loading spinner jab data fetch nahi hua
    if (!userData) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "300px" }}
            >
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <Header />
            <Navbar />
            <div className="d-flex gap-4  px-5">
                {/* Sidebar component */}
                <ProfileSidebar />
                <Container className={`${styles.profileContainer} mt-4`}>
                    <h5 className={`${styles.HeadingOfPDet} fw-semibold`}>
                        Profile Details
                    </h5>

                    <Table bordered className={styles.detailsTable}>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>
                                    {editMode ? (
                                        <Form.Control
                                            type="text"
                                            name="full_name"
                                            value={formData.full_name || ""}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        userData.full_name || "- not added -"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>
                                    {editMode ? (
                                        <Form.Control
                                            type="text"
                                            name="phone_number"
                                            value={formData.phone_number || ""}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        userData.phone_number || "- not added -"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Email ID</td>
                                <td>{userData.email || "- not added -"}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    {editMode ? (
                                        <Form.Select
                                            name="gender"
                                            value={formData.gender || ""}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Form.Select>
                                    ) : (
                                        userData.gender || "- not added -"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>
                                    {editMode ? (
                                        <Form.Control
                                            type="date"
                                            name="dob"
                                            value={formData.dob || ""}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        userData.dob || "- not added -"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>
                                    {editMode ? (
                                        <Form.Control
                                            type="text"
                                            name="location"
                                            value={formData.location || ""}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        userData.location || "- not added -"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Alternate Mobile</td>
                                <td>
                                    {editMode ? (
                                        <Form.Control
                                            type="text"
                                            name="alternative_mobile_number"
                                            value={formData.alternative_mobile_number || ""}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        userData.alternative_mobile_number || "- not added -"
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Hint Name</td>
                                <td>
                                    {editMode ? (
                                        <Form.Control
                                            type="text"
                                            name="hint_name"
                                            value={formData.hint_name || ""}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        userData.hint_name || "- not added -"
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    {editMode ? (
                        <div className="d-flex gap-2">
                            <Button
                                variant="success"
                                onClick={handleUpdate}
                                disabled={loading}
                                className={styles.editBtn}
                            >
                                {loading ? "Saving..." : "Save"}
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => setEditMode(false)}
                                disabled={loading}
                            >
                                Cancel
                            </Button>
                        </div>
                    ) : (
                        <Button className={styles.editBtn} onClick={() => setEditMode(true)}>
                            EDIT
                        </Button>
                    )}
                </Container>
            </div>
        </>
    );
};

export default profile;

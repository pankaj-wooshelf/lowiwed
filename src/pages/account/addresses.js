import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import styles from "../../styles/YourAccount/Allorder.module.css";
import stylesM from "../../styles/YourAccount/Addresses.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
// import AddAddressModal from "./AddAddressModal";
import AddAddressForm from "@/components/Account/AddAddressForm";
import Header from "@/common/Header";
import Navbar from "@/common/Navbar";
import ProfileSidebar from "@/components/Account/ProfileSidebar";

// ... repeat as needed

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Addresses = () => {
    const [address, setAddress] = useState([]);
    const [defaultAddress, setDefautAddress] = useState(null);
    const [otherAddress, setotherAddress] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState(null);
    const [mode, setMode] = useState("add");

    const refreshAddresses = () => {
        fetchAddress();
    };

    useEffect(() => {
        fetchAddress();
    }, []);

    const token = Cookies.get("access_token");

    // const token = Cookies.get('access_token')
    const fetchAddress = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/addresses/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                console.log(response.data.response);

                const data = response.data.response;
                const def = data.find((d) => d.is_default);
                const others = data.filter((d) => !d.is_default);
                setDefautAddress(def);
                setotherAddress(others);
                setAddress(data);
            }
        } catch (error) {
            toast.error(error.response?.data?.response);
        }
    };

    const handleDefault = async (id) => {
        try {
            const response = await axios.put(
                `${BASE_URL}/addresses/${id}/`,
                {
                    is_default: true,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const updated = address.map((a) =>
                a.id === id ? { ...a, is_default: true } : { ...a, is_default: false }
            );

            const def = updated.find((d) => d.is_default);
            const others = updated.filter((d) => !d.is_default);
            if (response.status === 200) {
                setAddress(updated);
                setDefautAddress(def);
                setotherAddress(others);
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.response);
        }
    };

    const handleDeleteAddress = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/addresses/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                toast.success(response.data.message);

                const updated = address.filter((a) => a.id !== id);
                const def = updated.find((d) => d.is_default);
                const others = updated.filter((d) => !d.is_default);

                setAddress(updated);
                setDefautAddress(def);
                setotherAddress(others);
            }
        } catch (error) {
            toast.error(error.response?.data?.response);
        }
    };
    return (
        <>
            <Header />
            <Navbar />
            <div className="d-flex gap-4  px-5">
                {/* Sidebar component */}
                <ProfileSidebar />


                <div className="mt-5">
                    {/* Header Row */}
                    <Row className="align-items-center justify-content-between mb-3">
                        <Col md={6}>
                            <h4 className={styles.heading}>All Orders</h4>
                        </Col>
                        <Col
                            md={6}
                            className="text-md-end d-flex justify-content-end align-items-center gap-2"
                        >
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    className={`${styles.searchInput}`}
                                />
                                <Button className={styles.Searchbtn}>
                                    <BiSearchAlt />
                                </Button>
                            </div>
                            <Button variant="light" className={styles.filterBtn}>
                                <i className="bi bi-sliders"></i> Filters
                            </Button>
                        </Col>
                        <hr />
                    </Row>

                    <Container>
                        <div className={stylesM.mainDiv}>
                            <div className={`${stylesM.headAndBtnCon} mb-3`}>
                                <h4>Saved Addresses</h4>
                                <div>
                                    <Button
                                        className={stylesM.NewAdressBtn}
                                        onClick={() => {
                                            setMode("add");
                                            setEditData(null);
                                            setShowForm(true);
                                        }}
                                    >
                                        + ADD NEW ADDRESS
                                    </Button>

                                    {/* <AddAddressModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        refreshAddresses={refreshAddresses}
      /> */}
                                </div>
                            </div>

                            {/* {defaultAddress && (
  <div className={`${styles.DefaultAdressesMain} mb-2`}>
    <h6 className={stylesM.addresTitle}>DEFAULT ADDRESS</h6>
    <Card className={stylesM.DefaultAdressesMainInside}>
      <div>
        <div className={stylesM.headingBtnD}>
          <h6>{defaultAddress.full_name}</h6>
          <Button className={stylesM.btnDefaultA}>Home</Button>
        </div>
        <p className={stylesM.paragraphaddress}>
          {defaultAddress.address_line1}, {defaultAddress.city},{" "}
          {defaultAddress.state} - {defaultAddress.pin_code} <br />
          Mobile: {defaultAddress.mobile_number}
        </p>
      </div>
      <div className="d-flex jusify-content-center" style={{ height: "45px" }}>
        <Card className={`${stylesM.cardEditAndREmo} w-50 rounded-0 text-center`}>EDIT</Card>
        <Card className={`${stylesM.cardEditAndREmo} w-50 rounded-0 text-center`} onClick={()=>handleDeleteAddress(defaultAddress.id)}>REMOVE</Card>
      </div>
    </Card>
  </div>
)} */}

                            <AnimatePresence>
                                {showForm && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <AddAddressForm
                                            handleClose={() => setShowForm(false)}
                                            refreshAddresses={refreshAddresses}
                                            mode={mode}
                                            editData={editData}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {defaultAddress && (
                                    <motion.div
                                        key={defaultAddress.id}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.4 }}
                                        className={`${styles.DefaultAdressesMain} mb-2`}
                                    >
                                        {/* <div> */}
                                        <h6 className={stylesM.addresTitle}>DEFAULT ADDRESS</h6>
                                        <Card
                                            className={`${stylesM.DefaultAdressesMainInside} shadow`}
                                        >
                                            <div>
                                                <div className={stylesM.headingBtnD}>
                                                    <h6>{defaultAddress.full_name}</h6>
                                                    <Button className={stylesM.btnDefaultA}>Home</Button>
                                                </div>
                                                <p className={stylesM.paragraphaddress}>
                                                    {defaultAddress.address_line1}, {defaultAddress.city},{" "}
                                                    {defaultAddress.state} - {defaultAddress.pin_code}{" "}
                                                    <br />
                                                    Mobile: {defaultAddress.mobile_number}
                                                </p>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center"
                                                style={{ height: "45px" }}
                                            >
                                                <Card
                                                    className={`${stylesM.cardEdit} w-50 rounded-0 text-center`}
                                                    onClick={() => {
                                                        setMode("edit");
                                                        setEditData(defaultAddress);
                                                        setShowForm(true);
                                                    }}
                                                >
                                                    EDIT
                                                </Card>
                                                <Card
                                                    as={motion.div}
                                                    whileHover={{ backgroundColor: "transparent" }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className={`${stylesM.cardREmove} w-50 rounded-0 text-center`}
                                                    onClick={() => handleDeleteAddress(defaultAddress.id)}
                                                >
                                                    REMOVE
                                                </Card>
                                            </div>
                                        </Card>
                                        {/* </div> */}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-4">
                                <h5 className={`${stylesM.addresTitle} px-1`}>OTHER ADDRESSES</h5>
                                {/* {
                  otherAddress.map((d)=>(
                  <Card key={d.id} className='mb-3'>
                    <div className={stylesM.headingBtnD}><h6>{d.full_name}</h6>
                    <Button className={`${stylesM.btnDefaultA} pl-2`}>Home</Button>
                
                </div>
                    <p className={`${stylesM.paragraphaddress} d-flex flex-column px-2`}>
                         {d.address_line1}, {d.city}, {d.state} -{" "}
                  {d.pin_code}
                  <br />
                  Mobile: {d.mobile_number}
                    </p>

                    <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleDefault(d.id)}
                  className={stylesM.setDefaultBtnH}
                >
                  Set as Default

                </Button>
                </Card>
                  ))
                } */}

                                <AnimatePresence>
                                    {otherAddress.map((d) => (
                                        <motion.div
                                            key={d.id}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 30 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card
                                                className={`${stylesM.cardForOtherAddressCard} mb-3 shadow-sm`}
                                            >
                                                <div className={stylesM.headingBtnD}>
                                                    <h6>{d.full_name}</h6>
                                                    <Button className={`${stylesM.btnDefaultA} pl-2`}>
                                                        Home
                                                    </Button>
                                                </div>
                                                <p
                                                    className={`${stylesM.paragraphaddress} d-flex flex-column px-2`}
                                                >
                                                    {d.address_line1}, {d.city}, {d.state} - {d.pin_code}
                                                    <br />
                                                    Mobile: {d.mobile_number}
                                                </p>

                                                <motion.button
                                                    whileHover={{
                                                        scale: 1.1,
                                                        backgroundColor: "transparent",
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handleDefault(d.id)}
                                                    className={stylesM.setDefaultBtnH}
                                                >
                                                    Set as Default
                                                </motion.button>

                                                {/* <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "transparent" }}
          whileTap={{ scale: 0.9 }}
          className={`${stylesM.cardEditAndREmo} mt-2 text-center`}
          onClick={() => handleDeleteAddress(d.id)}
        >
          REMOVE
        </motion.div> */}
                                            </Card>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {/* <Card className='mb-2'>
                    <div className={stylesM.headingBtnD}><h6>Divya Singh</h6>
                    <Button className={`${stylesM.btnDefaultA} pl-2`}>OFFICE</Button>
                
                </div>
                    <p className={`${stylesM.paragraphaddress} d-flex flex-column px-2`}>
                        <span>D-155, Globalhunt Technologies... </span>
                        <span>Noida Gautam Buddha Nagar - </span>
                        <span>201301</span>
                    </p>
                </Card> */}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>

    );
};

export default Addresses;

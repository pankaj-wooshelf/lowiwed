import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Spinner,
} from "react-bootstrap";
import styles from "../../styles/YourAccount/FrequentlyAskedQuestions.module.css";
import { FaRegUser } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import {
    LuAlignCenter,
    LuAlignJustify,
    LuAlignLeft,
    LuAlignRight,
    LuBold,
    LuCircleHelp,
    LuCode,
    LuFileText,
    LuImage,
    LuItalic,
    LuLink,
    LuList,
    LuListOrdered,
    LuPalette,
    LuUnderline,
} from "react-icons/lu";
import { MdOutlineAttachment } from "react-icons/md";

// import RactangleImg from '../../../public/Icons/Ractangle'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const RaiseASupport = () => {
    const [loading, setLoading] = useState(false);
    const [support, setSupport] = useState({
        subject: "",
        message: "",
        attachment: null,
    });

    const token = Cookies.get("access_token");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        let updatedValue;

        if (type === "file") {
            updatedValue = files && files.length > 0 ? files[0] : null;
        } else {
            updatedValue = value;
        }
        setSupport((prev) => ({ ...prev, [name]: updatedValue }));
    };

    const handleSupportTicket = async (e) => {
        e.preventDefault();
        if (!support.subject || !support.message || !support.attachment) {
            toast.error("All fileds are reequired...");
            return;
        }
        setLoading(true);

        const formData = new FormData();

        formData.append("subject", support.subject);
        formData.append("message", support.message);
        formData.append("attachment", support.attachment);
        try {
            const response = await axios.post(
                `${BASE_URL}/create-support-ticket/`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status == 200) {
                toast.success(response.data.message);

                //          const newTicket = {
                //   ...response.data.ticket,
                //   last_update: new Date().toISOString(),
                // };

                setSupport({
                    subject: "",
                    message: "",
                    attachment: null,
                });
            }
        } catch (error) {
            toast.error("failed to ticket upload...");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="mt-5">
            {/* <Row className="align-items-center justify-content-between mb-3">
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
      </Row> */}

            <div className={styles.supportWrapper}>
                <Container>
                    <h4 className={styles.headingRaiseingSupport}>
                        Raise a Support Request
                    </h4>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Label className={styles.LabelOfForms}>Subject</Form.Label>
                            <div className={styles.inputSubject}>
                                <FaRegUser className={styles.iconUser} />
                                <Form.Control
                                    type="text"
                                    placeholder="Subject"
                                    className={styles.forminputH}
                                    name="subject"
                                    value={support.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <Form.Label className={styles.LabelOfForms}>
                                Categories
                            </Form.Label>
                            <div className={styles.inputSubject}>
                                <CgMail className={styles.emailIcon} />
                                <Form.Select className={styles.forminputH}>
                                    <option className={styles.forminputH}>
                                        Select categories
                                    </option>
                                    <option>General</option>
                                    <option>Billing</option>
                                    <option>Technical</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>

                    <Form.Group className="mb-4">
                        <Form.Label className={styles.LabelOfForms}>Message</Form.Label>
                        <div className={styles.editorToolbar}>
                            {/* Fake toolbar */}
                            <div className={styles.toolbarIcons}>
                                <LuPalette className={styles.iconsForAllignmen} />
                                <LuBold className={styles.iconsForAllignmen} />
                                <LuItalic className={styles.iconsForAllignmen} />
                                <LuUnderline className={styles.iconsForAllignmen} />

                                <Form.Select
                                    className={styles.InsidemessageSelectfield}

                                >
                                    <option>sans-serif</option>
                                    <option>General</option>
                                    <option>Billing</option>
                                    <option>Technical</option>
                                </Form.Select>

                                <Form.Select
                                    className={`${styles.AFormSelectMessage} px-0`}
                                    style={{ width: "30px", fontSize: "14px" }}
                                >
                                    <option>A</option>
                                    <option>General</option>
                                    <option>Billing</option>
                                    <option>Technical</option>
                                </Form.Select>

                                <div className={styles.allignmentForTextDrc}>
                                    <LuAlignLeft className={styles.iconsForAllignmen} />
                                    <LuAlignCenter className={styles.iconsForAllignmen} />
                                    <LuAlignRight className={styles.iconsForAllignmen} />
                                    <LuAlignJustify className={styles.iconsForAllignmen} />
                                    <LuList />
                                    <LuListOrdered className={styles.iconsForAllignmen} />
                                    <LuLink className={styles.iconsForAllignmen} />
                                    <LuImage className={styles.iconsForAllignmen} />
                                    <LuFileText className={styles.iconsForAllignmen} />
                                    <LuCode className={styles.iconsForAllignmen} />
                                    <LuCircleHelp className={styles.iconsForAllignmen} />
                                </div>

                                {/* <img src="/Icons/Button4.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/> */}

                                {/* <img src="/Icons/Button5.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button6.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button7.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button8.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button9.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button10.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button11.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button12.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button13.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/>
             <img src="/Icons/Button14.png" alt="" width={25} height={25}  className={styles.messageiconsimportant}/> */}
                                {/* <span><b>B</b></span>
              <span><i>I</i></span>
              <span><u>U</u></span>
              <span>A ▼</span> */}
                                {/* Add more icons as needed */}
                            </div>
                        </div>
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="Write your Text Here…."
                            className={styles.formsCMemmsageMainBoxText}
                            name="message"
                            value={support.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className={styles.LabelOfForms}>Attachment</Form.Label>
                        <div className={styles.inputSubject}>
                            <label htmlFor="customFile" className={styles.customFileLabel}>
                                <FaRegUser className={styles.iconUser} />
                                <MdOutlineAttachment className={styles.attachmentFileIcon} /> {" "}
                                {support.attachment ? support.attachment.name : "Upload File"}
                            </label>
                            <Form.Control
                                type="file"
                                id="customFile"
                                className={styles.hiddenFileInput}
                                accept="image/png, image/jpeg"
                                name="attachment"
                                // value={support.attachment}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>

                    <Button
                        type="submit"
                        className={styles.submitBtn}
                        onClick={handleSupportTicket}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                Submitting...
                            </>
                        ) : (
                            <>
                                <img src="/Icons/Group1.png" alt="a" width={12} height={12} />
                                Submit Ticket
                            </>
                        )}
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default RaiseASupport;

import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Form, Button, ListGroup, Image, Spinner } from "react-bootstrap";
import Cookies from "js-cookie";
// import "./ChatUI.css";

export default function ChatUI() {
    const [productId, setProductId] = useState();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [activeChat, setActiveChat] = useState("Loading...");
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [receiverDetails, setReceiverDetails] = useState(null);



    const fetchChatMessages = (id) => {
        if (!id) return;
        setLoading(true);
        const token = Cookies.get("access_token");
        axios
            .get(`http://16.170.165.144/v1/api/get-chat-messages/?product_id=${id}`, {
                headers: {
                    Authorization:
                        `Bearer ${token}`,
                },
            })
            .then((response) => {
                const apiResponse = response.data.response;

                // Extract chat messages
                const chatMessages = apiResponse.message.map((msg) => ({
                    sender: msg.message_author === "buyer" ? "user" : "store",
                    text: msg.message,
                    time: new Date(msg.timestamp).toLocaleTimeString(),
                }));
                setMessages(chatMessages.reverse());

                // Assuming the first message in the array contains the required details
                if (apiResponse.message.length > 0) {
                    const firstMessage = apiResponse.message[0];

                    // Extract and set product details
                    setProductDetails(firstMessage.product_detail || {});

                    // Extract and set receiver details
                    setReceiverDetails({
                        name: firstMessage.receiver_detail?.full_name || "Unknown Store",
                        avatar: firstMessage.receiver_detail?.profile_picture || "/images/logo.png",
                        senderImg: firstMessage.sender_detail?.profile_picture || "/images/logo.png",
                    });

                    // Set active chat name
                    setActiveChat(firstMessage.receiver_detail?.full_name || "Unknown Store");
                } else {
                    // Handle empty chat case
                    setProductDetails(null);
                    setReceiverDetails(null);
                    setActiveChat("No Chat History");
                }
            })
            .catch((error) => {
                console.error("Error fetching messages:", error);
                setMessages([]);
                setProductDetails(null);
                setReceiverDetails(null);
                setActiveChat("Error loading chat");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Function to fetch the list of all chats
    const fetchChatList = () => {
        const token = Cookies.get("access_token");
        axios
            .get("http://16.170.165.144/v1/api/get-chat-messages/", {
                headers: {
                    Authorization:
                        `Bearer ${token}`,
                },
            })
            .then((response) => {
                const chatList = response.data.response.map((chat) => ({
                    id: chat.product_listing,
                    name: chat.receiver_detail?.full_name || "Unknown Store",
                    lastMessage: chat.message,
                    time: new Date(chat.timestamp).toLocaleTimeString(),
                    logo: chat.receiver_detail?.profile_picture || "/images/logo.png",
                    pending_message_buyer: chat.pending_message_buyer,
                }));
                setChats(chatList.reverse());
            })
            .catch((error) => {
                console.error("Error fetching chat list:", error);
            });
    };

    // Use a separate useEffect for the initial chat list fetch
    useEffect(() => {
        fetchChatList();
        fetchChatMessages(productId);
    }, []);

    const handleRefresh = () => {
        fetchChatList();
        fetchChatMessages(productId);
    };

    // Use a separate useEffect for the initial chat list fetch
    useEffect(() => {
        handleRefresh(); // Call the refresh function on initial load
    }, []);


    // Use another useEffect to fetch messages when productId changes
    useEffect(() => {
        if (productId) {
            fetchChatMessages(productId);
        }
    }, [productId]);

    const handleSend = () => {
        if (!input) return;
        setLoading(true);
        const token = Cookies.get("access_token");
        axios
            .post(
                "http://16.170.165.144/v1/api/chat-send-message/",
                {
                    message: input,
                    product_listing: productId,
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            )
            .then(() => {
                setInput("");
                // After sending, refresh messages to show the new one
                fetchChatMessages(productId);
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Row className="m-0 flex-grow-1" style={{ height: "100vh" }}>
            {/* Sidebar for Recent Chats (Same as previous response) */}
            <Col className="col-4 p-3 bg-light border d-flex flex-column" style={{ overflowY: "auto", maxHeight: "100vh", }}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center my-1">
                        <h6 className="mb-0">Online Now</h6>
                        {/* <span className="text-muted">{chats.length}</span> */}
                        <Button variant="light" onClick={handleRefresh} disabled={loading} className="p-0">
                            {loading ? (
                                <Spinner animation="border" size="sm" />
                            ) : (
                                <i className="bi bi-arrow-clockwise" style={{ fontSize: "1.2rem" }}></i>
                            )}
                        </Button>
                    </div>
                    <div className="d-flex flex-row  mb-4">
                        {chats.slice(0, 3).map((chat, index) => (
                            <div key={index} className="online-avatar-container position-relative me-3" onClick={() => setProductId(chat.id)}>
                                <Image
                                    src={`https://lowiwed-api.wooshelf.com${chat.logo}`}
                                    roundedCircle
                                    width="60"
                                    height="60"
                                    style={{ border: "2px solid #5cb85c" }}
                                />
                                {/* <span className="online-status-dot position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"></span> */}
                            </div>
                        ))}
                    </div>
                    <hr className="mt-4 mb-4" />
                    <h6 className="mb-4">Chat</h6>
                    <ListGroup>
                        {chats.map((chat, index) => (
                            <ListGroup.Item
                                key={index}
                                action
                                onClick={() => setProductId(chat.id)}
                                className="d-flex align-items-center p-3 mb-3 border-0 "
                                style={{ backgroundColor: chat.id === productId ? "#FBEAEA9C" : "transparent", borderRadius: "10px", cursor: "pointer" }}
                            >
                                <div className="position-relative me-3">
                                    <Image
                                        src={`https://lowiwed-api.wooshelf.com${chat.logo}`}
                                        roundedCircle
                                        width="50"
                                        height="50"
                                    />
                                    {/* <span className="online-status-dot position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"></span> */}
                                </div>
                                <div className="d-flex flex-column flex-grow-1">
                                    <h6 className="mb-0">{chat.name}</h6>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                                        {chat.lastMessage ? chat.lastMessage.substring(0, 25) + "..." : "No message"}
                                    </p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <span className="text-muted mb-1" style={{ fontSize: "0.8rem" }}>
                                        {chat.time.split(" ")[0]}
                                    </span>
                                    <span className="unread-badge  rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px", fontSize: "0.75rem", backgroundColor: "#E6B8BF" }}>
                                        {chat.pending_message_buyer}
                                    </span>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Col>

            {/* Main Chat Area */}
            <Col className="col-8  d-flex flex-column p-0 border" style={{ maxHeight: "100vh", backgroundColor: "#FBEAEAB0" }}>
                {/* Chat Header (Receiver's Info) */}
                <Card className="shadow bg-light border-0 rounded-0">
                    <Card.Body className="d-flex bg-light align-items-center">
                        <div className="position-relative me-3">
                            <Image
                                src={`https://lowiwed-api.wooshelf.com${receiverDetails?.avatar}`}
                                roundedCircle
                                width="40"
                                height="40"
                                className="border border-primary"
                            />
                            {/* <span className="online-status-dot position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"></span> */}
                        </div>
                        <div>
                            <h6 className="mb-0 text-dark">{receiverDetails?.name || "Loading..."}</h6>
                            <small className="text-success">
                                <i className="bi bi-circle-fill" style={{ fontSize: "0.6rem" }}></i> Online
                            </small>
                        </div>
                    </Card.Body>
                </Card>

                {/* Chat Messages */}
                <div className="flex-grow-1 overflow-auto  p-2 py-5 rounded-0" >
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : (
                        messages.map((msg, idx) => (
                            <div key={idx} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
                                {msg.sender === "store" && (
                                    <div className="me-2">
                                        <Image
                                            src={`https://lowiwed-api.wooshelf.com${receiverDetails?.avatar}`}
                                            roundedCircle
                                            width="40"
                                            height="40"
                                            className="border border-primary"
                                        />
                                    </div>
                                )}
                                <div className={`d-flex flex-column mb-3 ${msg.sender === "user" ? "align-items-end" : "align-items-start"}`}>
                                    {msg.text && (
                                        <div
                                            className={`p-2 rounded-3 mb-2 ${msg.sender === "user" ? "bg-white text-dark" : "bg-light text-dark"
                                                }`}
                                        // style={{ maxWidth: "70%" }}
                                        >
                                            <p className="mb-0" style={{ color: "#8E054D", fontSize: "12px" }}>{msg.text}</p>
                                        </div>
                                    )}
                                    {msg.attachments && msg.attachments.length > 0 && (
                                        <div className="d-flex flex-row overflow-auto my-2">
                                            {msg.attachments.map((attachment, attIdx) => (
                                                <Image key={attIdx} src={attachment} rounded className="me-2" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                            ))}
                                        </div>
                                    )}
                                    <small className={`d-block ${msg.sender === "user" ? "text-muted" : "text-muted"}`} style={{ fontSize: "0.8rem" }}>
                                        {msg.time}
                                    </small>
                                </div>
                                {msg.sender === "user" && (
                                    <div className="ms-2">
                                        <Image
                                            src={`https://lowiwed-api.wooshelf.com${receiverDetails?.senderImg}`}
                                            roundedCircle
                                            width="40"
                                            height="40"
                                            className="border border-primary"
                                        />
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Input Box */}
                <Row className="g-2 my-1 p-2 align-items-center">
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Type your message here..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        // className="rounded-pill"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant="light" className="rounded-circle me-1">
                            <i className="bi bi-paperclip text-muted"></i>
                        </Button>

                        <Button style={{ backgroundColor: "#E6B8BF" }} onClick={handleSend} disabled={loading} className="border-0">
                            <i className="bi bi-send-fill"></i>
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
import React, { useEffect, useState } from 'react'
import { Card, Row, Button, Dropdown } from 'react-bootstrap'
import styles from '../../styles/YourAccount/HelpCenter.module.css'
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


const RecentIssues = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDays, setSelectedDays] = useState(30);

    const token = Cookies.get("access_token");


    useEffect(() => {
        fetchQueries()
    }, [])

    const fetchQueries = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}/helpcenter-queries/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response && response.data) {
                setQueries(response.data.results);
            }
        } catch (error) {
            toast.error(error.response?.data?.response)
        } finally {
            setLoading(false);
        }
    };

    const filteredQueries = queries.filter((q) => {
        const createdAt = new Date(q.created_at)
        const now = new Date();
        const diffDate = (now - createdAt) / (1000 * 60 * 60 * 24);
        return diffDate <= selectedDays
    })

    return (
        //     <div>
        //       <Row>
        //          <Card className={`${styles.cardRecentissues} rounded-0`}>
        //              <div className={`${styles.cardinner1} d-flex justify-content-between`}>
        //                 <p className={styles.queriesP1}>Queries from Last 30 Days
        // </p>
        // <p className={styles.queriesPChange}>CHANGE</p>
        //              </div>

        //              <div className={styles.imageAndissuescon}>
        //                 <img src="/Images/queries.png" alt="" width={100} height={100}/>
        //                 <h3 className={styles.headingissuesNoFound}>No queries found</h3>
        //                 <p className={styles.pForissuesnoqueriesrasised}>There were no queries raised in Last 30 Days</p>
        //              </div>
        //          </Card>
        //       </Row>
        //     </div>

        <div>
            <Row>
                <Card className={`${styles.cardRecentissues} rounded-0`}>
                    {/* Header */}
                    <div className={`${styles.cardinner1} d-flex justify-content-between`}>
                        <p className={styles.queriesP1}>
                            Queries from Last {selectedDays} Days
                        </p>

                        {/* Dropdown for days */}
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="light"
                                className={`${styles.queriesPChange} border-0 bg-white text-danger`}
                            >
                                CHANGE
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {[1, 15, 30, 60, 90].map((d) => (
                                    <Dropdown.Item key={d} onClick={() => setSelectedDays(d)}>
                                        Last {d} Days
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    {/* Body */}
                    {loading ? (
                        <p className="text-center p-3">Loading...</p>
                    ) : filteredQueries.length === 0 ? (
                        <div className={styles.imageAndissuescon}>
                            <img src="/Images/queries.png" alt="" width={100} height={100} />
                            <h3 className={styles.headingissuesNoFound}>No queries found</h3>
                            <p className={styles.pForissuesnoqueriesrasised}>
                                There were no queries raised in Last {selectedDays} Days
                            </p>
                        </div>
                    ) : (
                        <div className="p-3">
                            {filteredQueries.map((q) => (
                                <div
                                    key={q.id}
                                    className="mb-3 p-3 border rounded bg-light shadow-sm d-flex flex-column"
                                >
                                    <span className={`${styles.pargraphEdit}`}>
                                        {/* <strong className={styles.Typeshead}>Type:</strong> {q.query_type.replace("_", " ")} */}
                                        <strong className={styles.Typeshead}>Type:</strong> {q.query_type === "non_order_related" && "Non Order Related"}
                                    </span>
                                    <span className={`${styles.pargraphEdit2}`}>
                                        <strong className={styles.Typeshead}>Topic:</strong> {q.topic || "N/A"}
                                    </span>

                                    {q.chats && q.chats.length > 0 && (
                                        <div className="border p-2 rounded bg-white">
                                            {q.chats.map((chat, idx) => (
                                                <p key={idx} className="mb-1">
                                                    <strong>{chat.sender}:</strong> {chat.message} <br />
                                                    <small className="text-muted">
                                                        {new Date(chat.timestamp).toLocaleString()}
                                                    </small>
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                    <span className="">
                                        <strong className={styles.Typeshead}>Status:</strong>
                                        <span
                                            className={
                                                q.status.toLowerCase() === "open"
                                                    ? styles.statusOpen
                                                    : q.status.toLowerCase() === "in_progress"
                                                        ? styles.statusInProgress
                                                        : q.status.toLowerCase() === "closed"
                                                            ? styles.statusClosed
                                                            : ""
                                            }

                                        >
                                            {' '}   {q.status === "in_progress" ? "In Progress" : q.status}
                                        </span>

                                    </span>
                                    <p className="text-muted">
                                        Created At: {q.created_at ? new Date(q.created_at).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        }) : "No Data"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </Card>
            </Row>
        </div>
    )
}

export default RecentIssues

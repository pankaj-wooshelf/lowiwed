import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import styles from '../styles/Home.module.css';
import { FaMapLocationDot } from "react-icons/fa6";


const SearchBar = () => {
    return (
        <Container>
            <div className={styles.searchWrapper}>
                <div className={styles.innerContainer}>
                    {/* Input 1 */}
                    <div className={styles.inputSection2}>
                        <FaSearch className={styles.icon2} />
                        <Form.Control
                            type="text"
                            placeholder="Search products or services"
                            className={styles.inputField2}
                        />
                    </div>

                    {/* Input 2 */}
                    <div className={styles.inputSection3}>
                        <FaMapLocationDot className={styles.icon2} />
                        <Form.Control
                            type="text"
                            placeholder="Search by location or enter km radius"
                            className={styles.inputField2}
                        />
                    </div>

                    {/* Button Section */}
                    <div className={`${styles.inputSection4} ${styles.buttonSection2}`}>
                        <Button className={styles.buttonText2}>
                            Search  <FaSearch className={styles.icon3} />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SearchBar;

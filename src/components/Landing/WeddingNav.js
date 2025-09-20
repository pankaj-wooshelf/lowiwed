import React from 'react';
import { Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import { FaLinesLeaning } from "react-icons/fa6";
import { MdOutlineClearAll } from 'react-icons/md';


const WeddingNav = () => {
    return (
        <div className={styles.navWrapper2}>
            <div className='d-flex flex-row justify-content-center' >
                <Nav className="justify-content-center border-0">
                    <NavDropdown
                        title="Wedding Planning"
                        className={styles.navItem}
                    >
                        <NavDropdown.Item style={{ color: '#E6B8BF' }}> Budget Planner</NavDropdown.Item>
                        <NavDropdown.Item>Checklists</NavDropdown.Item>
                        <NavDropdown.Item>Vendors</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Before Wedding" className={styles.navItem}>
                        <NavDropdown.Item>Engagement</NavDropdown.Item>
                        <NavDropdown.Item>Photoshoot</NavDropdown.Item>
                        <NavDropdown.Item>Bridal Wear</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Ceremony & Decorations" className={styles.navItem}>
                        <NavDropdown.Item>Decor Themes</NavDropdown.Item>
                        <NavDropdown.Item>Venue Styling</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Photography & Prints" className={styles.navItem}>
                        <NavDropdown.Item>Photographers</NavDropdown.Item>
                        <NavDropdown.Item>Photo Albums</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Destination & Locations" className={styles.navItem}>
                        <NavDropdown.Item>Beach Wedding</NavDropdown.Item>
                        <NavDropdown.Item>Hill Station</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Party & Entertainment" className={styles.navItem}>
                        <NavDropdown.Item>Music</NavDropdown.Item>
                        <NavDropdown.Item>Games</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Food & Drinks" className={styles.navItem}>
                        <NavDropdown.Item>Menu</NavDropdown.Item>
                        <NavDropdown.Item>Caterers</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="After Wedding" className={styles.navItem}>
                        <NavDropdown.Item>Honeymoon</NavDropdown.Item>
                        <NavDropdown.Item>Thank You Cards</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button className={styles.wedinglastbtn}>
                    <FaLinesLeaning className={styles.wadinglastbtnIcon} />
                </Button>
            </div>

            <div className={styles.clearWrapper}>
                <MdOutlineClearAll className={styles.ClearAllWedingNav} />
            </div>
        </div>
    );
};

export default WeddingNav;

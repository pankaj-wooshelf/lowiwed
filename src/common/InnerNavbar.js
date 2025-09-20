import React from 'react'
import styles from '../styles/VenueSection/herosec.module.css'
import { Nav, Button } from 'react-bootstrap'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useAuth } from './AuthContext'


const InnerNavbar = () => {
    const { user } = useAuth()
    return (
        <>
            <div className={styles.logoBox}>
                <img src="/Images/Lowed.png" width={150} height={150} alt="Logo" />
            </div>
            <div className={styles.navLinks}>
                <Nav className={styles.navItems}>
                    <Nav.Link href="/home" className={styles.linkColor}>Home</Nav.Link>
                    {/* <Nav.Link href="/venue" className={styles.linkColor}>Venue</Nav.Link> */}
                    <Nav.Link href="/vendors" className={styles.linkColor}>Products</Nav.Link>
                    <Nav.Link href="/vendorsProductDetails" className={styles.linkColor}>Blog</Nav.Link>
                    <Nav.Link href="/venueDetail" className={styles.linkColor}>Contact us</Nav.Link>
                </Nav>
            </div>
            <div className={styles.actionIcons}>
                <div className={styles.iconBackgroundNav}>
                    <FaSearch className={styles.icon} />
                </div>
                <div className={styles.iconBackgroundNav}>
                    <FaShoppingCart className={styles.icon} />
                </div>
                <Button variant="outline-secondary" className={styles.vendorBtn}>Join as a Vendor</Button>
                <Button variant="secondary" className={styles.loginBtn}>Log in</Button>
            </div>
        </>
    )
}

export default InnerNavbar

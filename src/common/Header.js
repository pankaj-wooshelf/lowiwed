import Link from 'next/link';
import {
    FaBars,
    FaChevronDown,
    FaInstagram,
    FaFacebook,
    FaTiktok,
    FaYoutube,
    FaClock
} from 'react-icons/fa';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { Container } from 'react-bootstrap';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter()
    return (
        <>
            <div className={styles.headerRoot}>
                <Container fluid>
                    <div className="d-flex align-items-center justify-content-between flex-nowrap px-lg-5 px-sm-2 gap-sm-4" style={{ gap: '1rem' }}>

                        {/* Country Selector */}
                        <div className={`${styles.countryBox}`}>
                            <div className={styles.countryInner}>
                                <div className={styles.circleIcon}>
                                    <FaBars />
                                </div>
                                <span className={styles.SelectFieldH}>Select country</span>
                            </div>

                            <div className={styles.dropdownBox}>
                                <FaChevronDown style={{ color: '#E6B8BF' }} />
                                <select>
                                    <option value="">Select</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
                        </div>

                        {/* Offer & Timer */}
                        <div className={styles.discountBox}>
                            <RiDiscountPercentFill className={styles.percentageIcon} />
                            <span className={`${styles.RegisterText}  discountText`} style={{}} onClick={() => router.push('/')}>
                                Register Today : 90% off
                            </span>
                            <div className={`${styles.TimerBoxH} rounded-pill px-lg-3 px-1 py-1 d-flex align-items-center timerBox`}>
                                <FaClock className="me-1 fs-6" />
                                <span>09:23:45</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className={`${styles.socialBox} d-flex gap-lg-4 gap-2`}>
                            <Link href="#"><FaInstagram className={`${styles.scoiaLinks} text-white`} /></Link>
                            <Link href="#"><FaFacebook className={`${styles.scoiaLinks} text-white`} /></Link>
                            <Link href="#"><FaTiktok className={`${styles.scoiaLinks} text-white`} /></Link>
                            <Link href="#"><FaYoutube className={`${styles.scoiaLinks} text-white`} /></Link>
                        </div>

                    </div>
                </Container>
            </div>
            {/* For Small Screen  */}
            <div className={styles.SmallScTimer}>
                {/* Offer & Timer */}
                <div className={styles.discountBox2}>
                    <RiDiscountPercentFill className={styles.percentageIcon2} />
                    <span className={`${styles.RegisterText2}  discountText`}>
                        Register Today : 90% off
                    </span>
                    <div className={`${styles.TimerBoxH2} rounded-pill px-lg-3 px-1 py-1 d-flex align-items-center timerBox`}>
                        <FaClock className="me-1 fs-6" />
                        <span>09:23:45</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;

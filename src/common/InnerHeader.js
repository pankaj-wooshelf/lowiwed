import Link from 'next/link';
import {
    FaInstagram,
    FaFacebook,
    FaTiktok,
    FaYoutube,
    FaClock
} from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { Container } from 'react-bootstrap';
import styles from '../styles/header2.module.css';

const InnerHeader = () => {
    return (
        <>
            <div className={styles.headerRoot}>
                <Container fluid>
                    <div className="d-flex align-items-center justify-content-between flex-nowrap px-lg-5 px-sm-2 gap-sm-4" style={{ gap: '1rem' }}>

                        <div className='d-flex flex-row'>
                            {/* Country Selector */}
                            <div className={`${styles.countryBox}`} style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                                O 4998 Elk Creek Road Canton GA 30114.
                            </div>

                            {/* Offer & Timer */}
                            <div className={styles.discountBox} >
                                <CgMail className={styles.percentageIcon} style={{ fontSize: '12px' }} />
                                <span className={`${styles.RegisterText}  discountText`} style={{ fontSize: '16px', fontWeight: "400" }}>
                                    info@weddingdir.com
                                </span>
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
                    <CgMail className={styles.percentageIcon2} />
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

export default InnerHeader;

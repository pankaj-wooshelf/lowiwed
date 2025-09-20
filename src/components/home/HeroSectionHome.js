import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import SearchBar from '@/common/SearchBar';
import { useRouter } from 'next/router';
const HeroSectionHome = () => {
    const router = useRouter()
    return (
        <>
            {/* Hero Section  */}
            <div className={styles.heroWrapper}>
                <Container>

                    {/* Top Banner with Flowers and Tagline */}
                    <div className={styles.mainTopbanner}>
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Left" width={118} height={51} className={styles.flower1} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Left" width={118} height={51} className={styles.flower2} />
                        <div className={styles.banner}>
                            <div className={styles.bannerText}>
                                LowiWED because love is what trully matters
                            </div>
                        </div>
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={118} height={51} className={styles.flower3} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={118} height={51} className={styles.flower4} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={108} height={41} className={styles.flower5} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={108} height={41} className={styles.flower6} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={108} height={41} className={styles.flower7} />
                    </div>

                    {/* Heading */}
                    <h2 className={styles.heading2}> Be Part of <span className={styles.pink}>Europe's Upcoming</span> Biggest <span className={styles.pink}> Wedding</span> Marketplace
                    </h2>

                    {/* Buttons */}
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <Button className={`${styles.heroBtn}`} >Sell Now As A Bride</Button>
                        </Col>
                        <Col xs="auto">
                            <Button className={styles.heroBtn} onClick={() => router.push('seller/dashboard/d')}>Sell Now As A Business</Button>
                        </Col>
                    </Row>
                </Container>
            </div>



            <SearchBar />

        </>
    );
};

export default HeroSectionHome;

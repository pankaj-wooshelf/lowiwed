import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import SearchBar from '@/common/SearchBar';
import { useRouter } from 'next/router';

const HeroSectionHome = ({ homeContent }) => {
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
                                {/* LowiWED because love is what trully matters */}
                                {homeContent[1]?.title}
                            </div>
                        </div>
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={118} height={51} className={styles.flower3} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={118} height={51} className={styles.flower4} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={108} height={41} className={styles.flower5} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={108} height={41} className={styles.flower6} />
                        <img src="/Images/Beauti_Flower1.png" alt="Flower Right" width={108} height={41} className={styles.flower7} />
                    </div>

                    {/* Heading */}
                    <h2 className={styles.heading2}>
                        {/* Be Part of <span className={styles.pink}>Europe's Upcoming</span> Biggest <span className={styles.pink}> Wedding</span> Marketplace */}
                        {homeContent[1]?.description}
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

            {/* Search Section  */}

            <SearchBar />
            {/* <div className='m-auto my-4' style={{width:"800px" ,borderRadius:"40px" , height:"80px",border:"1px solid red",display:"flex",flexDirection:"row",alignItems:"center"}}>
      <div className='mx-2' style={{width:"300px" ,height:"66px", borderTopLeftRadius:"36px",borderBottomLeftRadius:"36px" , border:"1px solid blue"}}></div>
      <div className='' style={{width:"300px" ,height:"66px",  border:"1px solid blue",marginRight:"30px"}}></div>
     </div> */}
        </>
    );
};

export default HeroSectionHome;
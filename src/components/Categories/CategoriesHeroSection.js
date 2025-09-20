import React from 'react'
import styles from '../../styles/VenueSection/herosec.module.css'
import { Container, Nav, Button, Form } from 'react-bootstrap'
import InnerNavbar from '@/common/InnerNavbar'

const CategoriesHeroSection = ({ productsCat }) => {

    // const productCat = productsCat.find((d)=>d.category)
    return (
        <section className={styles.herosecMiancontainer}>
            <Container className={styles.navbarWrapper}>
                <InnerNavbar />
            </Container>

            <Container className={styles.breadcrumbWrapper}>
                <p className={`${styles.breadcrumb}`}>Home &gt; Wedding Venues</p>
            </Container>

            <Container className={styles.titleWrapper}>
                <h2 className={styles.titleH}>
                    {productsCat[0]?.category?.name}
                </h2>
                <div className={styles.searchBox}>
                    <Form.Select className={styles.locationSelect}>
                        <option>Select Location</option>
                        <option>New York</option>
                        <option>California</option>
                    </Form.Select>
                    <Button className={styles.searchButton}>Search Now</Button>
                </div>
            </Container>

            <div style={{ position: "relative" }}>
                <div className="flower flower-left">
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={554}
                        height={278}
                        style={{ opacity: "0.17" }}
                    />
                </div>
                <div className="flower flower-right">
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Side Flower"
                        width={554}
                        height={278}
                        style={{ opacity: "0.17" }}
                    />
                </div>
            </div>

            <style jsx>{`
            .flower {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 0;
              pointer-events: none;
            }
    
            .flower-left {
              left: -300px;
              transform: rotate(-90deg) translateY(25%) translateX(55%) scaleX(-1);
            }
    
            .flower-right {
  position: absolute;       /* Make sure to position it relative to its parent */
  right: 0;                 /* Stick it to the right edge */
  top: 0;                   /* Adjust if needed */
  transform: rotate(25.26deg) translateY(10%) translateX(5%);
}

    
            @media (max-width: 992px) {
              .card-img-wrapper {
                max-width: 240px;
              }
              .card-desc {
                font-size: 18px;
              }
              .join-btn {
                height: 50px;
                font-size: 16px;
              }
              .flower-left,
              .flower-right {
                display: none;
              }
            }
          `}</style>

        </section>
    )
}

export default CategoriesHeroSection

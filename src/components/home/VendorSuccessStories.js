import React, { Fragment } from 'react';
import Image from 'next/image';
import stylesM from '../../styles/Home.module.css';
import styles from '../../styles/VendorStoryForHome.module.css';
import { LuPyramid } from "react-icons/lu";
import { GrSend } from 'react-icons/gr';
export const VendorSuccessStoriesDa = Array(4).fill({
    vendorImage: '/Images/FeatureBride.png',
    name: 'Bride Shopping Stories: From Dreams to Reality',
    Points: `Read about brides' unforgettable journeys as they shop for their dream wedding attire on our platform. Discover how they found the perfect dress and accessories `,
});

const VendorSuccessStories = () => {
    return (
        <Fragment>
            {/* VendorSuccessStories */}
            <section className={styles.businessMainStories}>
                <div>
                    <div className="container">
                        {/* Header */}
                        <div className={`${stylesM.benefitsSection} `}>
                            <img
                                className={stylesM.flowerImg}
                                src="/Images/Beauti_Flower1.png"
                                alt="Side Flower"
                                width={170}
                                height={70}
                            />
                            <h2 className={`${stylesM.benefitsTitle} ${styles.benefitTitle2} mb-2`}>
                                <span className={stylesM.line}></span>
                                Vendor Success Stories
                                <span className={stylesM.line}></span>
                            </h2>
                        </div>

                        <div className={styles.cardsRowWrapper}>

                            {VendorSuccessStoriesDa.map((biz, index) => (
                                <div key={index} className={styles.thisisAWraper}>
                                    <div className={styles.businessCardOuterStories}>
                                        <div className={styles.businessCardStories}>
                                            <div className={styles.imageWrapperStories}>
                                                <img
                                                    src={biz.vendorImage}
                                                    alt={biz.category}
                                                    layout="responsive"
                                                    width={331}
                                                    height={466}
                                                    className={styles.businessImageStories}
                                                />
                                                <div className={styles.leftTOpShow}>
                                                    6  June 2025
                                                </div>
                                            </div>

                                            <div className={styles.cardContentStories}>
                                                <div className="d-flex justify-content-between justify-content-center align-items-center">
                                                    <h5 className={styles.NameStories}>{biz.name}</h5>
                                                </div>

                                                <div className="d-flex flex-column mb-2">

                                                    <p className={`${styles.StoriesSubText}`}>{biz.Points}</p>
                                                </div>


                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className={styles.shareBtnFeature}>
                                                        <GrSend className={styles.shareClFeature} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default VendorSuccessStories;

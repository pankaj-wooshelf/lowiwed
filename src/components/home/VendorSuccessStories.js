import React, { Fragment, useEffect, useState } from 'react';
import stylesM from '../../styles/Home.module.css';
import styles from '../../styles/VendorStoryForHome.module.css';
import { LuPyramid } from "react-icons/lu";
import { GrSend } from 'react-icons/gr';
import { toast } from 'react-toastify';
import axios from 'axios';

// export const VendorSuccessStoriesDa = Array(4).fill({
//   vendorImage: '/Images/FeatureBride.png',
//   name: 'Bride Shopping Stories: From Dreams to Reality',
//   Points: `Read about brides' unforgettable journeys as they shop for their dream wedding attire on our platform. Discover how they found the perfect dress and accessories `,
// });

const VendorSuccessStories = () => {

    const [dataStory, setDataStory] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchDataStory = async () => {
        try {
            setLoading(true)
            const response = await axios("https://lowiwed-api.wooshelf.com/v1/api/seller-stories/");
            console.log(response.data);
            if (response.status === 200) {
                setDataStory(response.data.response)

            }
        } catch (error) {
            toast.error(error?.response?.data?.response)
        } finally {
            setLoading(false)
        }
    };
    // console.log(benifitData);

    useEffect(() => {
        fetchDataStory();
    }, []);

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

                            {dataStory.map((biz, index) => (
                                <div key={index} className={styles.thisisAWraper}>
                                    <div className={styles.businessCardOuterStories}>
                                        {/* <div className={styles.businessCardStories}> */}

                                        <div className={styles.imageWrapperStories}>
                                            <img
                                                src={`https://lowiwed-api.wooshelf.com/${biz.image}`}
                                                alt={biz.category}
                                                layout="responsive"
                                                className={styles.businessImageStories}
                                            />
                                            <div className={styles.leftTOpShow}>
                                                6  June 2025
                                            </div>
                                        </div>

                                        <div className={styles.cardContentStories}>

                                            <div className="d-flex justify-content-between justify-content-center align-items-center">
                                                <h5 className={styles.NameStories}>{biz.short_bio}</h5>
                                            </div>

                                            <div className="d-flex flex-column mb-2">

                                                <span className={`${styles.StoriesSubText}`}>{biz.description}</span>
                                            </div>

                                            <div className={styles.shareBtnMain}>
                                                <div className={styles.shareBtnFeature}>
                                                    <GrSend className={styles.shareClFeature} />
                                                </div>
                                            </div>

                                        </div>

                                        {/* </div> */}
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
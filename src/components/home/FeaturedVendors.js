import React, { Fragment } from 'react';
import stylesM from '../../styles/Home.module.css';
import styles from '../../styles/FeaturedForHome.module.css'
import { FaHeart, FaStar } from "react-icons/fa";
import { LuPyramid } from "react-icons/lu";
import { FaLocationPin } from "react-icons/fa6";
import { PiToolboxFill } from 'react-icons/pi';
import { TbMoneybag } from 'react-icons/tb';
import { GrSend } from 'react-icons/gr';
import { useRouter } from 'next/router';

// const dummyBusinesses = Array(4).fill({
//   category: 'Photographers',
//   price: 'Starts from £200',
//   title: 'Hima Bridal Collection',
//   location: 'Amsterdam, UK',
//   rating: '5.0',
//   image: '/Images/FeatureBride.png',
//   avatar: '/Images/avatar.png',
// });

export const featuredVendorsDa = [
    {
        id: 1,
        name: 'Lens Story Studios',
        category: 'Photographer',
        services: 'Pre-Wedding · Candid Photography',
        price: 'From €700 / day',
        rating: '4.9',
        reviews: 186,
        location: 'Amsterdam, UK',
        vendorImage: '/Images/FeatureBride.png',
        userImage: '/Images/FeatureBride.png',
        userName: 'Paulina Sliwika',
    },
    {
        id: 2,
        name: 'Hina Makeup Studios',
        category: 'Makeup Artist',
        services: 'Bridal Makeup · HD Airbrush',
        price: ' From €350 / session',
        rating: '4.8',
        reviews: 92,
        location: 'Amsterdam, UK',
        vendorImage: '/Images/FeatureBride.png',
        userImage: '/Images/FeatureBride.png',
        userName: 'Hina Khan',
    },
    {
        id: 3,
        name: 'The Floral Knot',
        category: 'Wedding Decorator',
        services: 'Stage Decor · Floral Installations',
        price: 'From €1200 / event',
        rating: '4.7',
        reviews: 110,
        location: 'Amsterdam, UK',
        vendorImage: '/Images/FeatureBride.png',
        userImage: '/Images/user3.png',
        userName: 'Amit Sha',
    },
    {
        id: 4,
        name: 'Beats & Vows',
        category: 'Wedding Decorator',
        services: 'DJ · Sound & Lighting  ',
        price: 'From €900 / night  ',
        rating: '5',
        reviews: 78,
        location: 'Amsterdam, UK',
        vendorImage: '/Images/FeatureBride.png',
        userImage: '/Images/user3.png',
        userName: 'Amit Sha',
    },
];

const FeaturedVendors = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    return (
        <Fragment>
            {/* Weekly Top Businesses At LowiWed */}
            <section className={`${styles.businessMainFeature}`}>
                <div className={`${styles.businessesSectionFeature}`}>
                    {currentPath === '/vendors' && <h2 className='Adamina400 text-center py-4' style={{ fontSize: "28px", color: "#171A1F" }}>Make your Wedding memorable with the best Vendors</h2>
                    }
                    <div className="container">
                        {/* Header */}
                        <div className={`${stylesM.benefitsSection}`}>
                            <img
                                className={stylesM.flowerImg}
                                src="/Images/Beauti_Flower1.png"
                                alt="Side Flower"
                                width={170}
                                height={70}
                            />
                            <h2 className={`${stylesM.benefitsTitle} ${styles.benefitTitle2} mb-2`}>
                                <span className={stylesM.line}></span>
                                Featured Vendors
                                <span className={stylesM.line}></span>
                            </h2>
                        </div>

                        <div className={styles.cardsRowWrapper}>

                            {featuredVendorsDa.map((biz, index) => (
                                <div key={index} className={styles.thisisAWraper}>
                                    <div className={styles.businessCardOuterFeature}>
                                        <div className={styles.businessCardFeature}>
                                            <div className={styles.imageWrapperFeature}>
                                                <img
                                                    src={biz.vendorImage}
                                                    alt={biz.category}
                                                    layout="responsive"
                                                    // width={331}
                                                    // height={250}
                                                    className={styles.businessImageFeature}
                                                />
                                                <div className={styles.heartIconFeature}>
                                                    <FaHeart className={styles.heartIFeature} />
                                                </div>
                                            </div>

                                            <div className={styles.cardContentFeature}>

                                                <div className={styles.innerContentsH}>
                                                    <div className="d-flex justify-content-between justify-content-center align-items-center">
                                                        <h5 className={styles.NameFeature}>{biz.name}</h5>
                                                        <div className={styles.ratingBoxFeature}>
                                                            {biz.category}
                                                        </div>
                                                    </div>

                                                    <div className={styles.formainContentofFeature}>
                                                        <span className={styles.priceTextFeature}><PiToolboxFill className={styles.forpreweddingIcon} /> {biz.services}</span>
                                                        <span className={`${styles.FeatureSubText}`}> <TbMoneybag className={styles.forpreweddingIconMoney} />
                                                            {biz.price}</span>
                                                        <p className={`${styles.FeatureSubText}`}><FaStar className={styles.forpreweddingIconreview} />
                                                            {biz.rating} (<span>{biz.reviews} Reviews</span>)</p>
                                                    </div>

                                                </div>
                                                {/* <hr className={styles.dividerFeature} /> */}

                                                <div className={`${styles.forLocationANdOther} d-flex justify-content-between align-items-center`}>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <img
                                                            src="/Images/SmileGirl.png"
                                                            alt="Avatar"
                                                            width={32}
                                                            height={32}
                                                            className={`${styles.ImageProfiFeature} rounded-circle`}
                                                        />

                                                        <div className={styles.profiAndTextFeat}>
                                                            <div className={styles.businessNameFeature}>{biz.userName}</div>
                                                            <div className={styles.locationFeature}>
                                                                <span>
                                                                    {/* <FaLocationPin  className='locationIconIs'/> */}
                                                                    <i class="bi bi-geo-alt"></i>
                                                                    Amsterdam,</span>
                                                                <span className={styles.ukTextFeature}>UK</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={`${styles.shareBtnFeature}`}>
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

export default FeaturedVendors;

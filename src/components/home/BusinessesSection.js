import React, { Fragment } from "react";
import styles from "../../styles/LandingPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { LuPyramid } from "react-icons/lu";
import { FaLocationPin } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const dummyBusinesses = Array(8).fill({
    category: "Photographers",
    price: "Starts from £200",
    title: "Hima Bridal Collection",
    location: "Amsterdam, UK",
    rating: "5.0",
    image: "/Images/BussnessDress.png",
    avatar: "/Images/avatar.png",
});

const BusinessesSection = () => {
    return (
        <Fragment>
            {/* Weekly Top Businesses At LowiWed */}
            <section className={styles.businessMain}>
                <div className={`${styles.businessesSection} mt-lg-5`}>
                    <div className="container">
                        {/* Header */}
                        <div className={`${styles.benefitsSection}  `}>
                            <img
                                className={styles.flowerImg}
                                src="/Images/Beauti_Flower1.png"
                                alt="Side Flower"
                                width={180}
                                height={70}
                            />
                            <h2
                                className={`${styles.benefitsTitle} ${styles.benefitTitle2} mb-2`}
                            >
                                <span className={styles.line}></span>
                                Weekly Top Businesses At LowiWed
                                <span className={styles.line}></span>
                            </h2>
                        </div>

                        {/* Swiper */}
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom",
                            }}
                            slidesPerView={1}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            {dummyBusinesses.map((biz, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.businessCardOuter}>
                                        <div className={styles.businessCard}>
                                            <div className={styles.imageWrapper}>
                                                <img
                                                    src={biz.image}
                                                    alt={biz.category}
                                                    layout="responsive"
                                                    width={331}
                                                    height={466}
                                                    className={styles.businessImage}
                                                />
                                                <div className={styles.heartIcon}>
                                                    <FaHeart className={styles.heartI} />
                                                </div>
                                            </div>

                                            <div className={styles.cardContent}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className={styles.categoryName}>
                                                        {biz.category}
                                                    </span>
                                                    <div className={styles.ratingBox}>
                                                        <IoIosStar className={styles.Star} /> {biz.rating}
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <span className={styles.priceText}>
                                                        💸 {biz.price}
                                                    </span>
                                                    <span className={`${styles.ratingCount}`}>
                                                        30,175 Ratings
                                                    </span>
                                                </div>

                                                <hr className={styles.divider} />

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <img
                                                            src="/Images/SmileGirl.png"
                                                            alt="Avatar"
                                                            width={32}
                                                            height={32}
                                                            className={`${styles.ImageProfi} rounded-circle`}
                                                        />
                                                        <div>
                                                            <div className={styles.businessName}>
                                                                {biz.title}
                                                            </div>
                                                            <div className={styles.location}>
                                                                <span>
                                                                    {/* <FaLocationPin /> */}
                                                                    <i class="bi bi-geo-alt"></i>
                                                                    Amsterdam,
                                                                </span>
                                                                <span className={styles.ukText}>UK</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.shareBtn}>
                                                        <LuPyramid className={styles.shareCl} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Swiper Arrows */}
                        <div className="swiper-button-prev-custom"></div>
                        <div className="swiper-button-next-custom"></div>
                    </div>
                </div>
            </section>

            {/* Monthly  Top Businesses At LowiWed */}
            <div className={styles.businessMonthlyH}>
                <section className={styles.businessMain}>
                    <div className={`${styles.businessesSection}`}>
                        <div className="container">
                            {/* Header */}
                            <div className={`${styles.benefitsSection} `}>
                                <img
                                    className={styles.flowerImg}
                                    src="/Images/Beauti_Flower1.png"
                                    alt="Side Flower"
                                    width={180}
                                    height={73}
                                />
                                <h2
                                    className={`${styles.benefitsTitle} ${styles.benefitTitle2} mb-2`}
                                >
                                    <span className={styles.line}></span>
                                    Monthly Top Businesses At LowiWed
                                    <span className={styles.line}></span>
                                </h2>
                            </div>

                            {/* Swiper */}
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                    nextEl: ".swiper-button-next-custom",
                                    prevEl: ".swiper-button-prev-custom",
                                }}
                                slidesPerView={1}
                                spaceBetween={20}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                            >
                                {dummyBusinesses.map((biz, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.businessCardOuter}>
                                            <div className={styles.businessCard}>
                                                <div className={styles.imageWrapper}>
                                                    <img
                                                        src={biz.image}
                                                        alt={biz.category}
                                                        fill
                                                        className={styles.businessImage}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                    <div className={styles.heartIcon}>
                                                        <FaHeart className={styles.heartI} />
                                                    </div>
                                                </div>

                                                <div className={styles.cardContent}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className={styles.categoryName}>
                                                            {biz.category}
                                                        </span>
                                                        <div className={styles.ratingBox}>
                                                            <IoIosStar className={styles.Star} /> {biz.rating}
                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <span className={styles.priceText}>
                                                            💸 {biz.price}
                                                        </span>
                                                        <span className={`${styles.ratingCount}`}>
                                                            30,175 Ratings
                                                        </span>
                                                    </div>

                                                    <hr className={styles.divider} />

                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <img
                                                                src="/Images/SmileGirl.png"
                                                                alt="Avatar"
                                                                width={32}
                                                                height={32}
                                                                className={`${styles.ImageProfi} rounded-circle`}
                                                            />
                                                            <div>
                                                                <div className={styles.businessName}>
                                                                    {biz.title}
                                                                </div>
                                                                <div className={styles.location}>
                                                                    <span>
                                                                        {/* <FaLocationPin /> */}
                                                                        <i class="bi bi-geo-alt"></i>
                                                                        Amsterdam,
                                                                    </span>
                                                                    <span className={styles.ukText}>UK</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles.shareBtn}>
                                                            <LuPyramid className={styles.shareCl} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Swiper Arrows */}
                            <div className="swiper-button-prev-custom"></div>
                            <div className="swiper-button-next-custom"></div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default BusinessesSection;

"use client"; // अगर आप App Router (Next.js 13+) पर हैं तो ये लगाना जरूरी है
import styles from "../../styles/whyJoinNow.module.css"; // Assuming you have a CSS module for styling
import React from "react";

const cardData = [
    {
        id: 1,
        icon: "/Images/fea1.png",
        title: "Brides Celebrate Forever – Completely FREE!",
        details: [
            `"Your Dream Wedding, Zero Platform Fees – ALWAYS"`,
            `"FREE Today, FREE Tomorrow, FREE Forever"`,
            `"No Hidden Costs, No Surprises, Just Pure Wedding Magic"`,
        ],
        tiltes:
            "LowiWed believes every bride deserves her perfect day without platform fees. That's our promise to you - forever.",
        color: "rgba(230, 184, 191, 1)",
    },
    {
        id: 2,
        icon: "/Images/fea2.png",
        title: "Vendors: Unlimited Opportunity Awaits!",
        details: [
            "First Month – UNLIMITED Product Listings",
            "This Offer Will NEVER Return",
            "Early Birds Get Maximum Exposure",
        ],
        tiltes: "Don't Sleep on This - Register NOW Before It's Gone!",
        color: "rgba(230, 184, 191, 1)",
    },
    {
        id: 3,
        icon: "/Images/fea3.png",
        title: "Why Wait? The Early Bird Gets Everything!",
        details: [
            "First to register – First to benefit",
            "Limited launch period advantages",
            "Be part of wedding history in Europe",
            "Secure your spot before everyone else discovers us",
        ],
        tiltes: "Don't Sleep on This - Register NOW Before It's Gone!",
        color: "rgba(230, 184, 191, 1)",
    },
];

export default function CardsSection() {
    return (
        <>
            <div
                className=" position-relative "
                style={{
                    // background: "linear-gradient(135deg, #fff5f5, #ffe6e6)", // Optional gradient background
                    padding: "60px 0",
                }}
            >
                <div className="container">
                    <div className="row">
                        <h1 className="text-center mb-5" style={{ fontFamily: "Arial, sans-serif", color: "rgba(139, 143, 154, 0.79)", fontWeight: "700", fontSize: "32px", textDecoration: "underline" }}>Subscribe from attached Photo</h1>
                        {cardData.map((card, index) => (
                            <div key={card.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                <div
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                                        borderRadius: "30px",
                                        padding: "30px 20px",
                                        textAlign: "center",
                                        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.25)",
                                        height: "100%",
                                        border: "3px solid rgba(230, 184, 191, 1)",
                                    }}
                                >
                                    <img
                                        src={card.icon}
                                        alt={`icon${card.id}`}
                                        style={{
                                            width: "76px",
                                            height: "76px",
                                            marginBottom: "15px",
                                        }}
                                    />
                                    <h5
                                        style={{
                                            color: card.color,
                                            fontFamily: "Arial, sans-serif",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                        }}
                                    >
                                        {card.title}
                                    </h5>

                                    <ul
                                        style={{
                                            fontSize: "15px",
                                            color: "rgba(144, 149, 160, 1)",
                                            marginTop: "15px",
                                            fontWeight: "400",
                                            listStyle: "none",
                                            padding: 0,
                                            // paddingLeft: "40px",
                                        }}
                                    >
                                        {card.details.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p
                                        style={{
                                            color: "rgba(144, 149, 160, 1)",
                                            fontWeight: "400",
                                            fontSize: "15px",
                                            marginBottom:
                                                index === 1
                                                    ? "80px"
                                                    : index === 2
                                                        ? "58px"
                                                        : "10px",
                                        }}
                                    >
                                        {card.tiltes}
                                    </p>

                                    <button className="button">Subscribe Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.flower + " " + styles.flowerLeft}>
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Left Flower"
                        width={820}
                        height={280}
                    />
                </div>
                <div className={styles.flower + " " + styles.flowerRight}>
                    <img
                        src="/Images/Beauti_Flower1.png"
                        alt="Right Flower"
                        width={820}
                        height={280}
                    />
                </div>
            </div>
            <style jsx>{`
        .button {
          background-color: rgba(231, 197, 138, 1);
          color: #fff;
          padding: 10px 20px;
          border: none;
          margin-top: 15px;
          border-radius: 5px;
          cursor: pointer;
          border-radius:50px;
          width:190px;
          font-size:16px;
          font-weight:700;
        }
          .
      `}</style>
        </>
    );
}

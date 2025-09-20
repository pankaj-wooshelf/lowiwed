"use client";
import React from "react";

export default function WeddingCard() {
    const cards = [
        {
            title: "Europe's Largest Wedding Platform",
            points: [
                "7 countries by end of 2026",
                "Largest number of wedding products in one place",
                "Easiest platform to use",
            ],
        },
        {
            title: "Revolutionary Wedding E-Commerce",
            points: [
                "First complete wedding marketplace in Europe",
                "Buy, rent, and sell wedding items",
                "Everything in one place",
            ],
        },
        {
            title: "Comprehensive Wedding Solutions",
            points: [
                "Instant price comparison",
                "No hidden costs",
                "Specific product packages",
                "Customizable add-ons",
                "Clear, comparable offers",
            ],
        },
        {
            title: "Don't Miss Out!",
            points: [
                "Registration Opens: October 2025",
                "Big Launch: November 11, 2025 at 11:00 AM",
                "Platform open for everyone",
            ],
        },
        {
            title: "What Makes Us Different",
            points: [
                "Coverage in 7 countries",
                "40,000+ wedding products",
                "Buy, rent, sell wedding items",
                "One-stop wedding marketplace",
                "Transparent pricingRegistration Opens: October 2025",
                // "Big Launch: November 11, 2025 at 11:00 AM",
                // "Platform open for everyone",
                "Easy offer comparison",
            ],
        },
        {
            title: "Why Choose LoviWed?",
            points: [
                "Lowest prices guaranteed",
                "Widest vendor selection",
                "No hidden costs",
                "Personalized wedding solutions",
                "Easy registration",
                "Everything in one place",
            ],
        },
        {
            title: "Revolutionary Wedding Shopping",
            points: [
                "Lowest prices guaranteed",
                "Widest vendor selection",
                "No hidden costs",
                "Personalized wedding solutions",
                "Easy registration",
                "Everything in one place",
            ],
        },
    ];

    return (
        <>
            <div className="growths">
                <div className="container mt-5">
                    {/* first 4 cards row */}
                    <div className="row">
                        {cards.slice(0, 4).map((card, index) => (
                            <div className="col-12 col-md-6 col-lg-3 mb-4 px-3" key={index}>
                                <div className="myCard">
                                    <h5 className="myHeading">{card.title}</h5>
                                    <ul className="myListDisc my-5">
                                        {card.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* last 3 cards row - centered */}
                    <div className="row justify-content-center mt-3 px-1">
                        {cards.slice(4).map((card, index) => (
                            <div className="col-12 col-md-6 col-lg-3 mb-4 " key={index}>
                                <div className="myCard">
                                    <h5 className="myHeading">{card.title}</h5>
                                    <ul className="myListDisc">
                                        {card.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .growths {
          background-image: url("/Images/HomeHero.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          //   height: 500px;
        }
        .myCard {
          border: 3px solid #e5afaf;
          border-radius: 30px;
          background-color: #fff;
          padding: 20px;
          height: 100%;
          box-shadow: 0 9px 15px rgba(0, 0, 0, 0.25);
        }
        .myHeading {
          text-align: center;
          font-weight: 700;
          color: rgba(144, 149, 160, 1);
          margin-bottom: 15px;
          font-size: 24px;
        }
        .myListDisc {
          list-style: disc;
          padding-left: 20px;
          margin-bottom: 0;
          line-height: 1.8;
          font-weight: 400;
          font-size: 20px;
          color: rgba(230, 184, 191, 1);
        }
      `}</style>
        </>
    );
}

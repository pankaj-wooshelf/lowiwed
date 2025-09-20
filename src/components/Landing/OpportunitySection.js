"use client";
import React from "react";

export default function OpportunitySection() {
    return (
        <>
            <div
                className="oppo-header text-center"
                style={{
                    padding: "20px 20px",
                }}
            >
                <h2 className="the">The Perfect Storm of Opportunity</h2>
                <p className="oct">
                    October 11th changes everything |{" "}
                    <span style={{ color: "rgba(230, 184, 191, 1)" }}>
                        Registration opens
                    </span>{" "}
                    | November 11th makes history |{" "}
                    <span style={{ color: "rgba(230, 184, 191, 1)" }}>
                        Platform launches
                    </span>
                </p>

                {/* Bullet Points */}
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-12 col-md-8">
                            <h5 className="but">But here’s what you need to know:</h5>
                            <ul className="myList">
                                <li>
                                    ✨ <strong>Brides:</strong> FREE forever (while competitors
                                    charge)
                                </li>
                                <li>
                                    🚀 <strong>Vendors:</strong> Unlimited listings during launch
                                    (never again)
                                </li>
                                <li>
                                    👑 <strong>Ambassadors:</strong> Exclusive positions available
                                    (limited spots)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <p
                    style={{
                        fontSize: "20px",
                        color: "rgba(144, 149, 160, 1)",
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontWeight: "400"
                    }}
                >
                    The question isn’t whether you should join LoviWed. The question is:
                    Will you be first, or will you watch others take the best spots?
                </p>

                {/* Button */}
                <button
                    className="myButton"
                >
                    Register Now
                </button>
            </div>
            <style jsx>{`
        .oppo-header {
          background-image: url("/Images/oppo1.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          //   height: 500px;
        }
        .the {
          color: rgba(144, 149, 160, 1);
          font-weight: 400;
          font-size: 40px;
          margin-bottom: 20px;
          line-height: 100%;
          font-family: "Konkhmer Sleokchher", sans-serif;
        }
        .oct {
          font-size: 24px;
          font-weight: 700;
          line-height: 100%;
          font-family: "Inria Serif", serif;
          margin-bottom: 30px;
          color: rgba(144, 149, 160, 1);
        }
        .but {
          font-size: 24px;
          font-weight: 600;
          color: rgba(144, 149, 160, 1);
          font-family: "Inria Serif", serif;
          margin-bottom: 20px;
        }
        .myList {
          list-style: none;
          padding: 0;
          font-size: 24px;
          line-height: 1.8;
          display: inline-block;
          text-align: left;
          color: rgba(144, 149, 160, 1);
          font-weight: 400;
        }
        .myButton {
          background-color: rgba(231, 197, 138, 1);
          color: #fff;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          width:310px;
          border-radius:40px;
          font-size:24px;
          font-Weight:700;
        }
      `}</style>
        </>
    );
}

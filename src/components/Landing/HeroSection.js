"use client";
import { Container } from "react-bootstrap";

export default function HeroSection() {
    return (
        <>
            {/* === TOP SECTION === */}
            <div
                className="container-fluid p-0 m-0"
                style={{
                    backgroundImage: `url('/Images/Bg_Hero.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="d-flex align-items-center justify-content-center text-center ">
                    <img
                        src="/Images/ButterF.png"
                        alt="Butterfly"
                        className="butterfly-img"
                    />
                    <h1 className="lowiwed-title">LowiWed</h1>
                </div>
            </div>
            <div className="hero-section text-center">
                <div className="text-center">
                    <p className="sub-tagline">
                        LowiWED – because love is what truly matters
                    </p>
                    <h1 className="main-tagline">
                        Europe's <span className="highlight">Royal Wedding </span>{" "}
                        Marketplace is
                        <br />
                        <span className="highlight">Coming Soon!</span>
                    </h1>
                    <h1 className="main-taglines">
                        Launching on <span className="highlight">11th October </span>– Be
                        the
                        <br /> First to Join the Celebration
                    </h1>
                    <div className="time">
                        <h3 className="times">09 : 23 : 45</h3>
                        <div className="day">Days &nbsp; Hours &nbsp; Minutes</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero-section {
          margin-top: 0;
          padding-top: 0;
          background-image: url("/Images/Bg_Hero_Sec2.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          // min-height: 500px;
        }

        .lowiwed-title {
          font-family: "Abhaya Libre", serif;
          font-size: 42px;
          color: #cfb07c;
          margin: 0;
          padding: 0;
        }
        .butterfly-img {
          width: 150px;
          height: 110px;
        }

        .main-tagline {
          font-family: "Adamina", serif;
          font-size: 44px;
          color: #9095a0;
          font-weight: 900;
          padding-top: 10px;
          line-height: 100%;
          padding-bottom: 17px;
        }

        .main-taglines {
          font-family: "Adamina", serif;
          font-size: 38px;
          color: #9095a0;
          font-weight: 900;
          padding-bottom: 15px;
          line-height: 100%;
        }
        .time {
          display: inline-block;
          background: #fff;
          border-radius: 10px;
          padding: 15px 25px;
          border: 1px solid rgba(230, 184, 191, 1);
          color: #e6b8bf;
          margin-bottom: 20px;
        }
        .times {
          font-size: 39px;
        }
        .day {
          font-size: 20px;
        }
        .sub-tagline {
          font-family: "Adamina", serif;
          font-size: 22px;
          color: #e7bc73;
          padding-top: 40px;
          margin-bottom: 0;
        }

        .highlight {
          color: #e6b8bf;
        }

        @media (max-width: 1024px) {
          .lowiwed-title {
            font-size: 36px;
          }
          .butterfly-img {
            width: 15px;
            height: 100px;
          }
          .hero-section {
            min-height: 400px;
          }
          .main-tagline {
            font-size: 40px;
          }
          .main-taglines {
            font-size: 36px;
          }
          .sub-tagline {
            font-size: 20px;
            line-height: 28px;
          }
          .times {
            font-size: 36px;
          }
          .day {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .lowiwed-title {
            font-size: 34px;
          }
          .butterfly-img {
            width: 125px;
          }
          .hero-section {
            min-height: 350px;
          }
          .main-tagline {
            font-size: 36px;
          }
          .main-taglines {
            font-size: 34px;
          }
          .sub-tagline {
            font-size: 20px;
          }
          .times {
            font-size: 32px;
          }
          .day {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .lowiwed-title {
            font-size: 32px;
          }
          .butterfly-img {
            width: 120px;
            height: 90px;
          }
          .hero-section {
            min-height: 280px;
          }
          .main-tagline {
            font-size: 28px;
          }
          .main-taglines {
            font-size: 24px;
          }
          .sub-tagline {
            font-size: 16px;
          }
          .times {
            font-size: 28px;
          }
          .day {
            font-size: 14px;
          }
        }
      `}</style>
        </>
    );
}

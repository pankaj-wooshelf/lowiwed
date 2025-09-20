"use client";
const FeatureItems = [
    {
        id: 1,
        icon: "/Images/fea1.png",
        text: "One Platform, Every Language, Endless Possibilities!",
        border: "2px solid rgba(144, 149, 160, 1)",
    },
    {
        id: 2,
        icon: "/Images/fea2.png",
        text: "Coming Soon to 7 European Countries – Your Dream Wedding Awaits!",
        border: "2px solid rgba(144, 149, 160, 1)",
    },
    {
        id: 3,
        icon: "/Images/fea3.png",
        text: "Everything You Need for Your Perfect Day – All in One Place!",
        border: "2px solid rgba(144, 149, 160, 1)",
    },
];

export default function FeaturesSection() {
    return (
        <>
            <div className="growth-section card border-0 rounded-0 text-center d-flex align-items-center justify-content-center ">
                <div className="container mt-5 position-relative">
                    <div className="row text-center">
                        {FeatureItems.map((item) => (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4 px-4 mb-5">
                                <div
                                    className="p-5 h-100 "
                                    style={{
                                        border: item.border,
                                        // background: "linear-gradient(to bottom,#e6b8bf, rgba(189, 193, 202, 0.03)",
                                        borderRadius: "20px",
                                        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <img
                                        src={item.icon}
                                        alt={`icon${item.id}`}
                                        style={{
                                            width: "96px",
                                            height: "96px",
                                            marginBottom: "15px",
                                        }}
                                    />
                                    <p
                                        className="fw-bold"
                                        style={{
                                            fontSize: "24px",
                                            color: "rgba(144, 149, 160, 1)",
                                            lineHeight: "1.6",
                                            margin: 0,
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="growth-title">
                        The Countdown Begins - Don't Miss Your Chance!
                    </h2>
                    <div className="insideHeroSec mx-auto">
                        <div className="info-box mx-auto" style={styles.infoBox}>
                            {/* Left Flower */}
                            <div className="flower flower-left">
                                <img
                                    src="/Images/Beauti_Flower1.png"
                                    alt="Left Flower"
                                    width={329}
                                    height={152}
                                />
                            </div>

                            {/* Right Flower */}
                            <div className="flower flower-right">
                                <img
                                    src="/Images/Beauti_Flower1.png"
                                    alt="Right Flower"
                                    width={329}
                                    height={152}
                                />
                            </div>

                            {/* Content */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-sm-12 text-start">
                                    <ul className="list-unstyled m-0 content-list listUnderUi">
                                        <li>
                                            {/* <i className="bi bi-rocket-takeoff-fill me-3" /> */}
                                            OCTOBER 11, 2025: REGISTRATION OPENS - BE READY!
                                        </li>
                                        <li>
                                            {/* <i className="bi bi-translate me-3" /> */}
                                            November 11, 2025: GRAND LAUNCH - Platform Goes Live!
                                        </li>
                                        <li>
                                            {/* <i className="bi bi-briefcase-fill me-3" /> */}
                                            Limited Time: First-mover advantage for early registrants
                                        </li>
                                        {/* <li>
                      <i className="bi bi-person-heart me-3" />
                      Brides - 40 000 listed products
                    </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .growth-section {
          background-image: url("/Images/Bg_GrothSec.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          //   height: 500px;
        }

        .insideHeroSec {
          width: 100%;
          max-width: 1237px;
          height: auto;
          // padding-top:100px;
        }

        .flower {
          position: absolute;
          opacity: 0.71;
        }

        .flower-left {
          left: 60px;
          // bottom: 60px;
          transform: rotate(-90deg) scale(-1, 1);
        }

        .flower-right {
          right: 70px;
          // bottom: 70px;
          transform: rotate(-90deg) scaleY(-1);
        }
        .growth-title {
          font-family: "Adamina", serif;
          color: #e6b8bf;
          font-size: 30px;
          line-height: 1.4;
          font-weight: 400;
          margin-bottom: 2rem;
        }
        .listUnderUi {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: rgba(144, 149, 160, 1);
        }
        .content-list li {
          font-family: "Adamina", serif;
          font-size: 26px;
          line-height: 40px;
          color: #9095a0;
          margin-bottom: 1rem;
          display: flex;
          align-items: start;
          font-size: bold;
        }

        @media (max-width: 1024px) {
          .flower-left,
          .flower-right {
            display: none;
          }
          .content-list li {
            font-size: 18px;
            line-height: 28px;
          }
          .growth-title {
            font-size: 26px;
            line-height: 20px;
          }
          .info-box {
            width: 100% !important;
            padding: 1.5rem 1rem;
          }
        }

        @media (max-width: 576px) {
          .growth-section {
            // height: 280px;
          }
          .growth-section {
            background-size: cover;
            background-position: top center;
          }
          .content-list li {
            font-size: 15px;
            line-height: 20px;
          }

          .growth-title {
            font-size: 22px;
            line-height: 10px;
          }
        }

        @media (max-width: 400px) {
          .content-list li {
            font-size: 13px;
          }
          .growth-title {
            line-height: 20px;
            font-size: 20px;
          }
        }
      `}</style>
        </>
    );
}

const styles = {
    infoBox: {
        width: "900px",
        height: "auto",
        backgroundColor: "#F7F4ED",
        padding: "1rem 1.3rem",
        borderRadius: "10px",
        marginBottom: "25px",
        boxShadow: "0px 17px 35px 0px #171A1F3D, 0px 0px 2px 0px #171A1F1F",
    },
};

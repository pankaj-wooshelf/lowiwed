import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/YourAccount/profileDetail.module.css';
import { useAuth } from '@/common/AuthContext';
import { FaCamera } from 'react-icons/fa';
// import { NavLink } from 'react-bootstrap';

const ProfileSidebar = () => {
    const router = useRouter();
    const { section } = router.query; // dynamic route ka param
    const handleNavigation = (path) => {
        router.push(`/account/${path}`);
    };

    const menu = [
        {
            title: "Orders & Bookings",
            items: [
                { label: "Inbox", value: "chatUI" },
                { label: "My Orders", value: "allOrders" },
            ],
        },
        {
            title: "Saved & Wishlists",
            items: [
                { label: "My Wishlist", value: "wishlist" },
                { label: "Gift Cards & Coupons", value: "gift-cards" },
            ],
        },
        {
            title: "Account & Payment Info",
            items: [
                { label: "Saved Addresses", value: "addresses" },
                // { label: "Saved Cards & UPI (VPA)", value: "saved-cards" },
                { label: "Edit Profile", value: "edit-profile" },
            ],
        },
        {
            title: "Support & Logout",
            items: [
                // { label: "Contact Us / Chat", value: "contact-Us" },
                { label: "Help Center", value: "helpCenter" },
                // { label: "Frequently Asked Questions", value: "FrequentlyAskedQuestions" },
                // { label: "Support", value: "support" },
                // { label: "Report", value: "report" },
                { label: "Feedback", value: "feedback" },
                { label: "Logout", value: "logout" },
            ],
        },
    ];






    const { userData, tempProfilePic, setTempProfilePic, setTempProfilePicFile } = useAuth();
    const fileInputRef = useRef();


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTempProfilePic(URL.createObjectURL(file)); // preview ke liye
            setTempProfilePicFile(file); // actual file store
        }
    };

    return (
        <>
            <div className='d-flex flex-column '>
                <div className={styles.profileHeader} onClick={() => router.push('/account/profile')}>
                    <div className={styles.profileImageWrapper}>
                        <img
                            src={
                                tempProfilePic
                                    ? tempProfilePic
                                    : userData?.profile_picture
                                        ? `https://lowiwed-api.wooshelf.com/${userData.profile_picture}`
                                        : "/Images/SmileGirl.png"
                            }
                            alt="Profile"
                            className={styles.imageProfile}
                        />

                        <div
                            className={styles.cameraOverlay}
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                            <FaCamera className={styles.cameraIcon} />
                        </div>

                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />
                    </div>

                    <div className="px-2">
                        <p className={styles.userName}>{userData?.full_name || "Guest"}</p>
                        <p className={styles.userPhone}>{userData?.phone_number || ""}</p>
                    </div>
                </div>

                <div className={`${styles.navSection} w-100 m-0 mt-1`}>
                    {menu.map((group, i) => (
                        <div key={i}>
                            <h3 className={styles.sectionTitle}>{group.title}</h3>
                            {group.items.map((item) => (
                                <div
                                    key={item.value}
                                    // href={`/profileDetail/${item.value}`}
                                    onClick={() => handleNavigation(item.value)}
                                    className={`${styles.navItem} ${section === item.value ? styles.isActive : ""
                                        }`}
                                >
                                    {item.label}
                                </div>
                            ))}
                            {i !== menu.length - 1 && <hr />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProfileSidebar;

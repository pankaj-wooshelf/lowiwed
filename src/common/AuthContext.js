import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [tempProfilePic, setTempProfilePic] = useState(null);
    const [tempProfilePicFile, setTempProfilePicFile] = useState(null);
    // const [message, setMessage] = useState(null);

    const resetTempProfilePic = () => {
        setTempProfilePic(null);
        setTempProfilePicFile(null);
    };

    const [token, setToken] = useState(Cookies.get("access_token") || null);

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/buyer-account/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setUserData(response.data.response);
            }
        } catch (error) {
            Cookies.remove("access_token");
            setUserData(null);
            setToken(null);
        }
    };


    const updateUser = async (formData) => {
        try {
            const response = await axios.put(`${BASE_URL}/buyer-account/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                toast.success(response.data.message)
                await fetchUserData();
            }

            return response;
        } catch (error) {
            toast.error(error.response?.data?.response || error.message);

        }
    };



    useEffect(() => {
        if (token) {
            axios
                .get(`${BASE_URL}/user-profile/`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    if (res.data?.status_code === 200) {
                        setUser(res.data.response);
                    } else {
                        setUser(null);
                        setToken(null);
                        Cookies.remove("access_token");
                    }
                })
                .catch(() => {
                    setUser(null);
                    setToken(null);
                    Cookies.remove("access_token");
                });
        }
    }, [token, BASE_URL]);

    // Fetch buyer account data initially
    useEffect(() => {
        const role = Cookies.get("role");
        if (token && role === "buyer") {
            fetchUserData();
        }
    }, [token]);


    // Login & Logout
    const login = (newToken) => {
        Cookies.set("access_token", newToken);
        setToken(newToken);
    };

    const logout = () => {
        Cookies.remove("access_token");
        setToken(null);
        setUser(null);
        setUserData(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                userData,
                fetchUserData,
                updateUser,
                tempProfilePic,
                setTempProfilePic,
                tempProfilePicFile,
                setTempProfilePicFile,
                resetTempProfilePic,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);



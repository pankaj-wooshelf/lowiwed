import { useRouter } from "next/router";
import Footer from "@/common/Footer";
import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import InnerHeader from "@/common/InnerHeader";
import HeroSection from "@/components/Landing/HeroSection";
import CategoriesHeroSection from "@/components/Categories/CategoriesHeroSection";
import CategoriesCards from "@/components/Categories/CategoriesCards";
import WeddingVision from "@/components/Categories/WeddingVision";
import Promotions from "@/components/Categories/Promotions";

const categories = () => {
    const router = useRouter()
    const { categoryId } = router.query

    const [productsCat, setProductsCat] = useState([]);
    const [loading, setLoading] = useState(false)
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        if (!categoryId) return;
        const fetchProductsCategory = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${BASE_URL}/public-products/?category_id=${categoryId}`)
                console.log(response.data.results.response);
                console.log(response.data.results);

                if (response.status == 200) {
                    setProductsCat(response.data.results.response);
                }
            } catch (error) {
                toast.error(error.response?.data?.response)
            } finally {
                setLoading(false)
            }
        }

        fetchProductsCategory()
    }, [categoryId])

    return (
        <div>
            <InnerHeader />
            <CategoriesHeroSection productsCat={productsCat} />
            <CategoriesCards productsCat={productsCat} loading={loading} />
            <WeddingVision />
            <Promotions />

            <div className='mt-5'>

                <Footer />
            </div>
        </div>
    )
}

export default categories

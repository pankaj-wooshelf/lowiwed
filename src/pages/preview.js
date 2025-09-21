import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from '../styles/VenueSection/herosec.module.css'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import InnerHeader from '@/common/InnerHeader';
import InnerNavbar from '@/common/InnerNavbar';
import Footer from '@/common/Footer';
import ProductDeatail from '@/components/Preview/ProductDeatail';
import OfferDiscount from '@/components/Preview/OfferDiscount';
import Reviews from '@/components/Preview/Reviews';
import SimilarWedding from '@/components/Preview/SimilarWedding';
import NewsLatter from '@/components/Preview/NewsLatter';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const venueDetail = () => {

    const router = useRouter();
    const { productId, categoryId } = router.query;
    console.log(productId + "router");
    const [productData, setProductData] = useState({});
    const [gallery, setGallery] = useState([])
    const [faq, setFaq] = useState([])
    const [deal, setDeal] = useState([])
    const [reviewsD, setReviewDetail] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (productId && categoryId) {
            fetchData();
        }
    }, [productId, categoryId]);


    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(
                `${BASE_URL}/public-products/${productId}/?category_id=${categoryId}`
            );
            setProductData(res.data.response);
            setGallery(res.data.response.gallery)
            setFaq(res.data.response.faq)
            setDeal(res.data.response.deals)
            setReviewDetail(res.data.response.reviews)
            console.log(res.data.response);

        } catch (error) {
            // console.error("Error fetching product details", err);
            toast.error(error.response?.data?.message || "Error fetching product details")
        } finally {
            setLoading(false)
        }
    };
    return (
        <div>
            <InnerHeader />
            <Container className={`${styles.navbarWrapper} mt-2`}>
                <InnerNavbar />
            </Container>
            <Container className={styles.breadcrumbWrapper}>
                <p className={`${styles.breadcrumb}`}>Home &gt; {productData?.product?.seller?.business_name}
                </p>
            </Container>
            <ProductDeatail product={productData} gallery={gallery} faq={faq} />
            <OfferDiscount deal={deal} />
            <Reviews reviewsD={reviewsD} product={productData} loading={loading} />
            <SimilarWedding categoryId={categoryId} />
            <NewsLatter />
            <div className='mt-5'>
                <Footer />
            </div>

        </div>
    )
}

export default venueDetail

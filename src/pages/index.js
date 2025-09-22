import Footer from '@/common/Footer'
import Header from '@/common/Header'
import Navbar from '@/common/Navbar'
import HeroSectionHome from '@/components/home/HeroSectionHome'
import React, { useEffect, useState } from 'react'
import BenefitsSection from '@/components/home/BenefitsSection'
import MemberBenifit from '@/components/home/MemberBenifit'
import CategoriesSection from '@/components/home/CategoriesSection'
import BusinessesSection from '@/components/home/BusinessesSection'
import JoinVendorPromoSection from '@/components/home/JoinVendorPromoSectionN'
import PromotedAdsSection from '@/components/home/PromotedAdsSection'
import UpcomingSubsribe from '@/components/home/UpcomingSubsribe'
import FeaturedVendors from '@/components/home/FeaturedVendors'
import VendorSuccessStories from '@/components/home/VendorSuccessStories'
import axios from "axios";
import { toast } from 'react-toastify'


const home = () => {


  const [brideData, setBrideData] = useState([]);
  const [businessData, setBusinessData] = useState([])
  const [loading, setLoading] = useState(false);
  const [homeContent, setHomeContent] = useState([])
  const [banner, setBanner] = useState([])
  // const [error, setError] = useState([]);

  const fetchData = async () => {
    // setLoading(true);
    try {
      setLoading(true)
      const response = await axios(
        "https://lowiwed-api.wooshelf.com/v1/api/benefits-list/");
      if (response.status === 200) {
        console.log(response.data.response);
        setHomeContent(response.data.response.home_content)
        setBanner(response.data.response.banner)
        const apiData = response.data.response.benefits || [];

        // This Data For Benifit 
        const filteredAndSortedDataBride = [...apiData]
          .filter((item) => item.benefit_type === "bride")
          .sort((a, b) => a.id - b.id);

        const filteredAndSortedDataBusiness = [...apiData]
          .filter((item) => item.benefit_type === "business")
          .sort((a, b) => a.id - b.id);

        setBrideData(filteredAndSortedDataBride);
        setBusinessData(filteredAndSortedDataBusiness)
      }
    } catch (error) {
      toast.error(error?.response?.data?.response)
    } finally {
      setLoading(false)
    }
  };
  // console.log(benifitData);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <Header />
      <Navbar />
      <HeroSectionHome homeContent={homeContent} />
      <BenefitsSection brideData={brideData} businessData={businessData} loading={loading} />
      <MemberBenifit />
      <CategoriesSection />
      <JoinVendorPromoSection banner={banner} />
      <BusinessesSection />
      <PromotedAdsSection />
      <UpcomingSubsribe homeContent={homeContent} />
      <FeaturedVendors />
      <VendorSuccessStories />
      <Footer />
    </div>
  )
}

export default home

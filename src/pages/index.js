import Footer from '@/common/Footer'
import Header from '@/common/Header'
import Navbar from '@/common/Navbar'
import HeroSectionHome from '@/components/home/HeroSectionHome'
import React from 'react'
import BenefitsSection from '@/components/home/BenefitsSection'
import MemberBenifit from '@/components/home/MemberBenifit'
import CategoriesSection from '@/components/home/CategoriesSection'
import BusinessesSection from '@/components/home/BusinessesSection'
import JoinVendorPromoSection from '@/components/home/JoinVendorPromoSectionN'
import PromotedAdsSection from '@/components/home/PromotedAdsSection'
import UpcomingSubsribe from '@/components/home/UpcomingSubsribe'
import FeaturedVendors from '@/components/home/FeaturedVendors'
import VendorSuccessStories from '@/components/home/VendorSuccessStories'


const home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSectionHome />
      <BenefitsSection />
      <MemberBenifit />
      <CategoriesSection />
      <JoinVendorPromoSection />
      <BusinessesSection />
      <PromotedAdsSection />
      <UpcomingSubsribe />
      <FeaturedVendors />
      <VendorSuccessStories />
      <Footer />
    </div>
  )
}

export default home

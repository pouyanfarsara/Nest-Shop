import Banners from "../components/layout/Banners";
import Category from "../components/layout/category";
import ShopByCategories from "../components/layout/Categoryshop";
import DealsSection from "../components/layout/Dealssection";
import ProductTags from "../components/layout/Producttags";
import ShopHeader from "../components/layout/shopheader";
import ShopNavbar from "../components/layout/shopnavbar";
import Footer from "../components/layout/Footer";
import ProductsSection from "../components/layout/Trendproduct";
import FeatureCards from "../components/layout/Features";
import FooterBottom from "../components/layout/FooterBottom";

export default function ShopLayout({ children }) {
  return (
    <>
      <div className="container">
        <ShopHeader />
        <ShopNavbar />
      </div>

      <div className="w-full pt-5 container mx-auto flex gap-3">
        <div className="w-full lg:w-4/5">
          <main>{children}</main>
        </div>

        <div className="hidden lg:w-1/5 pt-6 md:flex flex-col gap-7">
          <Category />
          <ProductTags />
        </div>
      </div>

      <DealsSection />
      <Banners />
      <ShopByCategories />
      <ProductsSection />
      <FeatureCards />
      <Footer />
      <FooterBottom />
    </>
  );
}
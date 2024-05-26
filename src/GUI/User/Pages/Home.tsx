import { BannerHero } from "../component/BannerHero";
import { Banner } from "../component/Banner";
import { FeaturedProduct } from "../component/FeaturedProduct";
import { Blogs } from "../component/Blogs";
import { Footer } from "../component/Footer";
export default function Home() {
  return (
    <div>
      <body>
        <BannerHero></BannerHero>
        <FeaturedProduct />
        <Banner></Banner>
        <Blogs />
        <Footer />
      </body>
    </div>
  );
}

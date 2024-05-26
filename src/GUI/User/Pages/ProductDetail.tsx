import { BreadcrumbSection } from "../component/BreadcrumbSection";
import { Footer } from "../component/Footer";
import { ProductDetailItems } from "../component/ProductDetailItems";
import { RelatedProduct } from "../component/RelatedProduct";
export const ProductDetail = () => {
  return (
    <>
      <body>
        <BreadcrumbSection />
        <ProductDetailItems />
        <RelatedProduct />
        <Footer />
      </body>
    </>
  );
};

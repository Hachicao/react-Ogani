import React, { useEffect } from "react";
import { ProductDepartment } from "./ProductDepartment";
import { ProductCategoryItems } from "./ProductCategoryItems";
import { listProduct } from "../../../BLL/ProductItem";
import { useLocation } from "react-router-dom";

export const ProductSection = () => {
  const [sortOption, setSortOption] = React.useState(0);
  const [sortedProducts, setSortedProducts] = React.useState(listProduct);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filteredProducts, setFilteredProducts] = React.useState(listProduct);

  const itemPerPage = 6;

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search")?.toLowerCase() ?? "";

  useEffect(() => {
    const filtered = listProduct.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  }, [search]);
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortOption(parseInt(sortValue));
    sortProduct(parseInt(sortValue));
  };
  const sortProduct = (sortValue: number) => {
    const products = [...listProduct];
    switch (sortValue) {
      case 0:
        products.sort((a, b) => b.price - a.price);
        break;
      case 1:
        products.sort((a, b) => a.price - b.price);
        break;
      case 2:
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 3:
        products.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setSortedProducts(products);
  };
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedProducts.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <ProductDepartment />
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select value={sortOption} onChange={handleSortChange}>
                        <option value="0">Price(Hightest)</option>
                        <option value="1">Price(Lowest)</option>
                        <option value="2">Name(A-Z)</option>
                        <option value="3">Name(Z-A)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>{sortedProducts.length}</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {currentItems.map((product) => (
                  <ProductCategoryItems
                    key={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                  />
                ))}
              </div>
              <div className="product__pagination">
                {pageNumbers.map((number) => (
                  <a
                    key={number}
                    href="#!"
                    onClick={() => handlePageChange(number)}
                    className={number === currentPage ? "active" : ""}
                  >
                    {number}
                  </a>
                ))}
                <a
                  href="#!"
                  onClick={() =>
                    handlePageChange(
                      currentPage < pageNumbers.length
                        ? currentPage + 1
                        : currentPage
                    )
                  }
                >
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

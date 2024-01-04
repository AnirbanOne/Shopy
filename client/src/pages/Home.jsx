import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import { Toaster, toast } from "sonner";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SearchFilterSort from "../components/SearchFilterSort";
import loader from '../assets/loader.svg';
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [perPage] = useState(8);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 0;
  const [displayProducts, setDisplayedProducts] = useState(products);

  useEffect(() => {
    setPageCount(Math.ceil(displayProducts.length / perPage));
  }, [displayProducts, perPage]);

  useEffect(() => {
    setOffset(currentPage * perPage);
    setSearchParams({ page: currentPage.toString() });
  }, [currentPage, perPage, setSearchParams]);

  const handlePageChange = ({ selected }) => {
    console.log(selected);
    setSearchParams({ page: selected.toString() });
  };
  
  useEffect(() => {
    setDisplayedProducts(products)
  }, [products
  ])

  const displayedProducts = displayProducts.slice(offset, offset + perPage);

  if (products.length === 0) {
    toast.warning("Please add a product");
    return (
      <section className="h-screen flex justify-center items-center">
        <img className="w-[80px] h-[80px] " src={loader} alt="loader" />
      </section>
    );
  }
  

  return (
    <div>
    <Hero/>
      <section className="py-16 px-16 items-center">
        <Toaster richColors position="top-center" />
        <div className="justify-center mx-auto flex mt-6">
          <SearchFilterSort
            products={products}
            setDisplayedProducts={setDisplayedProducts}
            displayProducts={displayProducts}
          />
        </div>
        <div className="container mx-auto mt-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {displayedProducts.map((item) => {
              return <Product key={item.id} data={item} />;
            })}
          </div>

          <div className="pagination justify-center">
            <ReactPaginate
              previousLabel={
                <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md mr-4 ">
                  <FaChevronLeft />
                </span>
              }
              nextLabel={
                <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
                  <FaChevronRight />
                </span>
              }
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={5}
              pageRangeDisplayed={2}
              containerClassName={"flex item-center justify-center mt-8 mb-4"}
              pageClassName={
                "block border border-solid border-gray-200 hover:border-gray-300 w-10 h-10 flex items-center justify-center rounded-md mr-4 hover:scale-105 transition duration-300"
              }
              onPageChange={handlePageChange}
              activeClassName={"bg-rose-200"}
              forcePage={currentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

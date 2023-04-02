import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import ProductCard from "./components/productCard/ProductCard";
import { productData } from "./data/products";
import CartPage from "./CartPage";
function StorePage() {
  const url = "https://dummyjson.com/products";
  const [products, setProducts] = useState();

  const getProducts = () => {
    axios
      .get(url)
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err));
    console.log(products.products);
  };
  useEffect(() => {
    console.log(productData);
    // getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-8">
            <div className="row product-row">
              {productData.products &&
                productData.products.map((product, i) => (
                  <ProductCard product={product} key={i} />
                ))}
            </div>
          </div>
          <div className="col-4">
            <CartPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default StorePage;

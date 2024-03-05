import { useLoaderData, Link } from "react-router-dom";
import "./Products.css";

export async function loader() {
  const url = "https://fakestoreapi.com/products";
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const Products = () => {
  const { data } = useLoaderData();

  return (
    <>
      <div className="product-list-container">
        <div className="product-categories">
          <h2 className="category-header">Categories</h2>
          <Link to="/category/electronics" className="category-electronics">
            Electronics
          </Link>
          <Link to="/category/jewelery" className="category-jewlery">
            Jewelery
          </Link>
          <Link
            to="/category/men's clothing"
            className="category-mens-clothing"
          >
            Men's Clothing
          </Link>
          <Link
            to="/category/women's clothing"
            className="category-womens-clothing"
          >
            Women's Clothing
          </Link>
        </div>
        {/* <h2>Product List</h2> */}
        <div className="product-list">
          <ul>
            {data.map((product, index) => {
              return (
                <li className="product-card" key={index}>
                  <Link to={`/products/${product.id}`}>
                    <div className="product-title">{product.title}</div>
                    <div>
                      <img className="image" src={product.image} />
                    </div>
                    <div className="product-price">Price: {product.price}</div>
                  </Link>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;

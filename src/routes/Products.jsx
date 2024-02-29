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
      <div className="product-list">
        <h2>Product List</h2>
        <ul>
          {data.map((product, index) => {
            return (
              <li key={index}>
                <Link to={Products.id}>
                  <div className="product-title">{product.title}</div>
                  <div>
                    <img className="image" src={product.image} />
                  </div>
                  <div className="product-price">Price: {product.price}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Products;

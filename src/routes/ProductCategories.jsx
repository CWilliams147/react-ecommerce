import { useLoaderData, Link } from "react-router-dom";
import "./Categories.css";

export async function loader({ params }) {
  const { category } = params;
  const url = `https:fakestoreapi.com/products/category/${category}`;
  const data = await fetch(url).then((response) => response.json());

  return { data, category };
}

const ProductsCategory = () => {
  const { data, catgeory } = useLoaderData();

  return (
    <div className="categories-container">
      <h2 className="category-header">{catgeory} Categories</h2>
      <div>
        <Link to="/category/electronics" className="category-electronics">
          Electronics
        </Link>
        <Link to="/category/jewelery" className="category-jewlery">
          Jewelery
        </Link>
        <Link to="/category/men's clothing" className="category-mens-clothing">
          Men's Clothing
        </Link>
        <Link
          to="/category/women's clothing"
          className="category-womens-clothing"
        >
          Women's Clothing
        </Link>
      </div>
      <div className="category-product-list">
        <ul>
          {data.map((product, index) => (
            <li className="product-card" key={index}>
              <Link to={`/products/${product.id}`}>
                <div className="product-title">{product.title}</div>
                <div>
                  <img className="image" src={product.image} />
                </div>
                <div className="product-price">Price: {product.price}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsCategory;

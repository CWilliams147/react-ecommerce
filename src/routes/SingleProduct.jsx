import { useLoaderData } from "react-router-dom";
import "./singleProduct.css";

export async function loader({ params }) {
  const { id } = params;
  const url = `https://fakestoreapi.com/products/${id}`;
  const data = await fetch(url).then((response) => response.json());
  return { data };
}

const SingleProduct = () => {
  const { data } = useLoaderData();
  return (
    <div className="single-item-container">
      <div className="single-item-title">{data.title}</div>
      <img className="single-item-image" src={data.image} />
      <div className="single-item-description">{data.description}</div>
      <div className="single-item-price">Price:${data.price}</div>
    </div>
  );
};

export default SingleProduct;

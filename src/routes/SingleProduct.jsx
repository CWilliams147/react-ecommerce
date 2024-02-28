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
    <p>
      {" "}
      {data.title}
      <img id="image" src={data.image} />
      {data.description} {data.price}
    </p>
  );
};

export default SingleProduct;

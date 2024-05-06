import Button from "@/components/Button";
import axios from "axios";

const url = "https://dummyjson.com/products";

const {data: { products } } = await axios.get(url);

export default function index() {
  return (
    <>
      {products.map(({ title, description, id }) => {
        return (
          <>
            <div key={id}>
              <h1>{title}</h1>
              <p>{description}</p>
              <Button tit={title} />
            </div>
          </>
        );
      })}
    </>
  );
}

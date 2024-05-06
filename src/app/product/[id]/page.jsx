import axios from "axios";

const url = "https://dummyjson.com/products/";

export default async function index({ params }) {
  const { data } = await axios.get(url + params.id);
 

  return <>salam product-in adi  {data.title}</>;
}

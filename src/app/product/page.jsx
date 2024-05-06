import Button from "@/components/Button";
import axios from "axios";
import Image from "next/image";

const url = "https://dummyjson.com/products";

const {
  data: { products },
} = await axios.get(url);

export default function index() {
  return (
    <>
      <Image
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfbGlvbl9pc29sYXRlZF9vbl9jb2xvcl9iYWNrZ3JvdW5kXzJhNzgwMjM1LWRlYTgtNDMyOS04OWVjLTY3ZWMwNjcxZDhiMV8xLmpwZw.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />

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

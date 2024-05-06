"use client"

export default function Button({ tit }) {
  return (
    <>
      <button
        onClick={() => {
          console.log("remove" + tit);
        }}
      >
        remove {tit}</button>
    </>
  );
}

export default function Button({ title }) {
  return (
    <>
      <button onClick={() => {
        console.log('remove' + title);
      }}>remove {title}</button>
    </>
  );
}

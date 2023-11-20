import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>pages-example-1</h1>
      <Link href={"/"}>index (app router)</Link>
      <br />
      <Link href={"/app-example-1"}>/app-example-1</Link>
    </>
  );
}

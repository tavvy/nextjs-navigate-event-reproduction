import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <h1>Index (app router)</h1>
      <Link href={"/app-example-1"}>/app-example-1</Link>
      <br />
      <Link href={"/pages-example-1"}>/pages-example-1</Link>
    </>
  );
}

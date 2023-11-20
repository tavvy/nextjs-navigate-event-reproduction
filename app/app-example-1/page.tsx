import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <h1>app-example-1</h1>
      <Link href={"/"}>index</Link>
      <br />
      <Link href={"/pages-example-1"}>/pages-example-1</Link>
    </>
  );
}

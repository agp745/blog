import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-red-200 text-white">
      <Link href={"/newpost"}>/newpost</Link>
      <Link href={"/post"}>/post</Link>
      <Link href={"/blog"}>/blog</Link>
    </main>
  );
}

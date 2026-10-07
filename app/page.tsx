import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Next.js Practical Demo</h1>

      <p>
        This is a simple demo application that demonstrates how to implement
        authentication using Next.js and NextAuth.
      </p> 
      <Link href="/login">Go to Login Page</Link>
    </main>
  );
}
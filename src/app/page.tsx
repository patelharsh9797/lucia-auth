import { db } from "@/server/db";
import Image from "next/image";

export default async function Home() {
  const posts = await db.query.Test.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts: </h1>
      {posts.map((post) => (
        <p key={post.id}>{post.email}</p>
      ))}
    </main>
  );
}

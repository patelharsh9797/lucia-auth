import { db } from "@/server/db";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const posts = await db.query.tests.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1>Names: </h1>
      <Button variant={"destructive"}>Shadcn Button</Button>
      {posts.map((post) => (
        <p key={post.id}>{post.name}</p>
      ))}
    </main>
  );
}

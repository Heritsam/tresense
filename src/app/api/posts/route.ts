import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Error fetching posts:", error);
    return new Response("Error fetching posts", { status: 500 });
  }

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

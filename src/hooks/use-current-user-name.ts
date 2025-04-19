import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

export function useCurrentUserName() {
  const [name, setName] = useState<string | null>(null);
  const [status, setStatus] = useState<"pending" | "error" | "success">(
    "pending"
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileName = async () => {
      setStatus("pending");
      setError(null);

      try {
        const supabase = createClient();

        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        const userId = sessionData?.session?.user?.id;
        if (!userId) throw new Error("User ID not found");

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", userId)
          .single();

        if (profileError) throw profileError;

        setName(profile.full_name);
        setStatus("success");
      } catch (err: Error | unknown) {
        console.error(err);

        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "string") {
          setError(err);
        } else {
          setError("An unknown error occurred");
        }

        setStatus("error");
        setName(null);
      }
    };

    fetchProfileName();
  }, []);

  return { name, status, error };
}

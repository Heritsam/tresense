import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function useCurrentSession() {
  const [session, setSession] = useState<Session | null>(null);
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

        // Get the current session
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();

        if (sessionError) throw sessionError;

        setSession(sessionData?.session);
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
        setSession(null);
      }
    };

    fetchProfileName();
  }, []);

  return { session, status, error };
}

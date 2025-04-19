import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchProfileName = async () => {
      const { data, error } = await createClient().auth.getSession();
      if (error) {
        console.error(error);
      }

      setUser(data.session?.user ?? null);
    };

    fetchProfileName();
  }, []);

  return user;
};

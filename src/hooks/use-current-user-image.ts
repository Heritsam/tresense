import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function useCurrentUserImage() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      const { data, error } = await createClient().auth.getSession();
      if (error) {
        console.error(error);
      }

      setImage(data.session?.user.user_metadata.picture ?? null);
    };
    fetchUserImage();
  }, []);

  return image;
}

import useSWR from "swr";
import { createClient } from "@/utils/supabase/client"; // Assuming 'createClient' returns a Supabase client instance
import { useState } from "react";

export const useUser = () => {
  const supabase = createClient(); // Ensure Supabase client initialization
  const [isLoading, setIsLoading] = useState(true);
  const { data, error } = useSWR("user", async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser().finally(() => setIsLoading(false));

    return user; // Return only the user data
  });

  return {
    user: data,
    isLoading: !data ? isLoading : false,
    error: error,
  };
};
export function getUserRole(id: string) {
  const supabase = createClient(); // Ensure Supabase client initialization
  const { data, error, isLoading } = useSWR("user", async () => {
    const { data, error } = await supabase
      .from("Users")
      .select("role")
      .eq("id", id)
      .single();
    return { data, error };
  });

  return {
    role: data?.data,
    isLoading: isLoading,
    error: data?.error,
  };
}

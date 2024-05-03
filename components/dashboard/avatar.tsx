import { auth } from "@/auth";
import { createClient } from "@/utils/supabase/server";
import { User } from "lucide-react";
import Image from "next/image";

export default async function UseAvatar() {
  const user = (await createClient().auth.getUser()).data.user;

  if (!user || user.user_metadata.avatar_url == null) {
    return <User className="h-9 w-9" />;
  }
  return (
    <img
      width={36}
      height={36}
      src={user.user_metadata.avatar_url}
      alt="avatar"
    />
  );
}

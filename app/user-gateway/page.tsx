"use client";
import SignOut from "./signout";
import SignIn from "./signin";
import { useUser } from "@/utils/supabase/SWR/getUser";
import Loader from "@/components/loader";

export default function GatewayPage() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loader />;
  return (
    <div className="w-screen h-screen grid place-items-center">
      {user != null ? <SignOut /> : <SignIn />}
    </div>
  );
}

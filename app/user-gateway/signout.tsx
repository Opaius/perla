"use client";
import Loader from "@/components/loader";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@/utils/supabase/SWR/getUser";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";
import Link from "next/link";
export default function SignOut() {
  const { user, isLoading } = useUser();
  const supabase = createClient();
  if (isLoading) return <Loader />;
  return (
    <Card className="max-w-[300px] w-[90dvw]">
      <CardHeader className="flex flex-row gap-4 items-center justify-between">
        <text>Bine ai revenit {user?.user_metadata.full_name}</text>
        <img
          className="w-9 h-9 rounded-full"
          src={user?.user_metadata.avatar_url ?? ""}
        ></img>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          variant={"destructive"}
          onClick={() => {
            supabase.auth.signOut();
            revalidatePath("/user-gateway", "layout");
          }}
        >
          Sign Out
        </Button>
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Mergi înapoi
        </Link>
      </CardContent>
    </Card>
  );
}

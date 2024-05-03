"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { getURL } from "@/utils/supabase/client-actions";
import Link from "next/link";

export default function SignIn() {
  const supabase = createClient();
  return (
    <Card className="max-w-[300px] w-[90dvw]">
      <CardHeader className="flex flex-row gap-4 items-center justify-between">
        <text>Bine ai venit !!</text>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          variant={"default"}
          onClick={() => {
            supabase.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: getURL("/api/auth?next=/dashboard") },
            });
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={() => {
            console.log(getURL("/api/auth?next=/dashboard"));
          }}
        >
          Try
        </Button>
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          Mergi înapoi
        </Link>
      </CardContent>
    </Card>
  );
}

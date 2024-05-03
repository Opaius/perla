import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next");
  const redirectTo = request.nextUrl.clone();
  redirectTo.searchParams.delete("code");
  redirectTo.searchParams.delete("next");
  if (next) {
    redirectTo.pathname = next;
  }
  console.log(request);
  if (code) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log(error);
    return NextResponse.redirect(redirectTo);
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = "/error";
  return NextResponse.redirect(redirectTo);
}

import Link from "next/link";
import {
  Building,
  Calendar,
  HomeIcon,
  Package2,
  PanelLeft,
  SettingsIcon,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CTooltip from "@/components/dashboard/c-tooltip";
import CLink from "@/components/dashboard/c-link";
import UseAvatar from "@/components/dashboard/avatar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getURL } from "@/utils/supabase/actions";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dasboard-ul aplicatiei",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return redirect("/user-gateway");
  const { data, error } = await supabase
    .from("Users")
    .select("role")
    .eq("id", user.id)
    .single();
  if (data?.role != "admin") return redirect("/");
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <TreePine className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Perla Brazilor</span>
          </Link>
          <CTooltip href="/dashboard" logo={<HomeIcon />} tooltip="Dashboard" />
          <CTooltip
            href="/dashboard/properties"
            logo={<Building />}
            tooltip="Proprietăți"
          />
          <CTooltip
            href="/dashboard/calendar"
            logo={<Calendar />}
            tooltip="Proprietăți"
          />
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <CTooltip
            href="/settings"
            logo={<SettingsIcon />}
            tooltip="Settings"
          />
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toogle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <CLink href="/dashboard" logo={<HomeIcon />} text="Dashboard" />
                <CLink
                  href="/dashboard/properties"
                  logo={<Building />}
                  text="Proprietăți"
                />
                <CLink
                  href="/dashboard/calendar"
                  logo={<Calendar />}
                  text="Calendar"
                />
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto" asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <UseAvatar />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user.user_metadata.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/user-gateway">Sign Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}

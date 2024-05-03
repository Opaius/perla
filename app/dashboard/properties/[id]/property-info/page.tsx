"use client";
import { getOneProperty } from "@/utils/supabase/SWR/actions-get";
import PropertyForm from "./property-info-form";
import Loader from "@/components/loader";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import { createClient } from "@/utils/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

export default function Page(params: { params: { id: string } }) {
  const { property, error, isLoading, refetch } = getOneProperty(
    params.params.id
  );
  if (isLoading) return <Loader />;
  return (
    <div className="p-10">
      <PropertyForm property={property} refetch={refetch} />
      <AlertDialog>
        <AlertDialogTrigger
          className={buttonVariants({ variant: "destructive" })}
        >
          Sterge Proprietatea
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            Esti sigur ca doresti sa stergi aceasta proprietate?
          </AlertDialogHeader>
          <AlertDialogDescription>
            Proprietatea si camerele se vor sterge si nu poti sa faci nimic sa
            le recuperezi
          </AlertDialogDescription>
          <AlertDialogFooter className="flex justify-between">
            <AlertDialogCancel
              className={buttonVariants({ variant: "default" })}
            >
              Anuleaza
            </AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
              onClick={async () => {
                const supabase = createClient();
                const { error } = await supabase
                  .from("Properties")
                  .delete()
                  .eq("id", params.params.id);
                if (error) {
                  toast({
                    title: "Eroare la stergere",
                    description: error.message,
                    variant: "destructive",
                  });
                } else {
                  toast({
                    title: "Proprietatea a fost stearsa cu succes",
                  });
                  redirect("/dashboard/properties");
                }
              }}
            >
              Sterge
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

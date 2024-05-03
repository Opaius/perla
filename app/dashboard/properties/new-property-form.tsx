"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import useImageUpload from "@/utils/custom-hooks";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
export default function NewPropertyForm() {
  const formSchema = z.object({
    property_name: z.string().min(3).min(1),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("Properties") // Replace with your table name
      .insert([
        {
          name: values.property_name,
        },
      ]);

    if (error) {
      toast({
        title: "Eroare la adăugarea proprietății",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Proprietatea a fost adaugata cu success",
      });
      form.reset();
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <span className="flex flex-col sm:items-center gap-5 my-5">
          <p>Numele proprietății</p>
          <FormField
            name="property_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="max-w-[200px] " {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="flex flex-col items-center gap-2"></span>
        </span>
        <DialogClose
          type="submit"
          disabled={!form.formState.isValid}
          className={buttonVariants({ variant: "default" })}
        >
          Adauga
        </DialogClose>
      </form>
    </Form>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import useImageUpload from "@/utils/custom-hooks";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function RoomTypeForm(props: { propertyId: string }) {
  const formSchema = z.object({
    name: z.string().min(1).min(3),
    pricing: z.preprocess(
      (val) => parseInt(val as string, 10),
      z.number().nonnegative()
    ),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pricing: 0,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();

    const { error } = await supabase.from("RoomTypes").insert({
      name: values.name,
      pricing: values.pricing,
      property_id: props.propertyId,
    });
    if (error) {
      toast({
        title: "Eroare la adăugarea tipului de cameră",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Tipul de camera a fost adaugat cu succes",
      });
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <Label htmlFor="property_name">Numele Tipului de camera</Label>
              <FormControl>
                <Input id="property_name" className="w-max" {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="pricing"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <Label htmlFor="property_name">Pretul Tipului De Camera</Label>
              <FormControl>
                <Input
                  id="property_name"
                  type="number"
                  className="w-max"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={`${
            !form.formState.isDirty && "opacity-0 pointer-events-none"
          } transition-all my-5`}
        >
          Adauga
        </Button>
      </form>
    </Form>
  );
}

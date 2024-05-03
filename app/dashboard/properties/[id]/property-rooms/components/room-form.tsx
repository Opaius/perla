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
import { toast } from "@/components/ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function RoomTypeForm(props: { roomType: any }) {
  const formSchema = z.object({
    name: z.string().min(1).min(3),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();

    const { error } = await supabase.from("Rooms").insert({
      name: values.name,
      type: props.roomType.id,
    });
    if (error) {
      toast({
        title: "Eroare la adăugarea camerei",
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

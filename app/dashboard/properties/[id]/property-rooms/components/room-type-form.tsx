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

export default function RoomTypeEditForm(props: {
  roomType: any;
  refetch: any;
}) {
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
      pricing: props.roomType.pricing,
      name: props.roomType.name,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();

    const { error } = await supabase
      .from("RoomTypes")
      .update({
        name: values.name,
        pricing: values.pricing,
      })
      .match({ property_id: props.roomType.property_id });
    if (error) {
      toast({
        title: "Eroare la editarea tipului de cameră",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Tipul de camera a fost editat cu succes",
      });
      props.refetch();
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
          Editeaza
        </Button>
      </form>
    </Form>
  );
}

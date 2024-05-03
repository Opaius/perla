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

export default function PropertyForm(props: { property: any; refetch: any }) {
  const formSchema = z.object({
    property_name: z
      .string()
      .min(4, "Proprietatea trebuie sa aiba cel putin 4 litere"),
    property_id: z.number(),
    room_number: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      property_name: props.property.name,
      property_id: props.property.id,
      room_number:
        props.property.room_number == null ? "" : props.property.room_number,
    },
  });
  const { file, handleFileChange, previewUrl } = useImageUpload();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();

    if (file) {
      const upload = await supabase.storage
        .from("properties")
        .upload(`${props.property.id}/profile-pic`, file, {
          upsert: true,
        });
      if (upload.error) {
        toast({
          title: "Eroare la încărcarea imaginii",
          description: upload.error.message,
          variant: "destructive",
        });
        return;
      }
    }
    const { error } = await supabase
      .from("Properties")
      .update({
        name: values.property_name,
        image_url: file
          ? supabase.storage
              .from("properties")
              .getPublicUrl(`${props.property.id}/profile-pic`).data.publicUrl
          : props.property.image_url,
      })
      .match({ id: props.property.id });
    if (error) {
      toast({
        title: "Eroare la actualizarea proprietatii",
        description: error.message,
        variant: "destructive",
      });
      return;
    } else {
      toast({
        title: "Proprietatea a fost actualizata cu succes",
      });
      props.refetch();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="property_name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <Label htmlFor="property_name">Numele Proprietatii</Label>
              <FormControl>
                <Input id="property_name" className="w-max" {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="property_id"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <Label htmlFor="id">Id-ul proprietății</Label>
              <FormControl>
                <Input
                  className="max-w-[200px]"
                  id="id"
                  {...field}
                  disabled
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="room_number"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <Label htmlFor="nr">Număr de camere</Label>
              <FormControl>
                <Input
                  id="nr"
                  className="max-w-[200px]"
                  type="number"
                  {...field}
                  disabled
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Label htmlFor="file">Imaginea Proprietatii</Label>
        <Input
          id="file"
          type="file"
          onChange={handleFileChange}
          className="file:text-foreground file:mr-10 max-w-[200px] "
        />
        <img
          className="max-w-[300px] aspect-video object-cover rounded-[1rem]"
          src={previewUrl != null ? previewUrl : props.property.image_url}
        ></img>
        <Button
          type="submit"
          className={`${
            previewUrl != null || (!form.formState.isDirty && "opacity-0")
          } transition-all my-5`}
        >
          Actualizeaza
        </Button>
      </form>
    </Form>
  );
}

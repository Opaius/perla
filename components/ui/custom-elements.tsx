"use client";
import { cn } from "@/utils/cn";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./dialog";
import { Label } from "./label";
import { Input } from "./input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { useState } from "react";
import { Form, FormField, FormItem } from "./form";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { DialogDescription } from "@radix-ui/react-dialog";

export function CTA(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        "border-[2px] border-[#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold  hover:bg-foreground bg-accent hover:text-white transition duration-200"
      )}
    >
      {props.children}
    </button>
  );
}
export function TabSize(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <article
      {...props}
      className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center"
    >
      {props.children}
    </article>
  );
}
export function SejurPaste() {
  interface formSchema {
    tipOferta: number;
    adulti: number;
    copii1: number;
    copii2: number;
  }
  const [rezultat, setRezultat] = useState(0);
  const { register, handleSubmit, control } = useForm<formSchema>();
  const onSubmit: SubmitHandler<formSchema> = (data) => {
    console.log(data.tipOferta);
    const oferta = data.tipOferta;
    const adulti = data.adulti * oferta;
    const copii1 = data.copii1 * oferta * 0.5;
    const copii2 = data.copii2 * oferta * 0.7;
    const rez = adulti + copii1 + copii2;
    setRezultat(rez);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CTA className="shadow-[0_0_50px_black]">Calculează-ți sejurul</CTA>
      </DialogTrigger>
      <DialogContent className="p-8 w-[90vw] max-w-[600px]">
        <DialogHeader>Calculează prețul</DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="tipOferta"
            render={({ field }) => (
              <>
                <Label>Ce fel de ofertă aveți ?</Label>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Alege tipul de ofertă" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1800">3 nopți (4 zile)</SelectItem>
                    <SelectItem value="2200">4 nopți (5 zile)</SelectItem>
                    <SelectItem value="2600">5 nopți (6 zile)</SelectItem>
                  </SelectContent>
                </Select>
              </>
            )}
          />

          <FormItem>
            <Label>Adulți</Label>
            <Input {...register("adulti")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii între 5-12 ani</Label>
            <Input {...register("copii1")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii între 2-5 ani</Label>
            <Input {...register("copii2")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii sub 2 ani au gratuitate</Label>
          </FormItem>
          <Button type="submit">Submit</Button>
        </form>

        <DialogDescription>
          <i>Prețul sejurului : {rezultat} lei</i>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
export function SejurCraciun() {
  interface formSchema {
    adulti: number;
    copii1: number;
    copii2: number;
  }
  const [rezultat, setRezultat] = useState(0);
  const { register, handleSubmit, control } = useForm<formSchema>();
  const onSubmit: SubmitHandler<formSchema> = (data) => {
    const oferta = 2600;
    const adulti = data.adulti * oferta;
    const copii1 = data.copii1 * oferta * 0.5;
    const copii2 = data.copii2 * oferta * 0.7;
    const rez = adulti + copii1 + copii2;
    setRezultat(rez);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CTA className="shadow-[0_0_50px_black]">Calculează-ți sejurul</CTA>
      </DialogTrigger>
      <DialogContent className="p-8 w-[90vw] max-w-[600px]">
        <DialogHeader>Calculează prețul</DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem>
            <Label>Adulți</Label>
            <Input {...register("adulti")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii între 5-12 ani</Label>
            <Input {...register("copii1")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii între 2-5 ani</Label>
            <Input {...register("copii2")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii sub 2 ani au gratuitate</Label>
          </FormItem>
          <Button type="submit">Submit</Button>
        </form>

        <DialogDescription>
          <i>Prețul sejurului : {rezultat} lei</i>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export function SejurRevelion() {
  interface formSchema {
    adulti: number;
    copii1: number;
    copii2: number;
  }
  const [rezultat, setRezultat] = useState(0);
  const { register, handleSubmit, control } = useForm<formSchema>();
  const onSubmit: SubmitHandler<formSchema> = (data) => {
    const oferta = 3000;
    const adulti = data.adulti * oferta;
    const copii1 = data.copii1 * oferta * 0.5;
    const copii2 = data.copii2 * oferta * 0.7;
    const rez = adulti + copii1 + copii2;
    setRezultat(rez);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CTA className="shadow-[0_0_50px_black]">Calculează-ți sejurul</CTA>
      </DialogTrigger>
      <DialogContent className="p-8 w-[90vw] max-w-[600px]">
        <DialogHeader>Calculează prețul</DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem>
            <Label>Adulți</Label>
            <Input {...register("adulti")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii între 5-12 ani</Label>
            <Input {...register("copii1")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii între 2-5 ani</Label>
            <Input {...register("copii2")} type="number"></Input>
          </FormItem>

          <FormItem>
            <Label>Copii sub 2 ani au gratuitate</Label>
          </FormItem>
          <Button type="submit">Submit</Button>
        </form>

        <DialogDescription>
          <i>Prețul sejurului : {rezultat} lei</i>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

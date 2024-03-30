"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { CTAButton, CustomButton, H3, H4, Text } from "./styled-components";
import React from "react";
export const SejurPaste = () => {
  const formSchema = z.object({
    tipOferta: z.number(),
    adulti: z.number(),
    copii1: z.number(),
    copii2: z.number(),
  });
  const [rezultat, setRezultat] = React.useState(0);
  const { register, handleSubmit } = useForm<typeof formSchema>();
  const onSubmit: SubmitHandler<typeof formSchema> = (data) => {
    const oferta =
      data._input.tipOferta == 5
        ? 2600
        : data._input.tipOferta == 4
        ? 2200
        : 1800;
    const adulti = data._input.adulti * oferta;
    const copii1 = data._input.copii1 * oferta * 0.5;
    const copii2 = data._input.copii2 * oferta * 0.7;
    const rez = adulti + copii1 + copii2;
    setRezultat(rez);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 items-end justify-center gap-5">
          <label className="flex flex-col align-center">
            <Text>Tip ofertă</Text>
            <select
              {...register("_input.tipOferta")}
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
            >
              <option value={"3"}>3 nopți</option>
              <option value={"4"}>4 nopți</option>
              <option value={"5"}>5 nopți</option>
            </select>
          </label>
          <label className="flex flex-col align-center">
            <Text>Adulți</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              {...register("_input.adulti")}
              type="number"
            ></input>
          </label>
          <label className="flex flex-col align-center">
            <Text>Copii între 7-12 ani</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              {...register("_input.copii1")}
              type="number"
            ></input>
          </label>
          <label className="flex flex-col align-center">
            <Text>Copii între 3-5 ani</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              {...register("_input.copii2")}
              type="number"
            ></input>
          </label>
          <label className="flex flex-col align-center">
            <Text>Copii între 0-2 ani</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              type="number"
            ></input>
          </label>
          <CTAButton type="submit" className="">
            Calculeza
          </CTAButton>
          <H4 className="flex-auto">
            Rezultat : {rezultat} <i>lei</i>
          </H4>
        </div>
      </form>
    </div>
  );
};
export const SejurCraciun = () => {
  const formSchema = z.object({
    adulti: z.number(),
    copii1: z.number(),
    copii2: z.number(),
  });
  const [rezultat, setRezultat] = React.useState(0);
  const { register, handleSubmit } = useForm<typeof formSchema>();
  const onSubmit: SubmitHandler<typeof formSchema> = (data) => {
    const oferta = 2600;
    const adulti = data._input.adulti * oferta;
    const copii1 = data._input.copii1 * oferta * 0.5;
    const copii2 = data._input.copii2 * oferta * 0.7;
    const rez = adulti + copii1 + copii2;
    setRezultat(rez);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 items-end justify-center gap-5">
          <label className="flex flex-col align-center">
            <Text>Adulți</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              {...register("_input.adulti")}
              type="number"
            ></input>
          </label>
          <label className="flex flex-col align-center">
            <Text>Copii între 7-12 ani</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              {...register("_input.copii1")}
              type="number"
            ></input>
          </label>
          <label className="flex flex-col align-center">
            <Text>Copii între 3-5 ani</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              {...register("_input.copii2")}
              type="number"
            ></input>
          </label>
          <label className="flex flex-col align-center">
            <Text>Copii între 0-2 ani</Text>
            <input
              className="bg-foregroundM p-4 rounded-xl border-text border-2"
              type="number"
            ></input>
          </label>
          <CTAButton type="submit" className="">
            Calculeza
          </CTAButton>
          <H4 className="flex-auto">
            Rezultat : {rezultat} <i>lei</i>
          </H4>
        </div>
      </form>
    </div>
  );
};

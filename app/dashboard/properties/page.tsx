"use client";

import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getAllProperties } from "@/utils/supabase/SWR/actions-get";
import { PlusCircleIcon, RefreshCcw } from "lucide-react";
import Link from "next/link";
import NewPropertyForm from "./new-property-form";

export default function PropertiesPage() {
  const { properties, error, isLoading, refetch } = getAllProperties();
  console.log(properties);
  if (isLoading) return <Loader />;
  if (error) {
    return <div>{error.message}</div>;
  }
  if (properties?.length == 0)
    return (
      <div className="h-full w-full grid place-items-center">
        <text>Nu exista nici o proprietate</text>
        <Dialog>
          <DialogTrigger>Adauga o noua proprietate</DialogTrigger>
          <DialogContent>
            <DialogHeader>Adauga o noua proprietate</DialogHeader>
            <NewPropertyForm />
          </DialogContent>
        </Dialog>
        <Button onClick={refetch}>
          <RefreshCcw />
        </Button>
      </div>
    );
  return (
    <div className="grid justify-center sm:justify-start py-10 sm:py-0 sm:p-10 gap-5 sm:grid-cols-[repeat(auto-fit,400px)]">
      <Button
        onClick={refetch}
        className="absolute sm:fixed sm:left-auto left-[5rem] top-2.5 z-40 "
      >
        <RefreshCcw size="15  " />
      </Button>
      {properties?.map((el) => (
        <Link
          href={`/dashboard/properties/${el.id}`}
          className="max-w-[400px] w-[90dvw]"
        >
          <Card className="h-[300px] flex justify-center flex-col">
            <CardHeader>{el.name}</CardHeader>
            <CardContent className="">
              <img
                className="rounded-[1rem] object-cover aspect-video"
                src={el.image_url ? el.image_url : "/utils/placeholder-img.jpg"}
              ></img>
            </CardContent>
          </Card>
        </Link>
      ))}
      <Dialog>
        <DialogTrigger>
          <Card className="h-[300px] max-w-[400px] w-[90dvw]">
            <CardContent className="flex flex-col justify-center items-center h-full">
              <h1 className="text-xl flex items-center gap-3">
                Adauga o noua proprietate <PlusCircleIcon />
              </h1>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Adauga o noua proprietate</DialogHeader>
          <NewPropertyForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

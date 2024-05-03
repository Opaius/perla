"use client";

import Loader from "@/components/loader";
import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getPropertyRoomTypes } from "@/utils/supabase/SWR/actions-get";
import RoomTypeForm from "./components/property-rooms-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RoomTypeEditForm from "./components/room-type-form";
import Rooms from "./components/rooms";

export default function Page(params: { params: { id: string } }) {
  const { error, isLoading, roomTypes, refetch } = getPropertyRoomTypes(
    params.params.id
  );
  if (isLoading) return <Loader />;
  if (error) return <div>Failed to load</div>;
  if (roomTypes?.length == 0)
    return (
      <div className="flex justify-center">
        Niciun tip de camera adaugat
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: "default" })}>
            Add Room Type
          </DialogTrigger>
          <DialogContent>
            <RoomTypeForm propertyId={params.params.id} />
          </DialogContent>
        </Dialog>
      </div>
    );
  return (
    <div className="">
      <Accordion className="p-10" type="multiple">
        {roomTypes?.map((roomType) => (
          <AccordionItem value={roomType.name}>
            <AccordionTrigger className="text-xl">
              {roomType.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <RoomTypeEditForm roomType={roomType} refetch={refetch} />
                <Rooms roomType={roomType} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

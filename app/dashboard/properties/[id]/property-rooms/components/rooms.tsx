"use client";

import Loader from "@/components/loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getPropertyRoomsByRoomId } from "@/utils/supabase/SWR/actions-get";

export default function Rooms(props: { roomType: any }) {
  const { isLoading, error, rooms, refetch } = getPropertyRoomsByRoomId(
    props.roomType.id
  );
  if (isLoading) return <Loader />;
  return (
    <Accordion type="multiple">
      {rooms?.map((room) => (
        <AccordionItem value={room.name}>
          <AccordionTrigger>{room.name}</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      ))}
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: "outline" })}>
            Adauga o noua camera +
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              Adaug o noua camera de tip {props.roomType.name}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Accordion>
  );
}

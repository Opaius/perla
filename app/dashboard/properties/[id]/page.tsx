import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "@/components/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page(params: { params: { id: string } }) {
  return (
    <div className="grid justify-center sm:justify-start py-10 sm:py-0 sm:p-10 gap-5 sm:grid-cols-[repeat(auto-fit,400px)]">
      <Link
        href="/dashboard/properties/[id]/property-info"
        as={`/dashboard/properties/${params.params.id}/property-info`}
      >
        <Card className="p-5 max-w-[400px] w-[90dvw]">
          <CardHeader className="text-xl">Date despre proprietate</CardHeader>
          <CardContent>
            <h2 className="text-lg">Vezi si schimba date precum</h2>
            <ul className="list-disc font-extralight">
              <li>Id-ul proprietatii</li>
              <li>Id-ul de pe channel manager</li>
              <li>Numele proprietatii</li>
              <li>Sterge proprietatea</li>
            </ul>
          </CardContent>
        </Card>
      </Link>
      <Link
        href="/dashboard/properties/[id]/property-info"
        as={`/dashboard/properties/${params.params.id}/property-rooms`}
      >
        <Card className="p-5 max-w-[400px] w-[90dvw]">
          <CardHeader className="text-xl">Camerele din proprietate</CardHeader>
          <CardContent>
            <h2 className="text-lg">
              Vezi si schimba camerele si tipurile de camere
            </h2>
            <ul className="list-disc font-extralight">
              <li>Id-ul camerei</li>
              <li>Id-ul de pe channel manager</li>
              <li>Numele camerei</li>
              <li>Tipul camerei</li>
            </ul>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

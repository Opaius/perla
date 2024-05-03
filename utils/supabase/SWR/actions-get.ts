import useSWR from "swr";
import { createClient } from "../client";

const supabase = createClient();

export function getAllProperties() {
  const { data, error, mutate } = useSWR("properties", async () => {
    const { data, error } = await supabase.from("Properties").select("*");
    return { data, error };
  });

  return {
    properties: data?.data,
    isLoading: !data && !error,
    error,
    refetch: () => mutate(), // Function to manually refetch data
  };
}
export function getOneProperty(id: string) {
  const { data, error, mutate } = useSWR(`property-${id}`, async () => {
    const { data, error } = await supabase
      .from("Properties")
      .select("*")
      .eq("id", id)
      .single();
    return { data, error };
  });

  return {
    property: data?.data,
    isLoading: !data && !error,
    error,
    refetch: () => mutate(), // Function to manually refetch data
  };
}
export function getPropertyRoomTypes(id: string) {
  const { data, error, mutate } = useSWR(`property-${id}`, async () => {
    const { data, error } = await supabase
      .from("RoomTypes")
      .select("*")
      .eq("property_id", id);
    return { data, error };
  });

  return {
    roomTypes: data?.data,
    isLoading: !data && !error,
    error,
    refetch: () => mutate(), // Function to manually refetch data
  };
}
export function getPropertyRoomsByRoomId(id: string) {
  const { data, error, mutate } = useSWR(`property-${id}`, async () => {
    const { data, error } = await supabase
      .from("Rooms")
      .select("*")
      .eq("type", id);
    return { data, error };
  });

  return {
    rooms: data?.data,
    isLoading: !data && !error,
    error,
    refetch: () => mutate(), // Function to manually refetch data
  };
}

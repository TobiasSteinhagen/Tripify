import { useRouter } from "next/router";
import useSWR from "swr";
import TripDetails from "@/components/TripDetails";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: trips, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  if (!trips || isLoading) {
    return <h2>is Loading...</h2>;
  }

  async function handleDelete() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  const { title, location, timePeriod, img } = trips;
  const startDate = timePeriod.map((timePeriod) => `${timePeriod.startDate}`);
  const endDate = timePeriod.map((timePeriod) => `${timePeriod.endDate}`);

  return (
    <>
      <TripDetails
        title={title}
        location={location}
        handleDelete={handleDelete}
        img={img}
        timePeriod={timePeriod}
        id={id}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
}
